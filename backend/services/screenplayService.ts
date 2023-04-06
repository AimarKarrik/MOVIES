import prisma from "./prisma";
import Screenplay from "../models/screenplayModel"

export async function getScreenplays({ page, pageSize }: { page: number, pageSize: number }) {
  const screenplays: Screenplay[] | null = await prisma.screenplays.findMany({ skip: (page - 1) * pageSize, take: pageSize });

  return screenplays
}

export async function getScreenplayById(id: number) {
  const screenplay: Screenplay | null = await prisma.screenplays.findUnique({ where: { id } })

  return screenplay;
}

export async function deleteScreenplayById(id: number) {
  const screenplay: Screenplay | null = await prisma.screenplays.findUnique({ where: { id } })

  return screenplay;
}

export async function createScreenplay(screenplay: Screenplay) {
  let { title, description, director, image, releaseDate, genres, ageRating, rating } = screenplay;
  
  const result: Screenplay = await prisma.screenplays.create({
    data: {
      title: title,
      description: description,
      director: director,
      image: null,
      releaseDate: releaseDate,
      genres: genres,
      ageRating: ageRating,
      rating: rating,
    }
  })
  return result;
}

export async function updateScreenplay(screenplay: Screenplay) {
  let { id, title, description, director, image, releaseDate, genres, ageRating, rating } = screenplay;
  const result: Screenplay = await prisma.screenplays.update({
    where : { id },
    data: {
      title: title,
      description: description,
      director: director,
      releaseDate: releaseDate,
      genres: genres,
      ageRating: ageRating,
      rating: rating,
    }
  })
  return result;
}

export async function getScreenplayPages(pageSize: number) {
  const screenplays: Screenplay[] | null = await prisma.screenplays.findMany();
  const pages: number = Math.ceil(screenplays.length / pageSize);
  return pages;
}

export async function searchScreenplays(query: string, page: number, pageSize: number) {
  const result = await prisma.screenplays.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      title: {
        contains: query,
      }
    }
  })
  return result;
}