export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!auth/login|register).*)", // Protect all routes except /auth/login and /register
  ],
};
