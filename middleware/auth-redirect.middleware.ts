import { Request, Response, NextFunction } from 'express';

const PUBLIC_ROUTES = ['/auth/login', '/auth/register'];

export function authRedirectMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    req.path.startsWith(route),
  );

  const isAuthenticated = !!req.session?.user;

  // 🔹 Visiting "/" directly
  if (req.path === '/') {
    return isAuthenticated
      ? res.redirect('/dashboard')
      : res.redirect('/auth/login');
  }

  // 🔹 Public routes (login/register)
  if (isPublicRoute) {
    return next();
  }

  // 🔹 Protected routes
  if (!isAuthenticated) {
    const burl = encodeURIComponent(req.path.replace('/', ''));
    return res.redirect(`/auth/login?burl=${burl}`);
  }

  next();
}
