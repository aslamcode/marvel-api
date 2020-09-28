import { Router } from 'express';
import { Request, Response } from '../../../middlewares/super-response/super-response';
import { characterService } from '../../domain/services/character';
import { comicService } from '../../domain/services/comic';
import { eventService } from '../../domain/services/event';
import { serieService } from '../../domain/services/serie';
import { storyService } from '../../domain/services/story';
import { responseFactory } from '../factories/response-factory';

/**
 * @swagger
 * tags:
 *   name: Character
 *   description: Character management
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
router.get('/characters', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit || 20);

    const data = await characterService.listAll({}, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id', async (req: Request, res: Response) => {
  try {
    const data = await characterService.getById(req.params.id);
    const response = responseFactory(data, 200, 'Ok', 0, 1, 1, 1);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id/comics', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit || 20);
    const characterId = req.params.id;

    const data = await comicService.getByCharacterId(characterId, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id/events', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit || 20);
    const characterId = req.params.id;

    const data = await eventService.getByCharacterId(characterId, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id/series', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit || 20);
    const characterId = req.params.id;

    const data = await serieService.getByCharacterId(characterId, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});

router.get('/characters/:id/stories', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit || 20);
    const characterId = req.params.id;

    const data = await storyService.getByCharacterId(characterId, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});


export { router as characterRouter };