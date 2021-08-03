import { baseUrl, checkError, headers } from "./utils";

export const register = (user) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  }).then(checkError);
};

export const checkRequest = () => {
  return fetch(`${baseUrl}/check`, {
    headers: headers,
    credentials: "include",
  }).then(checkError);
};

export const loginRequest = (user) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(user),
  }).then(checkError);
};

export const logout = () => {
  return fetch(`${baseUrl}/logout`, {
    headers: headers,
    credentials: "include",
  }).then(checkError);
};

export const getNews = () => {
  return fetch(`${baseUrl}/news`, {
    headers: headers,
  }).then(checkError);
};
export const getBlogs = () => {
  return fetch(`${baseUrl}/blogs`, {
    headers: headers,
  }).then(checkError);
};

export const getTags = () => {
  return fetch(`${baseUrl}/news/tags`, {
    headers: headers,
  }).then(checkError);
};
export const getBlogsTags = () => {
  return fetch(`${baseUrl}/blogs/tags`, {
    headers: headers,
  }).then(checkError);
};

export const getNewsByTag = (tag) => {
  return fetch(`${baseUrl}/news/tags/${tag}`, {
    headers: headers,
  }).then(checkError);
};

export const postNews = (data) => {
  return fetch(`${baseUrl}/news`, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(data),
  }).then(checkError);
};
export const postBlogs = (data) => {
  return fetch(`${baseUrl}/blogs`, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(data),
  }).then(checkError);
};

export const updateNews = (data, id) => {
  return fetch(`${baseUrl}/news/${id}`, {
    method: "PATCH",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(data),
  }).then(checkError);
};
export const updateBlogs = (data, id) => {
  return fetch(`${baseUrl}/blogs/${id}`, {
    method: "PATCH",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(data),
  }).then(checkError);
};


export const deleteNews = (id) => {
  return fetch(`${baseUrl}/news/${id}`, {
    method: "DELETE",
    credentials: "include",
  }).then(checkError);
};

export const deleteBlogs = (id) => {
  return fetch(`${baseUrl}/blogs/${id}`, {
    method: "DELETE",
    credentials: "include",
  }).then(checkError);
};


export const putComment = (data, id) => {
  return fetch(`${baseUrl}/news/${id}/comments`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  }).then(checkError);
};
export const putBlogsComment = (data, id) => {
  return fetch(`${baseUrl}/blogs/${id}/comments`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  }).then(checkError);
};


export const deleteComment = (comment, id) => {
  return fetch(`${baseUrl}/news/${id}/comments`, {
    method: "DELETE",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(comment),
  }).then(checkError);
};
export const deleteBlogsComment = (comment, id) => {
  return fetch(`${baseUrl}/blogs/${id}/comments`, {
    method: "DELETE",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(comment),
  }).then(checkError);
};

export const getExchangeRates = () => {
  return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(res => res.json())
    .catch((err) => console.log(err))
};

