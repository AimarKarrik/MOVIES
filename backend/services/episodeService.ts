import prisma from "./prisma";
import Episode from "../models/episodeModel";

export async function getEpisodes(screenplayId: number) {
    const result: Episode[] | null = await prisma.episodes.findMany({ where: { screenplayId: screenplayId } });

    return result;
}

export async function getEpisodeById(id: number) {
    const result: Episode | null = await prisma.episodes.findUnique({ where: { id } })

    return result;
}

export async function deleteEpisodeById(id: number) {
    const result: Episode | null = await prisma.episodes.findUnique({ where: { id } })

    return result;
}

export async function createEpisode(episode: Episode) {
    let { title, description, season, number, releaseDate, rating, image, screenplayId } = episode;

    const result: Episode = await prisma.episodes.create({
        data: {
            title: title,
            description: description,
            season: season,
            number: number,
            releaseDate: releaseDate,
            rating: rating,
            image: image,
            screenplayId: screenplayId,
        }
    })
    return result;
}

export async function updateEpisode(episode: Episode) {
    let { id, title, description, season, number, releaseDate, rating, image, screenplayId } = episode;
    const result: Episode = await prisma.episodes.update({
        where: { id },
        data: {
            title: title,
            description: description,
            season: season,
            number: number,
            releaseDate: releaseDate,
            rating: rating,
            screenplayId: screenplayId,
        }
    })
    return result;
}