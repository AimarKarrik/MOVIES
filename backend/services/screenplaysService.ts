import prisma from "./prisma";
import { Screenplay } from './../models/screenplayModel';

export async function getScreenplays({ page, pageSize }: { page: number, pageSize: number }) {
  const screenplays = await prisma.screenplays.findMany({ skip: (page - 1) * pageSize, take: pageSize });

  return screenplays.map<Screenplay>(play => {
    return { ...play, genres: play.genres?.split(",") }
  });
}

export async function getScreenplayById(id: number) {
  const screenplay = await prisma.screenplays.findUnique({ where: { id } })

  if (!screenplay)
    return null
  return { ...screenplay, genres: screenplay.genres?.split(",") } as Screenplay
}

export async function deleteScreenplayById(id: number) {
  return await prisma.screenplays.delete({ where: { id } })
}

export async function createScreenplay({id, title, description, director, releaseDate, ageRating, rating}: {id: number, title: string, description: string, director:string, releaseDate: Date, ageRating: string, rating: number }) {
  return await prisma.screenplays.create({
    where : { id },
    data: {
      title: title,
      description: description,
      director: director,
      releaseDate: releaseDate,
      ageRating: ageRating,
      rating: rating,
    }
  })
}

export async function updateScreenplay({id, title, description, director, releaseDate, ageRating, rating}: {id: number,title: string, description: string, director:string, releaseDate: Date, ageRating: string, rating: number}) {
  return await prisma.screenplays.update({
    where : { id },
    data: {
      title: title,
      description: description,
      director: director,
      releaseDate: releaseDate,
      ageRating: ageRating,
      rating: rating,
    }
  })
  
}

