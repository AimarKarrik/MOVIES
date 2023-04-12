import express, { query } from "express";
import { getScreenplays, getScreenplayById, deleteScreenplayById, createScreenplay, updateScreenplay, getScreenplayPages } from "../services/screenplayService";
import Screenplay from "../models/screenplayModel";
import { verifyAdmin } from "../services/authenication";


const router = express.Router();

router.get('/', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const screenplays: Screenplay[] | null = await getScreenplays({ page, pageSize });
    res.status(200).send({ status: 200, message: "Success", data: screenplays, pageCount: await getScreenplayPages(pageSize) });
});

router.get('/search', async (req, res) => {
    const query: string = req.query.q?.toString() || '';

    const result: Screenplay[] = await searchScreenplays(query);

    if (result.length === 0) {
        return res.status(404).send({ message: "No movies found matching your search" });
    }

    res.status(200).send({ status: 200, message: "Found", data: result });
});


router.get('/ById', async (req, res) => {
    const id: number = parseInt(req.query.id as string);

    const screenplay: Screenplay | null = await getScreenplayById(id);

    if (!screenplay) {
        res.status(404).send({ status: 404, message: "Not found", data: null })
        return;
    }

    res.status(200).send({ status: 200, message: "Success", data: screenplay });
});

router.delete('/', async (req, res) => {
    const id: number = parseInt(req.query.id as string);

    if (!await verifyAdmin(req.currentSession)) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    const deletedScreenplay: Screenplay | null = await deleteScreenplayById(id)

    res.status(200).send({ status: 200, message: "Deleted", data: deletedScreenplay });
});

router.post('/', async (req, res) => {

    const screenplayData: { title: string, description: string, director: string, image: string, releaseDate: Date, genres: string, ageRating: string, rating: number } = {
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        image: req.body.image,
        releaseDate: new Date(req.body.releaseDate),
        genres: req.body.director,
        ageRating: req.body.ageRating,
        rating: req.body.rating
    };

    if (await verifyAdmin(req.currentSession) === false) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    if (screenplayData.rating === 0 || screenplayData.title.length === 0) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }
    if (!screenplayData.rating || !screenplayData.title) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const screenplay: Screenplay = await createScreenplay(screenplayData);

    return res.status(201).send({ status: 201, message: "Created", data: screenplay });

});

router.put('/:id', async (req, res) => {
    const screenplayData: { id: number, title: string, description: string, director: string, image: string, releaseDate: Date, genres: string, ageRating: string, rating: number } = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        image: req.body.image,
        releaseDate: new Date(req.body.releaseDate),
        genres: req.body.director,
        ageRating: req.body.ageRating,
        rating: req.body.rating
    };

    if (await verifyAdmin(req.currentSession) === false) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    if (screenplayData.id === 0 || screenplayData.title.length === 0) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }
    if (!screenplayData.id || !screenplayData.title || !screenplayData.rating) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const screenplay: Screenplay | null = await updateScreenplay(screenplayData);
    if (!screenplay) return res.status(404).send({ status: 404, message: "Not found", data: null });

    return res.send({ status: 200, message: "OK", data: screenplay });
})

export default router;
