// // app/api/auth/callback/route.js
// import { NextResponse } from "next/server";
// import { getTokensFromCode } from "@/lib/google";

// export async function GET(request) {
//   const url = new URL(request.url);
//   const code = url.searchParams.get("code");

//   if (!code) {
//     return NextResponse.redirect("/?error=missing_code");
//   }

//   try {
//     const tokens = await getTokensFromCode(code);
//     const accessToken = tokens.access_token;

//     return NextResponse.redirect(`/upload?access_token=${accessToken}`);
//   } catch (err) {
//     console.error("OAuth Callback Error:", err);
//     return NextResponse.redirect("/?error=token_error");
//   }
// }

// app/api/oauth2callback/route.js
import { NextResponse } from "next/server";
import { getTokensFromCode } from "@/lib/google";

export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const tokens = await getTokensFromCode(code);
    return NextResponse.redirect(`/upload?access_token=${tokens.access_token}`);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
