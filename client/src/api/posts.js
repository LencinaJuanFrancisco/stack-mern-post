import axios from "axios";

export const getPostsRequests = async () => {
  return await axios.get("/posts");
};
export const createPostRequest = async (post) => {
  const form = new FormData()
  for (let key in post){
    form.append(key,post[key])
  }
  return await axios.post("/posts", form,{
    headers:{
      "content-Type":"multipart/form-data"
    }
  });
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