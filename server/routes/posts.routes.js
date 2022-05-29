import { Router } from 'express'
import { getPosts, createPosts, updatePosts, deletePosts, findPosts } from '../controllers/posts.controllers.js'
const router = Router()


router.get('/posts', getPosts)
router.post('/posts', createPosts)
router.put('/posts/:id', updatePosts)
router.delete('/posts/:id', deletePosts)
router.get('/posts/:id', findPosts)



export default router