import { NextFunction } from 'express';
import { Request, Response } from '../super-response/super-response';

/**
 * A middleware function to Check if user is logged
 */
export function permit() {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if user is logged
    if (true) {
    }
    else {
      res.unauthorized({ logged: false });
    }
  };
}