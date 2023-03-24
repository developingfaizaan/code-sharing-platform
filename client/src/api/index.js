import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-code-sharing-platform.vercel.app",
  // baseURL: "http://localhost:1337",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("auth")).token}`;
  }

  return req;
});

// Snippet
export const fetchSnippets = () => API.get("/snippet");
export const fetchSnippet = (id) => API.get(`/snippet/${id}`);
export const createSnippet = (newSnippet) => API.post(`/snippet`, newSnippet);
export const updateSnippet = (id, updatedSnippet) => API.patch(`/snippet/${id}`, updatedSnippet);
export const deleteSnippet = (id) => API.delete(`/snippet/${id}`);
export const searchSnippet = (query) => API.get(`/snippet/search?searchTerm=${query}`);
export const likeSnippet = (id) => API.patch(`/snippet/${id}/like`);
export const commentSnippet = (id, comment) => API.patch(`/snippet/${id}/comment`, comment);

// Profile
export const profileSnippets = (id) => API.get(`/snippet/user/${id}`);
export const updateProfilePhoto = (id, updatedProfile) => API.patch(`/auth/profile/${id}`, updatedProfile);

// Auth
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);