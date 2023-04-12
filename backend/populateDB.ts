import { PrismaClient } from "@prisma/client";
import fs from "fs";
import Screenplay from "./models/screenplayModel";

const prisma: PrismaClient = new PrismaClient();
const encoder = new TextEncoder();

async function main() {
    const screenplays: Screenplay[] = JSON.parse(fs.readFileSync("./demoData/moviesData.json", "utf-8"));
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
}

main().catch((e) => {
    throw e;
}).finally(async () => {
    await prisma.$disconnect();
});