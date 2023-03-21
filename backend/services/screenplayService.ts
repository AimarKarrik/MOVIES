import prisma from "./prisma";
import Screenplay from '../models/screenplayModel';

export async function getScreenplays({ page, pageSize }: { page: number, pageSize: number }) {
  const screenplays = await prisma.screenplays.findMany({ skip: (page - 1) * pageSize, take: pageSize });

  return screenplays.map<Screenplay>(play => {
    return { ...play, genres: play.genres?.split(",") }
  });
}