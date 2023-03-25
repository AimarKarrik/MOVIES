import express from "express";
import Review from "../models/reviewModel";
import user from './../models/userModel';
import { getReviewsByUser, getReviewsByScreenplay, getReviewById, createReview, deleteReview, updateReview } from "../services/reviewService";
import { getUserByEmail } from "../services/userService";
import { title } from "process";

const router = express.Router();

router.get('/ByUser', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const user: user | null = await getUserByEmail(req.query.email as string);
    if (!user) return res.status(404).send("User not found");

    const userId: number = user.id as number;

    const reviews: Review[] = await getReviewsByUser({ page, pageSize, userId });

    res.send(reviews);
});

router.get('/ByScreenplay', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);
    const screenplayId: number = parseInt(req.query.screenplayId as string);

    const reviews: Review[] = await getReviewsByScreenplay({ page, pageSize, screenplayId });
});

router.get('/ById', async (req, res) => {
    const reviewId: number = parseInt(req.query.reviewId as string);

    const review: Review | null = await getReviewById(reviewId);
    if (!review) return res.status(404).send("Review not found");

    res.send(review);
});

router.post('/', async (req, res) => {
    const reviewData: { userId: number, screenplayId: number, rating: number, content: string, title: string } = {
        userId: parseInt(req.query.userId as string),
        screenplayId: parseInt(req.query.screenplayId as string),
        rating: parseInt(req.query.rating as string),
        content: req.query.content as string,
        title: req.query.title as string
    };

    if (reviewData.userId === 0 || reviewData.screenplayId === 0 || reviewData.rating === 0 || reviewData.content.length === 0, reviewData.title.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!reviewData.userId || !reviewData.screenplayId || !reviewData.rating || !reviewData.content || !reviewData.title) {
        return res.status(400).send("Missing required fields");
    }

    const review: Review = await createReview(reviewData);

    return res.send(review);
});


router.delete('/', async (req, res) => {
    const reviewId: number = parseInt(req.query.reviewId as string);

    const review: Review | null = await deleteReview(reviewId);
    if (!review) return res.status(404).send("Review not found");

    return res.send(review);
});

router.put('/', async (req, res) => {
    const reviewData: { id: number, title: string, content: string, rating: number } = {
        id: parseInt(req.query.id as string),
        title: req.query.title as string,
        content: req.query.content as string,
        rating: parseInt(req.query.rating as string)
    };

    if (reviewData.id === 0 || reviewData.content.length === 0, reviewData.title.length === 0) {
        return res.status(400).send("Missing required fields");
    }
    if (!reviewData.id || !reviewData.content || !reviewData.title || !reviewData.rating) {
        return res.status(400).send("Missing required fields");
    }

    const review: Review | null = await updateReview(reviewData);
    if (!review) return res.status(404).send("Review not found");

    return res.send(review);
});

export default router;
