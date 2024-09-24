import axios from "axios";

export async function api(method: string, url: string, payload = {}) {
  const token = localStorage.getItem("token");
  const consultas = 

  const response = await axios(`http://localhost:3333/api${url}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: method !== "GET" ? JSON.stringify(payload) : null,
  });

  return response.data;
}
