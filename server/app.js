import express from 'express'
import fileUpload from 'express-fileupload'
import postsRouter from './routes/posts.routes.js'

const app = express()

//middleware
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}))

//route
app.use(postsRouter)

export default app