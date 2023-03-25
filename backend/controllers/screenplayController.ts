import express, { query } from "express";
import { getScreenplays, getScreenplayById, deleteScreenplayById, createScreenplay, updateScreenplay } from "../services/screenplayService";
import Screenplay from "../models/screenplayModel";

const router = express.Router(); 

router.get('/', async (req, res) => { 
    const page: number = parseInt(req.query.page as string); 
    const pageSize: number = parseInt(req.query.pageSize as string); 
    
    const screenplays: Array<Screenplay> | null = await getScreenplays({page, pageSize}); 
    if (!screenplays) { 
        res.status(404).send({message:"Not found"}); 
        return; 
    }
    res.send(screenplays); 
});


router.get('/:id', async (req, res) => {
    const id: number = parseInt(req.params.id as string);

    const screenplay: Screenplay|null = await getScreenplayById(id);

    if (!screenplay) {
        res.status(404).send({message:"Not found"})
        return;
    }

    res.send(screenplay);
});

router.delete('/:id', async (req, res) => {
    const id: number = parseInt(req.params.id as string);

    await deleteScreenplayById(id)

    res.status(204).end()
});

router.post('/', async (req, res) => {
    const screenplayData: { title:string, description:string, director:string, image:ArrayBuffer ,releaseDate:Date, genres:string , ageRating: string, rating:number} = {
    title: req.body.title,
    description: req.body.description,
    director: req.body.director,
    image: new ArrayBuffer(parseInt(req.body.image)),
    releaseDate: new Date(req.body.releaseDate),
    genres: req.body.director,
    ageRating:req.body.ageRating,
    rating: parseInt(req.body.rating),
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
    const screenplayData: { id: number, title:string, description:string, director:string, image:ArrayBuffer ,releaseDate:Date, genres: string ,ageRating: string, rating:number} = {
        id: parseInt(req.body.id),
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        image: new ArrayBuffer(parseInt(req.body.image)),
        releaseDate: new Date(req.body.releaseDate),
        genres: req.body.director,
        ageRating:req.body.ageRating,
        rating: parseInt(req.body.rating),
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
