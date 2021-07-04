const API = "http://localhost:3001/api";

export const createOrderFinal = (order) => {
    return fetch(`${API}/order/create/:userId`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then(response => {
        debugger;
        return response.json();
      })
      .catch(err => console.log(err));
  };