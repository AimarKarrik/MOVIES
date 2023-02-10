import express from 'express';
import fs from 'fs';
 
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3001;

const moviesJsonData: string = fs.readFileSync('./demoData/moviesDemoData.json', 'utf8');
const movies: Array<object> = JSON.parse(moviesJsonData);; 


app.get('/movies', (req, res) => {
    // page movies and return the data
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const pagedMovies = movies.slice((page - 1) * pageSize, page * pageSize);
    res.send(pagedMovies);
});
 
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});