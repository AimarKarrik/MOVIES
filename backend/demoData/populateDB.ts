import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
    const screenplays = JSON.parse(fs.readFileSync(path.join(__dirname, "screenplays.json"), "utf-8"));
    for (const screenplay of screenplays) {
        await prisma.screenplays.create({
            data: {
                title: screenplay.title,
                description: screenplay.description,
                director: screenplay.director,
                image: null,
                releaseDate: screenplay.releaseDate,
                genres: screenplay.genres,
                ageRating: screenplay.ageRating,
                rating: screenplay.rating,
            }
        })
    }
}