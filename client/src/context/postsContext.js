import { useState, createContext, useContext } from 'react'

const postContex = createContext()

export const usePosts = () => {
    const context = useContext(postContex)
    return context
}
export const PostContainer = ({ children }) => {
    const [posts, setPosts] = useState([])
    return (
        <postContex.Provider value={{
            posts,
            setPosts
        }}>
            {children}
        </postContex.Provider>
    )
}