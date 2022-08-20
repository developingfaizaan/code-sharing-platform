import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-code-sharing-platform.vercel.app",
});

// Snippet
export const fetchSnippets = () => API.get("/snippet");
export const fetchSnippet = (id) => API.get(`/snippet/${id}`);
export const createSnippet = (newSnippet) => API.post(`/snippet`, newSnippet);
export const updateSnippet = (id, updatedSnippet) =>
  API.patch(`/snippet/${id}`, updatedSnippet);
export const deleteSnippet = (id) => API.delete(`/snippet/${id}`);

// Auth
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
