import express from "express";
import { MovieModel } from '../models/movieModel';

const router = express.Router();

router.get('/', (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const pagedMovies =  MovieModel.getMovies(page, pageSize);
    res.send(pagedMovies);
});

export default router;