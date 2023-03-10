import express from 'express';
import cors from 'cors';
import screenplayController from './controllers/screenplayController';
import reviewsController from './controllers/reviewsController/reviewGet';

const app: express.Application = express();
app.use(cors());

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const port: number = 3001;

app.use('/movies', screenplayController);

app.use('/reviews', reviewsController);
 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});