import { NextResponse } from "next/server";

const DEFAULT_LOCALE = "id";
const PUBLIC_FILE = /\.(.*)$/;

const LOCALE_REGEX = /^[a-z]{2}(-[A-Z]{2})?$/;

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/_next") || pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
        return NextResponse.next();
    }

    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];
    const isLocaleInPath = LOCALE_REGEX.test(firstSegment);

    if (isLocaleInPath) {
        if (firstSegment === DEFAULT_LOCALE) {
            const newPath = "/" + segments.slice(1).join("/");

            return NextResponse.redirect(new URL(newPath || "/", request.url));
        }

        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        "/((?!_next|api|assets|static|robots|sitemap|.*\\..*).*)",
    ],
};
