import { Router } from 'express';
import screenplayController from '../controllers/screenplayController';
import reviewsController from '../controllers/reviewController';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import episodeController from '../controllers/episodeController';

const router = Router();

router.use('/screenplays', screenplayController);
router.use('/reviews', reviewsController);
router.use('/users', userController);
router.use('/auth', authController);
router.use('/episodes', episodeController);

export default router;