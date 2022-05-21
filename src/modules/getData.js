const getData = (str) => {
return fetch(
   `https://ozonproject-5f2da-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
   )
   .then((response) => {
      return response.json()
   
})

}

export default getData