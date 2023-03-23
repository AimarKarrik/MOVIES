import express from "express"; // impordib webframework'i et teha API endpointid
import { deleteScreenplayById, getScreenplayById, getScreenplays } from "../services/screenplaysService"; // impordib data query funktsioonid teisest failist
import { Screenplay } from "../models/screenplayModel"; // impordib screenplay tüübi

const router = express.Router(); //võtab tööriistakastist välja routingu tööriistad

router.get('/', //kuulab get päringut mis tuleb aadressile /movies, käivitab järgmisel real oleva funktsiooni
async (req, res) => { //req nõuab informatsiooni kliedilt (chromilt) ja res saab vastuse peale seda
    const page: number = parseInt(req.query.page as string); // võtab chromist url'i pealt lehekülje number ja konventeerb selle päriselt numbriks
    const pageSize: number = parseInt(req.query.pageSize as string); 
    
    const screenplays: Array<Screenplay> = await getScreenplays({page, pageSize}); //küsib andmebaasist andmeid ja ootab neid ära
    res.send(screenplays); //saab vastuse kliendile (chromile)
});

//tahame saada aniult ühe screenplay
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

export default router;
