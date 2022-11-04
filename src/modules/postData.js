const postData = (cart) => {
  return fetch("https://ozon-ef789-default-rtdb.firebaseio.com/goods.json", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
export default postData;
