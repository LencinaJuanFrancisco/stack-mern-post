import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequests, createPostRequest, deletePostRequest } from "../api/posts";
const postContex = createContext();

export const usePosts = () => {
  const context = useContext(postContex);
  return context;
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };
  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
  };
  useEffect(() => {
    getPosts();
  }, []);
  const deletePost = async (id) =>{
    await deletePostRequest(id)
    //buscamos el post para actualizar el estado 
    setPosts(posts.filter(post => post._id !== id))
  }

  return (
    <postContex.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        createPost,
        deletePost
      }}
    >
      {children}
    </postContex.Provider>
  );
};
