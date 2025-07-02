// middleware-arcjet.ts
import { NextRequest, NextResponse } from "next/server";
import aj, { createMiddleware, detectBot, shield } from "@/lib/arcjet";

const validate = aj
    .withRule(shield({ mode: "LIVE" }))
    .withRule(
        detectBot({
            mode: "LIVE",
            allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"],
        })
    );

export const middleware = createMiddleware(validate);

export const config = {
    matcher: ["/upload", "/api/upload", "/video/:path*"], // 👈 Apply Arcjet only to select routes
};