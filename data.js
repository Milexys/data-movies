//data
window.movies={
filterData: (allData,condition) => {
    const dataMovie = allData;
    if(condition === ""){
      return dataMovie;
    }
    const MoviesResultFilter = dataMovie.filter(movie => {
      return movie.title.indexOf(condition) !== -1 ;
    })
    return MoviesResultFilter
   }
}