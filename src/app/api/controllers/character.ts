import { Router } from 'express';
import { Request, Response } from '../../../middlewares/super-response/super-response';
import { characterService } from '../../domain/services/character';
import { comicService } from '../../domain/services/comic';
import { eventService } from '../../domain/services/event';
import { serieService } from '../../domain/services/serie';
import { storyService } from '../../domain/services/story';

const router: Router = Router();

router.post('/characters', async (req: Request, res: Response) => {
  try {
    res.success(await characterService.getAll(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id', async (req: Request, res: Response) => {
  try {
    res.success(await characterService.getById(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});


router.get('/characters/:id/comics', async (req: Request, res: Response) => {
  try {
    res.success(await comicService.getById(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});


router.put('/characters/:id/events', async (req: Request, res: Response) => {
  try {
    res.success(await eventService.getById(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});


router.delete('/characters/:id/series', async (req: Request, res: Response) => {
  try {
    res.success(await serieService.getById(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});

router.delete('/characters/:id/stories', async (req: Request, res: Response) => {
  try {
    res.success(await storyService.getById(req.params.id));
  } catch (err) {
    res.invalid(err);
  }
});


export { router as characterRouter };