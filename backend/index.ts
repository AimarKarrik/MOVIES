import express from 'express';
const cors = require('cors');
import routes from './routes/routes';
import { getScreenplays } from './services/screenplayService';
import { populateScreenplays } from './demoData/populateDB';

const app: express.Application = express();
app.use(cors());
const port: number = 3001;

app.use(routes);

// Populate DB with demo data if it is empty
if( !getScreenplays({ page: 1, pageSize: 1 })){
    populateScreenplays();
}
 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});