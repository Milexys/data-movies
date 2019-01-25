document.addEventListener("DOMContentLoaded", function(){
  window.M.AutoInit();
 });

document.getElementById("select-gender-category").addEventListener("change", ()=>{
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
  <div class="card">
      <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].title}
      ${allData[i].overview}"> 
        <img  class="img" src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}">
      </div>
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
        let gender = document.getElementById("select-gender-category").value;
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
         <div class="card">
            <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].title} 
                ${allData[i].overview}"> 
               <img class="img" src="https://image.tmdb.org/t/p/w500${allData[i].poster_path}">
            </div>
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
      
      let promise=[(fetch("https://www.omdbapi.com/?t="+allData[i].Title+"&apikey=24244c98&plot=full")
      .then(data =>data.json())
      .then(data =>{window.plotArray.push(data.Plot)
      }))]
      Promise.all(promise).then(()=>{
        document.getElementById("content1").innerHTML +=
      `
  <div class="col s6 m4">
  <div class="card">
      <div  id="images" class="textOverImage card-image responsive-img" data-text="${allData[i].Title}
      ${window.plotArray[i]}"> 
        <img class="img" src="${allData[i].Poster}">
      </div>
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
