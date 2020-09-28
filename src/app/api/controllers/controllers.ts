import { Router } from 'express';
import { characterRouter } from './character';

// Export all controllers
export const controllers: Router[] = [
  characterRouter
];