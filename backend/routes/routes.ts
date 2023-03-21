import { Router } from 'express';
import screenplayController from '../controllers/screenplayController';
import reviewsController from '../controllers/reviewController';
import userController from '../controllers/userController';

const router = Router();

router.use('/movies', screenplayController);
router.use('/reviews', reviewsController);
router.use('/users', userController);

export default router;