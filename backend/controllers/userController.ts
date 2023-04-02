import express from "express";
import { getUserByEmail, createUser, deleteUser, updateUser } from "../services/userService";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { verifyAdmin } from "../services/authenication";

const router = express.Router();

router.get('/', async (req, res) => {
    const email: string = req.query.email as string;

    const user: User | null = await getUserByEmail(email);
    if (!user) return res.status(404).send("User not found");

    const cleanUser = { ...user, password: undefined, id: undefined };

    res.send(cleanUser);
});


router.post('/register', async (req, res) => {
    const userData: { email: string, password: string, name: string } = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    };

    if (userData.email.length === 0 || userData.password.length === 0 || userData.name.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!userData.email || !userData.password || !userData.name) {
        return res.status(400).send("Missing required fields");
    }

    function validateEmail(email: string) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if (!validateEmail(userData.email)) {
        return res.status(400).send("Invalid email");
    }

    const salt: string = await bcrypt.genSaltSync(10);
    userData.password = await bcrypt.hash(userData.password, salt);

    const user: User = await createUser(userData);

    const cleanUser = { ...user, password: undefined, id: undefined };
    return res.status(200).send(cleanUser);
});


router.delete('/', async (req, res) => {
    const email: string = req.query.email as string;

    const user: User | null = await deleteUser(email);
    if (!user) return res.status(404).send("User not found");

    const cleanUser = { ...user, password: undefined, id: undefined };
    return res.send(cleanUser);
});


router.put('/', async (req, res) => {
    const userData: { email: string, password: string, name: string } = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    };

    if (userData.email.length === 0 || userData.password.length === 0 || userData.name.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!userData.email || !userData.password || !userData.name) {
        return res.status(400).send("Missing required fields");
    }

    function validateEmail(email: string) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if (!validateEmail(userData.email)) {
        return res.status(400).send("Invalid email");
    }

    const salt: string = await bcrypt.genSaltSync(10);
    userData.password = await bcrypt.hash(userData.password, salt);

    const updatedUser: User = await updateUser(userData);
    if (!updatedUser) return res.status(404).send("User not found");

    return res.send(updatedUser);
});


export default router;