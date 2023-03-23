import express from "express";
import { getScreenplays } from "../services/screenplayService";
import Screenplay from "../models/screenplayModel";

const router = express.Router();

router.get('/', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const screenplays: Array<Screenplay> = await getScreenplays({ page, pageSize });
    res.send(screenplays);
});


export default router;