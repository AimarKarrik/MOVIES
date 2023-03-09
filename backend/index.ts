import express from 'express';
const cors = require('cors');
import moviesController from './controllers/movieController';
import reviewsController from './controllers/reviewsController/reviewGet';

const app: express.Application = express();
app.use(cors());
const port: number = 3001;

app.use('/movies', moviesController);

app.use('/reviews', reviewsController);
 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});