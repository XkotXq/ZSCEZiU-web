export { default } from "next-auth/middleware"
export const config = {
    matcher: ["/dashboard/:path*", "/register"]
}

// import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
//
// export default withAuth(
//     function middleware(req) {
//         console.log(requerst.nextUrl.pathname)
//         console.log(req.nextauth.token)
//     },
//     {
//         callbacks: {
//             authorized: ({token}) => token?.role === "administrator"
//         },
//     }
// )