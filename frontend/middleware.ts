import { rewrite } from "@vercel/edge";

export default function middleware() {
  console.log("------Frontend Middleware----");
  return rewrite("/b");
  // return NextResponse.next();
}
