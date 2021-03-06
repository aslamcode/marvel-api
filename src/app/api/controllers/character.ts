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
 *  /characters:
 *    get:
 *      summary: Get all characters
 *      tags: [Character]
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: offset
 *         description: Make offeset from item index to limit
 *         in: query
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit items in response
 *         in: query
 *         required: false
 *         type: string
 */
router.get('/characters', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit || 20);

    const data = await characterService.listAll({}, offset, limit);

    const total = data.total;
    const count = data.data.length;

    const response = responseFactory(data.data, 200, 'Ok', offset, limit, total, count);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});

/**
 * @swagger
 * path:
 *  /characters/:id:
 *    get:
 *      summary: Get a character by id
 *      tags: [Character]
 *      produces:
 *       - application/json
 */
router.get('/characters/:id', async (req: Request, res: Response) => {
  try {
    const data = await characterService.getById(req.params.id);
    const response = responseFactory(data, 200, 'Ok', 0, 1, 1, 1);

    res.success(response);
  } catch (err) {
    res.invalid(err);
  }
});

/**
 * @swagger
 * path:
 *  /characters/:id/comics:
 *    get:
 *      summary: Get all comics by character id
 *      tags: [Character]
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: offset
 *         description: Make offeset from item index to limit
 *         in: query
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit items in response
 *         in: query
 *         required: false
 *         type: string
 */
router.get('/characters/:id/comics', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit || 20);
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

/**
 * @swagger
 * path:
 *  /characters/:id/events:
 *    get:
 *      summary: Get all events by character id
 *      tags: [Character]
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: offset
 *         description: Make offeset from item index to limit
 *         in: query
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit items in response
 *         in: query
 *         required: false
 *         type: string
 */
router.get('/characters/:id/events', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit || 20);
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

/**
 * @swagger
 * path:
 *  /characters/:id/series:
 *    get:
 *      summary: Get all series by character id
 *      tags: [Character]
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: offset
 *         description: Make offeset from item index to limit
 *         in: query
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit items in response
 *         in: query
 *         required: false
 *         type: string
 */
router.get('/characters/:id/series', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit || 20);
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

/**
 * @swagger
 * path:
 *  /characters/:id/stories:
 *    get:
 *      summary: Get all stories by character id
 *      tags: [Character]
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: offset
 *         description: Make offeset from item index to limit
 *         in: query
 *         required: false
 *         type: string
 *       - name: limit
 *         description: Limit items in response
 *         in: query
 *         required: false
 *         type: string
 */
router.get('/characters/:id/stories', async (req: Request, res: Response) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit || 20);
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