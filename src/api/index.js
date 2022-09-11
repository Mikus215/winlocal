import axios from 'axios'

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })

export const fetchUsers = () => API.get('/users?_start=0&_limit=8');
export const fetchUser = id => API.get(`/users/${id}`);
export const fetchComments = id => API.get(`/posts/${id}/comments`);
export const deletePost = id => API.delete(`/users/${id}`);
export const sendPost = ( userId, title, description ) => API.post('/posts', {
    title: title,
    body: description,
    userId: userId
})

