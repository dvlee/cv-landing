import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/shared/i18n/config";

/** Pick a supported locale from Accept-Language; default to `ru`. */
function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ordered = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { base } of ordered) {
    if (base === "en") return "en";
    if (base === "ru") return "ru";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any file (has a dot): favicon.ico, resume.pdf, images, og.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
