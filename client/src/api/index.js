import axios from "axios";

const url = "https://rocky-basin-09308.herokuapp.com/note";

export const fetchPosts = () => axios.get(`${url}/getAll`);
export const createPost = (newPost) => axios.post(`${url}/add`, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
