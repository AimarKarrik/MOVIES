import { PrismaClient } from "@prisma/client";
import fs from "fs";
import bcrypt from "bcrypt";
import Screenplay from "./models/screenplayModel";

import User from "./models/userModel";
import Review from "./models/reviewModel";

const prisma: PrismaClient = new PrismaClient();

async function main() {
    const screenplays: Screenplay[] = JSON.parse(fs.readFileSync("./demoData/movieData.json", "utf-8"));
    for (const screenplay of screenplays) {

        await prisma.screenplays.create({
            data: {
                title: screenplay.title,
                description: screenplay.description,
                director: screenplay.director,
                image: screenplay.image,
                releaseDate: screenplay.releaseDate,
                genres: screenplay.genres,
                ageRating: screenplay.ageRating,
                rating: screenplay.rating,
            }
        })
    }

    const users: User[] = JSON.parse(fs.readFileSync("./demoData/userData.json", "utf-8"));
    for (const user of users) {

        const salt: string = await bcrypt.genSaltSync(10);
        user.password = await bcrypt.hash(user.password, salt);

        await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin,
            }
        })
    }

    const reviews: Review[] = JSON.parse(fs.readFileSync("./demoData/reviewData.json", "utf-8"));
    for (const review of reviews) {
        await prisma.reviews.create({
            data: {
                title: review.title,
                content: review.content,
                rating: review.rating,
                userId: review.userId,
                screenplayId: review.screenplayId,
            }
        })
    }
}

main().catch((e) => {
    throw e;
}).finally(async () => {
    await prisma.$disconnect();
});