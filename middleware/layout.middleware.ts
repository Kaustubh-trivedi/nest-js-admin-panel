// layout.middleware.ts
import { Request, Response, NextFunction } from 'express';

export function layoutMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.session?.user) {
    res.locals.layout = 'index';
  } else {
    res.locals.layout = 'layout/auth';
  }
  next();
}
