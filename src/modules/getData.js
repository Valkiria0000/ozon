const getData = () => {
  return fetch(
    `https://myozon-14071-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    console.log(response);
    return response.json();
  });
};

export default getData;
