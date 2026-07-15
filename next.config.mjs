import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { withIntlayer } from "next-intlayer/server";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    // Pin the file-tracing root to this project. Without it, the root
    // `pnpm-workspace.yaml` + multiple lockfiles make Next infer a parent
    // workspace root, so middleware trace files (middleware.js.nft.json) are
    // written to the wrong path and the Vercel build fails with ENOENT.
    outputFileTracingRoot: projectRoot,
    // Keep intlayer's config bundler (which pulls in esbuild) out of the
    // webpack bundle — webpack can't parse esbuild's shipped .d.ts files.
    // Required so the webpack production build (see build script) succeeds.
    serverExternalPackages: ["esbuild", "@intlayer/config"],
    webpack: (config, { isServer, webpack }) => {
        // esbuild is only used at build/dev time by intlayer; never at runtime
        // (dictionaries are precompiled). Leaving it as an external require
        // stops webpack from trying to parse esbuild's .d.ts files.
        if (isServer) {
            config.externals.push({ esbuild: "commonjs esbuild" });
        }
        // Belt-and-suspenders: ignore any .d.ts pulled into a require context.
        config.plugins.push(
            new webpack.IgnorePlugin({ resourceRegExp: /\.d\.ts$/ }),
        );
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
    },
};

export default withIntlayer(nextConfig);
