export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*', '/raveups/:path*', '/friendscamps/:path*', '/calendar/:path*', '/todo/:path*', '/drive/:path*'],
};
