import { Router } from 'express';
import { getAllPolls, createPoll, getAllActivePolls } from './poll_controller';

const router = Router();

router.get('/polls', getAllPolls);
router.get('/polls/active', getAllActivePolls);

router.post('/polls', createPoll); 

export default router;
