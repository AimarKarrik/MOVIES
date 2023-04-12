import express from "express";
import Review from "../models/reviewModel";
import user from './../models/userModel';
import { getReviewsByUser, getReviewsByScreenplayPaged, getReviewById, createReview, deleteReview, updateReview, getReviewsByScreenplay } from "../services/reviewService";
import { getScreenplayById, updateScreenplay } from "../services/screenplayService";
import { getUserByEmail } from "../services/userService";
import Screenplay from "../models/screenplayModel";

const router = express.Router();

router.get('/ByUser', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const user: user | null = await getUserByEmail(req.query.email as string);
    if (!user) {
        return res.status(404).send({ status: 404, message: "User not found", data: null });
    }

    const userId: number = user.id;

    const reviews: Review[] = await getReviewsByUser({ page, pageSize, userId });

    return res.status(200).send({ status: 200, message: "OK", data: reviews });
});

router.get('/ByScreenplay', async (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);
    const screenplayId: number = parseInt(req.query.screenplayId as string);

    const reviews: Review[] = await getReviewsByScreenplayPaged({ page, pageSize, screenplayId });

    return res.status(200).send({ status: 200, message: "OK", data: reviews });
});

router.get('/ById', async (req, res) => {
    const reviewId: number = parseInt(req.query.reviewId as string);

    const review: Review | null = await getReviewById(reviewId);
    if (!review) return res.status(404).send({ status: 404, message: "Review not found", data: null });

    return res.status(200).send({ status: 200, message: "OK", data: review });
});

router.post('/', async (req, res) => {
    const reviewData: { userId: number, screenplayId: number, rating: number, content: string, title: string } = {
        userId: req.currentSession!.userId,
        screenplayId: req.body.screenplayId,
        rating: req.body.rating,
        content: req.body.content,
        title: req.body.title
    };

    if (!reviewData.userId || !reviewData.screenplayId || !reviewData.rating || !reviewData.content || !reviewData.title) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const review: Review = await createReview(reviewData);

    const screenplay: Screenplay | null = await getScreenplayById(reviewData.screenplayId);

    if (!screenplay) {
        res.status(500).send({ status: 500, message: "Internal server error", data: null });
        return
    }

    const reviews: Review[] | null = await getReviewsByScreenplay(reviewData.screenplayId);

    const averageRating = reviews.reduce((total, review) => {
        return total + review.rating;
    }, 0) / reviews.length;

    screenplay.rating = averageRating;
    await updateScreenplay(screenplay);

    return res.status(201).send({ status: 201, message: "Created", data: review });
});


router.delete('/', async (req, res) => {
    const reviewId: number = parseInt(req.query.id as string);

    const review: Review | null = await getReviewById(reviewId);
    if (!review) {
        return res.status(404).send({ status: 404, message: "Review not found", data: null });
    }
    if (review.userId !== req.currentSession!.userId) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null});
    }


    const deletedReview: Review | null = await deleteReview(reviewId);

    return res.status(200).send({ status: 200, message: "OK", data: deletedReview });
});

router.put('/', async (req, res) => {
    const reviewData: { id: number, title: string, content: string, rating: number } = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        rating: req.body.rating
    };

    if (!reviewData.id || !reviewData.content || !reviewData.title || !reviewData.rating) {
        return res.status(400).send({ status: 400, message: "Missing required fields", data: null });
    }

    const review: Review | null = await getReviewById(reviewData.id);
    if (!review) {
        return res.status(404).send({ status: 404, message: "Review not found", data: null });
    }
    if (review.userId !== req.currentSession!.userId) {
        return res.status(401).send({ status: 401, message: "Unauthorized", data: null});
    }

    const updatedReview: Review | null = await updateReview(reviewData);

    return res.status(200).send({ status: 200, message: "OK", data: updatedReview });
});

export default router;
