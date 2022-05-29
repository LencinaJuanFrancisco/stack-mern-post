import Post from "../models/Post.js";

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
    const body = req.body
    try {

        const newPosts = new Post(body)
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
        !deletePost ? res.sendStatus(404)
                    : res.send('se elimino el Posts')
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