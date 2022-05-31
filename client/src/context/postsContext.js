import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests,createPostRequest} from '../api/posts'
const postContex = createContext()

export const usePosts = () => {
    const context = useContext(postContex)
    return context
}


export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        const res = await getPostsRequests()
        setPosts(res.data)
    }
    const createPost = async (post)=>{
        const res = await createPostRequest(post)
        setPosts([...posts,res.data])
    }
    useEffect(()=>{
        getPosts()
    },[])


    return (
        <postContex.Provider value={{
            posts,
            setPosts,
            getPosts,
            createPost
        }}>
            {children}
        </postContex.Provider>
    )
}