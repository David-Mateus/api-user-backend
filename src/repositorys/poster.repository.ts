import { prisma } from "../services/prisma";

export const createPoster = async ({ title, content, singerUsername }: { title: string, content: string, singerUsername: string }) => {
  const poster = await prisma.poster.create({
    data: {
      title,
      content,
      user: { connect: { username: singerUsername } },
    },
  });
  return poster;
};

export const getAllPosters = async () => {
  const posters = await prisma.poster.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          id: true,
          username: true,
          password: false,
        },
      },
    },
  });
  return posters;
};
export const getOnePoster = async (id: number) => {
  const posrt = await prisma.poster.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      user: {
        select: {
          id: true,
          username: true,
          password: false,
        },
      },
    },
  });
  return posrt;
};
export const putPoster = async (id: number, { title, content }: { title: string, content: string }) => {
  const poster = await prisma.poster.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
  return poster;
};

export const deletePoster = async (id: number) => {
  await prisma.poster.delete({
    where: {
      id,
    },
  });
};
