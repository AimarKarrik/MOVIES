import express from 'express';
const cors = require('cors');
import routes from './routes/routes';

const app: express.Application = express();
app.use(cors());
const port: number = 3001;

app.use(routes);
 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});