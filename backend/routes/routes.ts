import { Router } from 'express';
import screenplayController from '../controllers/screenplayController';
import reviewsController from '../controllers/reviewController';
import userController from '../controllers/userController';
import authController from '../controllers/authController';

const router = Router();

router.use('/screenplays', screenplayController);
router.use('/reviews', reviewsController);
router.use('/users', userController);
router.use('/auth', authController);

export default router;