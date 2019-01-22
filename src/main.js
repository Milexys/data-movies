//dom

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=24244c98")
.then(newData => newData.json() )
.then(newData => {
  console.log(newData)
})