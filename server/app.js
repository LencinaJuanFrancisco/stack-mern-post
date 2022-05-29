import express from 'express'
import postsRouter from './routes/posts.routes.js'

const app = express()

//middleware
app.use(express.json())

//route
app.use(postsRouter)

export default app