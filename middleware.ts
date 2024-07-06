import { auth } from "./auth";

export default auth((req) => {
  const baseurl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  if (!req.auth) {
    const signInUrl = new URL(`${baseurl}/signin`);
    return Response.redirect(signInUrl);
  }

  if (req.auth.user?.email !== "abhimanyu1992002@gmail.com") {
    return Response.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  matcher: ["/create"],
};
