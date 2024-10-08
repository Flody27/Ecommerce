import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export async function Get(url) {
  return await axios.get(`${baseUrl}${url}`, {
    withCredentials: true,
  });
}

export async function GetById(url, id) {
  return await axios.get(`${baseUrl}${url}/${id}`, {
    withCredentials: true,
  });
}

export async function Create(url, object) {
  await axios.post(`${baseUrl}${url}`, object, {
    withCredentials: true,
  });
}

export async function Update(url, object) {
  await axios.put(`${baseUrl}${url}`, object, {
    withCredentials: true,
  });
}

export async function Remove(url, id, object = []) {
  const data = object;
  return await axios.delete(
    `${baseUrl}${url}/${id}`,
    { data },
    {
      withCredentials: true,
    }
  );
}

export async function PostUsingCookies(url, object = "") {
  await axios.post(`${baseUrl}${url}`, object, { withCredentials: true });
}
