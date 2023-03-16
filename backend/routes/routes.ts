import { Router } from 'express';
import screenplayController from '../controllers/screenplayController';
import reviewsController from '../controllers/reviewController';

const router = Router();

router.use('/movies', screenplayController);
router.use('/reviews', reviewsController);

export default router;