import { useState, createContext, useContext, useEffect } from "react";
import { getPostsRequests, createPostRequest, deletePostRequest, getOnePostRequest,updatePostRequest } from "../api/posts";
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
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
      
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  const deletePost = async (id) =>{
    await deletePostRequest(id)
    //buscamos el post para actualizar el estado 
    setPosts(posts.filter(post => post._id !== id))
  }
const getPost = async (id)=>{
  const res = await getOnePostRequest(id)
  return res.data
}
const updatePost= async(id,post)=>{
const res = await updatePostRequest(id,post)
//para que se actualize el listado de los post en el home, debemos modificar el estado, al igual que cuando eliminamos o creamos
setPosts(posts.map(post => post._id === id ? res.data : post))
console.log(res);
}
  return (
    <postContex.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
      }}
    >
      {children}
    </postContex.Provider>
  );
};
