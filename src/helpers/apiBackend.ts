import { ref, unref } from "vue";

export async function api(method: string, url: string, payload = {}) {
  const token = ref(localStorage.getItem("token"));

  const response = await fetch(`http://localhost:3333/api${url}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: method !== "GET" ? JSON.stringify(unref(payload)) : null,
  });
  return response.json();
}