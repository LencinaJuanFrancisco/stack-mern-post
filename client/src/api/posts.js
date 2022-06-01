import axios from "axios";

export const getPostsRequests = async () => {
  return await axios.get("/posts");
};
export const createPostRequest = async (post) => {
  return await axios.post("/posts", post);
};

export const deletePostRequest = async (id)=>{
    return await axios.delete(`/posts/${id}`)
} 

export const getOnePostRequest = async (id)=>{
  return await axios.get(`/posts/${id}`)
}
export const updatePostRequest= async (id,newFileds)=>{
  return await axios.put(`/posts/${id}`,newFileds)
}