import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {NextRequest, NextResponse} from "next/server";

// export function middleware(req, res) {
//   console.log("middleware");
//   NextResponse.json("middleware");
// }

export const config = {
  matcher: ["/api/:path*", "/site"],
};
export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    console.log("I am ApI Middleware");
  } else if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("I am Dashboard Middleware");
  }
  else if (req.nextUrl.pathname.startsWith("/site")) {
    console.log("I am site Middleware");
  }
}
