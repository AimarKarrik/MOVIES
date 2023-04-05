import Express from "express";
import { getEpisodeById, getEpisodes, createEpisode, deleteEpisodeById, updateEpisode } from "../services/episodeService";
import Episode from "../models/episodeModel";
import { verifyAdmin } from "../services/authenication";

const router = Express.Router();

router.get('/', async (req, res) => {
    const screenplayId: number = parseInt(req.query.screenplayId as string);

    const episodes: Episode[] = await getEpisodes(screenplayId);

    return res.status(200).send({ status: 200, message: "OK", data: episodes });
});

router.get('/ById', async (req, res) => {
    const episodeId: number = parseInt(req.query.episodeId as string);

    const episode: Episode | null = await getEpisodeById(episodeId);
    if (!episode) {
        return res.status(404).send({ status: 404, message: "Not Found", data: null });
    }

    return res.status(200).send({ status: 200, message: "OK", data: episode });
});

router.post('/', async (req, res) => {
    const episodeData: { title: string, description: string, season: number, number: number, releaseDate: Date, rating: number, image?: ArrayBuffer | null, screenplayId: number } = {
        title: req.body.title,
        description: req.body.description,
        season: req.body.season,
        number: req.body.number,
        releaseDate: req.body.releaseDate,
        rating: req.body.rating,
        image: req.body.image,
        screenplayId: req.body.screenplayId
    };

    if (!await verifyAdmin(req.currentSession)) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    if (!episodeData.title || !episodeData.description || !episodeData.season || !episodeData.number || !episodeData.releaseDate || !episodeData.rating || !episodeData.screenplayId) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const episode: Episode = await createEpisode(episodeData);

    return res.status(200).send({ status: 200, message: "OK", data: episode });
});

router.delete('/', async (req, res) => {
    const episodeId: number = parseInt(req.query.episodeId as string);

    if (!await verifyAdmin(req.currentSession)) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    const episode: Episode | null = await deleteEpisodeById(episodeId);
    if (!episode) {
        return res.status(404).send({ status: 404, message: "Not Found", data: null });
    }

    return res.status(200).send({ status: 200, message: "OK", data: episode });
});

router.put('/', async (req, res) => {
    const episodeData: { id: number, title: string, description: string, season: number, number: number, releaseDate: Date, rating: number, image?: ArrayBuffer | null, screenplayId: number } = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        season: req.body.season,
        number: req.body.number,
        releaseDate: req.body.releaseDate,
        rating: req.body.rating,
        image: req.body.image,
        screenplayId: req.body.screenplayId
    };

    if (!await verifyAdmin(req.currentSession)) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null });
    };

    if (!episodeData.id || !episodeData.title || !episodeData.description || !episodeData.season || !episodeData.number || !episodeData.releaseDate || !episodeData.rating || !episodeData.screenplayId) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const episode: Episode | null = await updateEpisode(episodeData);
    if (!episode) {
        return res.status(404).send({ status: 404, message: "Not Found", data: null });
    }

    return res.status(200).send({ status: 200, message: "OK", data: episode });
});

export default router;