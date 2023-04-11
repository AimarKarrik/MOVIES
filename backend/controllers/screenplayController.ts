import express from "express";
import { getScreenplays, getScreenplayById, deleteScreenplayById, createScreenplay, updateScreenplay, searchScreenplays } from "../services/screenplayService";
import Screenplay from "../models/screenplayModel";
import { verifyAdmin, verifyToken } from "../services/authenication";


const router = express.Router();

router.get('/', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const screenplays: Screenplay[] | null = await getScreenplays({ page, pageSize });
    res.send(screenplays);
});

router.get('/search', verifyToken, async (req, res) => {
    try { 
    const query = req.query.q?.toString() || '';
    const page = parseInt(req.query.page?.toString() || '1');
    const pageSize = parseInt(req.query.pageSize?.toString() || '10');
  
    const results = await searchScreenplays(query, page, pageSize);
    res.send(results);
} catch (error) {
        console.log(error);
    res.status(500).send("Not found");
    }
}
  );
  

router.get('/ById', async (req, res) => {
    const id: number = parseInt(req.query.id as string);

    const screenplay: Screenplay | null = await getScreenplayById(id);

    if (!screenplay) {
        res.status(404).send({ message: "Not found" })
        return;
    }

    res.send(screenplay);
});

router.delete('/', async (req, res) => {
    const id: number = parseInt(req.query.id as string);

    if (await verifyAdmin(req.currentSession) === false) {
        return res.status(401).send("Unauthorized");
    };

    await deleteScreenplayById(id)

    res.status(200).send({ status: 200, message: "Deleted" });
});

router.post('/', async (req, res) => {
    const screenplayData: { title: string, description: string, director: string, image: ArrayBuffer, releaseDate: Date, genres: string, ageRating: string, rating: number } = {
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        image: new ArrayBuffer(req.body.image),
        releaseDate: new Date(req.body.releaseDate),
        genres: req.body.director,
        ageRating: req.body.ageRating,
        rating: req.body.rating
    };

    if (await verifyAdmin(req.currentSession) === false) {
        return res.status(401).send("Unauthorized");
    };

    if (screenplayData.rating === 0 || screenplayData.title.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!screenplayData.rating || !screenplayData.title) {
        return res.status(400).send("Missing required fields");
    }

    const screenplay: Screenplay = await createScreenplay(screenplayData);

    return res.send(screenplay);

});

router.put('/:id', async (req, res) => {
    const screenplayData: { id: number, title: string, description: string, director: string, image: ArrayBuffer, releaseDate: Date, genres: string, ageRating: string, rating: number } = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        image: new ArrayBuffer(req.body.image),
        releaseDate: new Date(req.body.releaseDate),
        genres: req.body.director,
        ageRating: req.body.ageRating,
        rating: req.body.rating
    };

    if (await verifyAdmin(req.currentSession) === false) {
        return res.status(401).send("Unauthorized");
    };

    if (screenplayData.id === 0 || screenplayData.title.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!screenplayData.id || !screenplayData.title || !screenplayData.rating) {
        return res.status(400).send("Missing required fields");
    }

    const screenplay: Screenplay | null = await updateScreenplay(screenplayData);
    if (!screenplay) return res.status(404).send("Not found");

    return res.send(screenplay);
})

export default router;
