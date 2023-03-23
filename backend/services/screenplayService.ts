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
  return await prisma.screenplays.delete({ where: { id } })
}

export async function createScreenplay({ title, description, director, image ,releaseDate, genres ,ageRating, rating}: { title: string, description: string, director:string, image:ArrayBuffer ,releaseDate: Date, genres: string , ageRating: string, rating: number }) {
  const screenplay: Screenplay = await prisma.screenplays.create({
    data: {
      title: title,
      description: description,
      director: director,
      image: Buffer.from(image),
      releaseDate: releaseDate,
      genres: genres,
      ageRating: ageRating,
      rating: rating,
    }
  })
  return screenplay;
}

export async function updateScreenplay({id, title, description, director, releaseDate, genres , ageRating, rating}: {id: number,title: string, description: string, director:string, releaseDate: Date, genres:string ,ageRating: string, rating: number}) {
  const screenplay: Screenplay = await prisma.screenplays.update({
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
  return screenplay;
}

