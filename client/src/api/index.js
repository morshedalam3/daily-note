import axios from "axios";

const url = "http://localhost:5000/note";

export const fetchPosts = () => axios.get(`${url}/getAll`);
export const createPost = (newPost) => axios.post(`${url}/add`, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
