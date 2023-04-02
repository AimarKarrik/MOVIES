import express from 'express';
const cors = require('cors');
import routes from './routes/routes';
import { getScreenplays } from './services/screenplayService';
import { populateScreenplays } from './demoData/populateDB';
import Screenplay from './models/screenplayModel';
import { verifyToken } from './services/authenication';
import Session from './models/sessionModel';

const app: express.Application = express();
app.use(cors());
app.use(express.json());
const port: number = 3001;

export const sessions: Session[] = [];

// app.use(verifyToken);
app.use(routes);


// Populate DB with demo data if it is empty
getScreenplays({page: 1, pageSize: 10}).then((screenplays: Screenplay[] | null) => {
    if (screenplays === null) {
        return;
    }
    if (screenplays.length === 0) {
        populateScreenplays();
    }
});

 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});