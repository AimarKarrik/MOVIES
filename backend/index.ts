import express from 'express';
const cors = require('cors');
import screenplayController from './controllers/screenplayController';

const app: express.Application = express();
app.use(cors());
const port: number = 3001;

app.use('/movies', screenplayController);

 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});