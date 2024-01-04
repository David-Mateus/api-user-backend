import { createPoster } from "../repositorys/poster.repository";

export const createPosters = async (req, res) => {
    try{
        const {title, content, singerUsername} = req.body;
        const poster = await createPoster({title, content, singerUsername});
        res.status(200).send(poster);
    }catch(e){
        res.status(400).send(e);
    }
}