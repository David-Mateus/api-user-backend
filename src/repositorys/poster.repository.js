import { prisma } from "../services/prisma";

export const createPoster = async ({title, content, singerUsername}) => {
    const poster = await prisma.poster.create({
        data:{
            title,
            content,
            user:{connect: {username: singerUsername}},
        },
    });
    return poster;
}

export const getAllPosters = async () => {
    const posters = await prisma.poster.findMany({
        select:{
            id: true,
            title: true,
            content: true,
            user:{
                select:{
                    id: true,
                    username: true,
                    password: false,
                },
            },
        }
    })
    return posters;
}
export const getOnePoster = async (id) => {
    const posrt = await prisma.poster.findUnique({
        where:{
            id,
        },
        select:{
            id: true,
            title: true,
            content: true,
            user:{
                select:{
                    id: true,
                    username: true,
                    password: false,
                },
            },
        },
    });
    return posrt;
}