
// window.onload= fetcheame

//  function fetcheame () {

//    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019")
//    .then(data=>data.json())
//    .then(data=>{
//      let allData= data.results;

//      for (let i = 0; i <allData.length; i++){
//        let title= allData[i].title
//         fetch ("http://www.omdbapi.com/?t="+title+"&y=2019&apikey=b72efd99")
//           .then (data=>data.json())
//           .then (data =>{
//            console.log(data)
//            document.getElementById('content1').innerHTML += 
//            `
//   <div class="col s6 m3">
//     <div id="card1" class="card medium">
//       <div  id="images" class="card-image responsive-img"> 
//         <img class="responsive-img" src="${data.Poster}">
//       </div>
//       <div class="card-content">
//         <p class="title-name card-title ">${data.Title}</p>
//         <p> Año: ${data.Year}</p>
        
//       </div>
//     </div>
//   </div> 
// `
           
//           })
//        }
//      });
//    }

// let allDataTitanic;
// fetch("http://www.omdbapi.com/?t=titanic&plot=full&apikey=24244c98")
// .then(newData => newData.json() )
// .then(newData => {
//    allData = newData; 
//   console.log(newData) 
//   document.getElementById("content").innerHTML = `
//   <div class="col s6 m3">
//     <div id="card1" class="card">
//       <div  id="images" class="card-image responsive-img"> 
//         <img class="img-pokemon responsive-img" src="${newData.Poster}">
//       </div>
//       <div class="card-content">
//         <span class="card-title ">${newData.Title}</span>
//         <p class="pokenumber"> Director: ${newData.Director}</p>
//         <p>Genero: ${newData.Genre}</p>
//         <p>Duración: ${newData.Runtime}</p>
//       </div>
//     </div>
//   </div> 
// `
// })


// fetch("http://www.omdbapi.com/?s=terror&page=2&plot=full&apikey=24244c98")
// .then(newData => newData.json() )
// .then(newData => {
//     allData = newData.Search;
//     console.log(allData) 
//   })
//  .then(newData => {
//   content1.innerHTML="";
//    allData.forEach(element => {
//     document.getElementById("content1").innerHTML +=`
//   <div class="col s6 m3">
//     <div id="card1" class="card medium">
//       <div  id="images" class="card-image responsive-img"> 
//         <img class="img-pokemon responsive-img" src="${element.Poster}">
//       </div>
//       <div class="card-content">
//         <p class="pokenumber">${element.Title}</p>
//         <p>${element.Year}<p>
//       </div>
//     </div>
//   </div> 
// `
//    });
// })

// document.getElementById("btn-buscar").addEventListener("click", ()=>{
//   let searching = document.getElementsByClassName("page-number").value;
//   let searching1 = document.getElementById("inputprueba").value;
//   document.getElementById("content").innerHTML=""
//   fetch("http://www.omdbapi.com/?s="+searching1+"&page="+searching+"&apikey=24244c98")
//   .then(data => data.json())
//   .then(data => {
//     let allData = Object.values(data.Search);
//     console.log(allData)
//     for (let i=0; i<allData.length;i++){
//       document.getElementById("content").innerHTML +=
//       `
//   <div class="col s6 m3">
//     <div id="card1" class="card medium">
//       <div  id="images" class="card-image responsive-img"> 
//         <img class="img-pokemon responsive-img" src="${allData[i].Poster}">
//       </div>
//       <div class="card-content">
//         <p class="pokenumber">${allData[i].Title}</p>
//         <p>${allData[i].Year}<p>
//       </div>
//     </div>
//   </div> 
// `
//     }
//   })
// })
// $('#pagination').materializePagination({
//   align: 'left',
//   lastPage:  10,
//   firstPage:  1,
//   urlParameter: 'page',
//   useUrlParameter: true,
//   onClickCallback: function(requestedPage){
//       console.log('Requested page is '+ requestedPage);
//   }
// }); 

// document.getElementById('apibtn').addEventListener('click', apiPrueba);

