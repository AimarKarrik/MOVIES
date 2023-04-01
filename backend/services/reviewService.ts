import prisma from "./prisma";
import Review from '../models/reviewModel';

export async function getReviewsByScreenplayPaged({ page, pageSize, screenplayId }: { page: number, pageSize: number, screenplayId: number }) {
    const reviews: Review[] | null = await prisma.reviews.findMany({ skip: (page - 1) * pageSize, take: pageSize, where: { screenplayId } });

    return reviews
}

export async function getReviewsByScreenplay(screenplayId : number) { 
    const reviews: Review[] | null = await prisma.reviews.findMany({ where: { screenplayId } });

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

export async function createReview({ title, content, rating, screenplayId, userId }: { title: string, content: string, rating: number, screenplayId: number, userId: number }) {
    const review: Review = await prisma.reviews.create({ data: { title, content, rating, screenplayId, userId } });

    return review
}

export async function updateReview({ id, title, content, rating }: { id: number, title: string, content: string, rating: number }) {
    const review: Review = await prisma.reviews.update({
        where: { id },
        data: {
            title: title,
            content: content,
            rating: rating,
        }
    });

    return review
}

export async function deleteReview(id: number) {
    const review: Review | null = await prisma.reviews.delete({ where: { id } });

    return review
}