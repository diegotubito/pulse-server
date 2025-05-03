import { Router } from 'express';
import { getAllPolls, createPoll } from './poll_controller';

const router = Router();

router.get('/polls', getAllPolls);
router.post('/polls', createPoll); 

export default router;
