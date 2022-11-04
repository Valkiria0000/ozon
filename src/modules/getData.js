const getData = () => {
  return fetch(
    `https://ozon-ef789-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    console.log(response);
    return response.json();
  });
};

export default getData;
