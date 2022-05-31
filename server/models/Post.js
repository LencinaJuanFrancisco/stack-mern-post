import mongoose from "mongoose";

const postSchema =  new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required: true,
        trim:true
    },
    image:{
        required:false,
        url:String,
        public_id: String
    }
})

const Post = mongoose.model('Post',postSchema)
export default Post