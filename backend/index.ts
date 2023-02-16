import express from 'express';
import fs from 'fs';
const cors = require('cors');

const app: express.Application = express();
app.use(cors());
const port: number = 3001;

const moviesJsonData: string = fs.readFileSync('./demoData/moviesDemoData.json', 'utf8');
const movies: Array<object> = JSON.parse(moviesJsonData);; 


app.get('/movies', (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const pagedMovies = movies.slice((page - 1) * pageSize, page * pageSize);
    res.send(pagedMovies);
});
 
app.listen(port, () => {
    console.log(`Movies backend server is running on http://localhost:${port}/`);
});