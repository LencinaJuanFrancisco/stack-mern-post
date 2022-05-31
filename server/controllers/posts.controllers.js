import Post from "../models/Post.js";
import {uploadImage,deleteImage} from '../libs/claudinary.js'
import  fs from "fs-extra";//fs-extra se utiliza para el manejo de archivos en node,fileSistem , no ocupamos el tradicional fs xq no se puede trabajar de forma asincronica, por lo tanto debemos instalar fs-extra


const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find()
        allPosts.length > 0 ? res.send(allPosts)
            : res.send("no hay registros")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

const createPosts = async (req, res) => {
    try {
        const body = req.body
        let image= null;
        let newPosts;
        if (req.files?.image){
            // console.log('If?🚗🚗🚗🚗🚗🚗');
            const result = await uploadImage(req.files.image.tempFilePath)
            console.log('paso el if',result);
            image= {
                url:result.secure_url,
                public_id: result.public_id
            }
            newPosts = new Post({...body,image})
            await fs.remove(req.files.image.tempFilePath)// eiminamos la imagen ya que ahora se encuentra en claudinary, por lo tanto lo eliminamos de forma local
        } else{
            console.log('sin IMG 🚟🚟🚟🚟🚟');
            newPosts = new Post(body)
        }
        const savePost = await newPosts.save()
        res.send(savePost)
    } catch (error) {
        
        res.status(500).json({ message: error.message })
    }
}

const updatePosts = async (req, res) => {
    const { id } = req.params
    const body = req.body
    try {
        const updatePosts = await Post.findByIdAndUpdate(id, body, { new: true })
        res.send(updatePosts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deletePosts = async (req, res) => {
    const { id } = req.params
    try {
        const deletePost = await Post.findByIdAndDelete(id)
        if (!deletePost) return res.sendStatus(404)
        if(deletePost.image.public_id){

            await deleteImage(deletePost.image.public_id)//borramaos de claudinari con una fincion creada por nosotros que se encuentra en libs/claudinary
        }
        return res.sendStatus(204)
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
const findPosts = async (req, res) => {
    const { id } = req.params
    try {
        const findPost = await Post.findById(id)
        findPost ? res.send(findPost)
            : res.sendStatus(404)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { getPosts, createPosts, updatePosts, deletePosts, findPosts }