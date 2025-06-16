// // app/api/oauth2callback/route.js
// import { getTokensFromCode } from "@/lib/google";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const code = url.searchParams.get("code");

//   if (!code) {
//     return NextResponse.json({ error: "No code provided" }, { status: 400 });
//   }

//   try {
//     const tokens = await getTokensFromCode(code);
//     console.log(tokens);
//     return NextResponse.redirect(`/upload?access_token=${tokens.access_token}`);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// app/api/oauth2callback/route.js
import { NextResponse } from "next/server";
import { getTokensFromCode } from "@/lib/google";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  try {
    const tokens = await getTokensFromCode(code);
    const accessToken = tokens.access_token;

    if (!accessToken) {
      return NextResponse.json({ error: "No access token" }, { status: 500 });
    }

    // ✅ Redirect to /upload with access_token in query params
    return NextResponse.redirect(
      `http://localhost:3000/superadmin?access_token=${accessToken}`
    );
  } catch (error) {
    console.error("OAuth Callback Error:", error);
    return NextResponse.json(
      { error: "Token exchange failed" },
      { status: 500 }
    );
  }
}
