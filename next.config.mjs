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
