import { Router } from 'express';
import { characterRouter } from './character';
import { authRouter } from './auth';

// Export all controllers
export const controllers: Router[] = [
  characterRouter,
  authRouter
];