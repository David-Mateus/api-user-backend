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