// function apiPrueba(){
// fetch ("http://www.omdbapi.com/?apikey=8f0dd609&s=terror")
// .then(function(res){
// return res.json();
// })
// .then(function(Title1){
// console.log(Title1)
// document.getElementById('result').innerHTML+= Title1.Search[0].Title;
// })
// }
// const key = '24244c98';

// let title = document.getElementById("titleExample").value

// const root = document.getElementById('root');

// function buscar(){

// // create URL to get all Harry Potter characters

// const url = new URL('http://www.omdbapi.com/?apikey=24244c98'), params = {s:title}
// Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

// // make API request using Fetch API
// fetch(url, {apikey:key})
//  .then((resp) => resp.json()) // Transform the data into json
//  .then(function(data) {
//  // Get the results
//  let characters = data;
//   console.log(characters);
//  })


//SELECT CATEGORIA
//Initialization for Components Materialize
document.addEventListener("DOMContentLoaded", function(){
  window.M.AutoInit();
 });

document.getElementById("select-gender-category").addEventListener("change", ()=>{
  let condition= document.getElementById("select-gender-category").value;
fetcheame();

})

window.onload= fetcheame

 function fetcheame () {
       document.getElementById('content1').innerHTML ="";
       let gender= document.getElementById("select-gender-category").value;
        fetch ("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-MX&with_genres=10751,14,"+gender)
          .then (data=>data.json())
          .then (data =>{
            allData = data.results;
           for (let i = 0; i <allData.length; i++){
           document.getElementById('content1').innerHTML += 
           `

  <div class="col s6 m4">
      <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].title}
      ${allData[i].overview}"> 
        <img  class=" responsive-img" src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}">
      </div>
  </div> 
`
           
          }
       })
       nextPages ()
      }
      //Funcion next pages
      let number = document.getElementsByClassName("number");
      function nextPages () {
        let gender= document.getElementById("select-gender-category").value;
        //console.log(document.getElementById("select-gender-category").value)
          for (let i = 0; i<number.length; i++) {
            number[i].addEventListener("click",() =>{
              fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-MX&with_genres=10751,14,"+gender+"&page="+number[i].value)
              .then(data => data.json() )
              .then(data => {
                allData = data.results; 
                document.getElementById("content1").innerHTML="";
                for (let i = 0; i <allData.length; i++){
                  document.getElementById('content1').innerHTML += 
                  `
         
  
         <div class="col s6 m4">
            <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].title} 
                ${allData[i].overview}"> 
               <img class=" responsive-img" src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}">
            </div>
         </div> 
       `
                  
                 }
              })
            })
          }
        }

//BUSCADOR
document.getElementById("btn-buscar").addEventListener("click", ()=>{

  document.getElementById('content1').innerHTML ="";
  let searching = document.getElementsByClassName("page-number").value;
  let searching1 = document.getElementById("inputprueba").value;
  document.getElementById("content1").innerHTML=""
  fetch("https://www.omdbapi.com/?s="+searching1+"&page="+searching+"&apikey=24244c98&plot=full")
  //http://www.omdbapi.com/?t=barbie&plot=full&apikey=24244c98
  .then(data => data.json())
  .then(data => {
    let allData = Object.values(data.Search);
    console.log(allData)
    for (let i=0; i<allData.length;i++){
      
      let promise=[(fetch("http://www.omdbapi.com/?t="+allData[i].Title+"&apikey=24244c98&plot=full")
      .then(data =>data.json())
      .then(data =>{window.plotArray.push(data.Plot)
      }))]
      Promise.all(promise).then(()=>{
        console.log(window.plotArray[i])
        document.getElementById("content1").innerHTML +=
      `
  <div class="col s6 m4">
      <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].Title}
      ${window.plotArray[i]}"> 
        <img class=" responsive-img" src="${allData[i].Poster}">
      </div>
  </div> 
`
      }
)

    }
  })
})
let plotArray=[];
window.plotArray=plotArray;
