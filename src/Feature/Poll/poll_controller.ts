import { Request, Response, NextFunction } from 'express';
import { PollService } from './poll_service';

const pollService = new PollService();

export const getAllPolls = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const polls = await pollService.getAllPolls();
      res.json(polls);
   } catch (err) {
      console.error('[getAllPolls]', err);
      next(err); // Usamos next para que Express lo maneje bien
   }
};

export const createPoll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const { title } = req.body;

      if (!title || typeof title !== 'string') {
         res.status(400).json({ error: 'El título es obligatorio y debe ser un string' });
         return;
      }

      const poll = await pollService.createPoll(title);
      res.status(201).json(poll);
   } catch (err) {
      console.error('[createPoll]', err);
      next(err);
   }
};
