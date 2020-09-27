import { Router } from 'express';
import { authService } from '../../domain/services/auth';
import { Request, Response } from '../../../middlewares/super-response/super-response';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth management
 */

const router: Router = Router();

/**
 * @swagger
 * path:
 *  /auth/login:
 *    post:
 *      summary: Autenticate a user
 *      tags: [Auth]
 */
router.post('/auth/login', async (req: Request, res: Response) => {
  const { user, password } = req.body;

  try {
    res.success(await authService.auth(user, password));
  } catch (err) {
    res.invalid(err);
  }
});

export { router as authRouter };