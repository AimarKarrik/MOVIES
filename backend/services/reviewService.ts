import prisma from "./prisma";
import Review from '../models/reviewModel';
import ReviewCreate from './../models/reviewCreateModel';

export async function getReviewsByScreenplay({ page, pageSize, screenplayId }: { page: number, pageSize: number, screenplayId: number }) {
    const reviews: Review[] | null = await prisma.reviews.findMany({ skip: (page - 1) * pageSize, take: pageSize, where: { screenplayId } });

    return reviews
}

export async function getReviewsByUser({ page, pageSize, userId }: { page: number, pageSize: number, userId: number }) {
    const reviews: Review[] | null = await prisma.reviews.findMany({ skip: (page - 1) * pageSize, take: pageSize, where: { userId } });

    return reviews
}

export async function getReviewById(id: number) {
    const review: Review | null = await prisma.reviews.findUnique({ where: { id } });

    return review
}

export async function createReview(review: ReviewCreate) {
    let { title, content, rating, screenplayId, userId } = review;
    const result: Review = await prisma.reviews.create({ data: { title, content, rating, screenplayId, userId } });

    return result
}

export async function updateReview(review: Review) {
    let { id, title, content, rating } = review;
    const result: Review | null = await prisma.reviews.update({
        where: { id },
        data: {
            title: title,
            content: content,
            rating: rating,
        }
    });

    return result
}

export async function deleteReview(id: number) {
    const review: Review | null = await prisma.reviews.delete({ where: { id } });

    return review
}