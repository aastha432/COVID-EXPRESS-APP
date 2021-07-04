const API = "http://localhost:3001/api";

export const getProducts = () => {
    return fetch(`${API}/products`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };