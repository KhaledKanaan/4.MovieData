let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    image_url: 'images/TheDarjeelingLimited.jpg',
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
    image_url: 'images/TheRoyalTenenbaums.jpg',
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
    image_url: 'images/FantasticMr.Fox.jpg',
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    image_url: 'images/TheGrandBudapestHotel.jpg',
  },
};

//get the single movie html element
var movie = document.getElementsByClassName('movie');
//get all movies section html element
var movies = document.getElementById('movies');
//get add-movie form
var add_movie_form = document.getElementById("add-movie");
//get all the sorting radio buttons
var default_sort_rb = document.getElementById("default-sort-rb");
var name_sort_rb = document.getElementById("name-sort-rb");
var rating_sort_rb = document.getElementById("rating-sort-rb");
var runtime_sort_rb = document.getElementById("runtime-sort-rb");
var year_sort_rb = document.getElementById("year-sort-rb");
var sort_form = document.getElementById("sort-form");
//get the sorting order radio buttons (ascending or descending)
var asc_order_rb = document.getElementById('asc-order-rb');
var desc_order_rb = document.getElementById('desc-order-rb');
var order = "descending";

function renderAllMoviesData(movieData) {
  //start by removing previous movies to start from beginning
  removeAllMoviesHtmlElements();
  //Reneder each movie data inside the movieData object onto each relative html movie element
  for (let i = 0; i < Object.keys(movieData).length; i++) {
      //first add the movie html element
      addNewMovieHtmlElement();
      //then render the data onto the added movie html element
      renderSingleMovieData(movie[i+1], movieData, Object.keys(movieData)[i]);
  }
}

//this function clone the existing movie html element (the template) and append it to the movies html element
function addNewMovieHtmlElement() {
  var movie_clone = movie[0].cloneNode(true);
  movie_clone.classList.remove('hidden');
  movies.appendChild(movie_clone);
}

//this function removes all movie html elements except the first one as it will be used as a template to be cloned later
function removeAllMoviesHtmlElements() { 
  while(movies.children.length>1){
    movies.removeChild(movies.lastChild);
  }
}

//this function takes a single movie name and search for it in movieData object then render its data onto a single movie html element
function renderSingleMovieData(singleMovieHtmlElement, movieData, singleMovieName) {

  //fill all the single movie html children with relative single movie data retrieved from movieData object
  singleMovieHtmlElement.querySelector('.movie-img').src = `${movieData[singleMovieName].image_url}`;
  singleMovieHtmlElement.querySelector('.movie-img').alt = `${singleMovieName + "-movie-image"}`;
  singleMovieHtmlElement.querySelector('.movie-titl').innerHTML = singleMovieName;
  singleMovieHtmlElement.querySelector('.movie-year').innerHTML = movieData[singleMovieName].year;
  singleMovieHtmlElement.querySelector('.movie-rating').innerHTML = movieData[singleMovieName].rating;
  singleMovieHtmlElement.querySelector('.movie-runtime').innerHTML = movieData[singleMovieName].runtime + " min";
  singleMovieHtmlElement.querySelector('.movie-plot').innerHTML = movieData[singleMovieName].plot;
  singleMovieHtmlElement.querySelector('.movie-cast').innerHTML = movieData[singleMovieName].cast;

  // then manage the tab selectors effects and functionalities:
  // Add the selection efect to the tab selector when clicked
  singleMovieHtmlElement.querySelector('.movie-ovrview-tab-slctor').addEventListener('click', (e) => {
    singleMovieHtmlElement.querySelector('.movie-ovrview-tab-slctor').classList.add('selected');

    //Remove the selection effect from other tab selectors (e.g. in case the Overview tab selecor is pressed, the selection effect should be removed from Cast and Plot tab selectors)
    singleMovieHtmlElement.querySelector('.movie-cast-tab-slctor').classList.remove('selected');
    singleMovieHtmlElement.querySelector('.movie-plot-tab-slctor').classList.remove('selected');

    //Show the relative section:
    singleMovieHtmlElement.querySelector('.movie-ovrview').classList.add('show');

    //Hide other sections
    singleMovieHtmlElement.querySelector('.movie-cast').classList.remove('show');
    singleMovieHtmlElement.querySelector('.movie-plot').classList.remove('show');
  });

  // Add the selection efect to the tab selector when clicked
  singleMovieHtmlElement.querySelector('.movie-cast-tab-slctor').addEventListener('click', (e) => {
    singleMovieHtmlElement.querySelector('.movie-cast-tab-slctor').classList.add('selected');

    //Remove the selection effect from other tab selectors (e.g. in case the Overview tab selecor is pressed, the selection effect should be removed from Cast and Plot tab selectors)
    singleMovieHtmlElement.querySelector('.movie-ovrview-tab-slctor').classList.remove('selected');
    singleMovieHtmlElement.querySelector('.movie-plot-tab-slctor').classList.remove('selected');

    //Show the relative section:
    singleMovieHtmlElement.querySelector('.movie-cast').classList.add('show');

    //Hide other sections
    singleMovieHtmlElement.querySelector('.movie-ovrview').classList.remove('show');
    singleMovieHtmlElement.querySelector('.movie-plot').classList.remove('show');
  });


  // Add the selection efect to the tab selector when clicked
  singleMovieHtmlElement.querySelector('.movie-plot-tab-slctor').addEventListener('click', (e) => {
    singleMovieHtmlElement.querySelector('.movie-plot-tab-slctor').classList.add('selected');

    //Remove the selection effect from other tab selectors (e.g. in case the Overview tab selecor is pressed, the selection effect should be removed from Cast and Plot tab selectors)
    singleMovieHtmlElement.querySelector('.movie-cast-tab-slctor').classList.remove('selected');
    singleMovieHtmlElement.querySelector('.movie-ovrview-tab-slctor').classList.remove('selected');

    //Show the relative section:
    singleMovieHtmlElement.querySelector('.movie-plot').classList.add('show');

    //Hide other sections
    singleMovieHtmlElement.querySelector('.movie-cast').classList.remove('show');
    singleMovieHtmlElement.querySelector('.movie-ovrview').classList.remove('show');
  });

  // 
  singleMovieHtmlElement.querySelector('.movie-delete').addEventListener('click', async (e) => {
    //use async function to make sure the movie is deleteded before re-rendering 
    await deleteMovie(singleMovieName);
    singleMovieHtmlElement.remove();
    retriggerSortAndRenderBaseOnCriteria();
  });

  singleMovieHtmlElement.querySelector('.movie-edit').addEventListener('click', (e) => {
    singleMovieHtmlElement.querySelector('.movie-edit-window').classList.add('movie-edit-window-show');

    singleMovieHtmlElement.querySelector('#edit-movie-titl').value = singleMovieName;
    singleMovieHtmlElement.querySelector('#edit-movie-rating').value = movieData[singleMovieName].rating;
    singleMovieHtmlElement.querySelector('#edit-movie-year').value = movieData[singleMovieName].year;
    singleMovieHtmlElement.querySelector('#edit-movie-runtime').value = movieData[singleMovieName].runtime;
    singleMovieHtmlElement.querySelector('#edit-movie-cast').value = movieData[singleMovieName].cast;
    singleMovieHtmlElement.querySelector('#edit-movie-plot').value = movieData[singleMovieName].plot;
    singleMovieHtmlElement.querySelector('#edit-movie-img-url').value = movieData[singleMovieName].image_url;
    
  });

  singleMovieHtmlElement.querySelector('#edit-movie-cancel-btn').addEventListener('click', (e) => {
    singleMovieHtmlElement.querySelector('.movie-edit-window').classList.remove('movie-edit-window-show');
  });

  singleMovieHtmlElement.querySelector('#edit-movie-save-btn').addEventListener('click', (e) => {

    singleMovieHtmlElement.querySelector('.movie-edit-window').classList.remove('movie-edit-window-show');

    movieData[singleMovieName].rating = singleMovieHtmlElement.querySelector('#edit-movie-rating').value;
    movieData[singleMovieName].year = singleMovieHtmlElement.querySelector('#edit-movie-year').value;
    movieData[singleMovieName].runtime = singleMovieHtmlElement.querySelector('#edit-movie-runtime').value;
    movieData[singleMovieName].cast = singleMovieHtmlElement.querySelector('#edit-movie-cast').value;
    movieData[singleMovieName].plot = singleMovieHtmlElement.querySelector('#edit-movie-plot').value;
    movieData[singleMovieName].image_url = singleMovieHtmlElement.querySelector('#edit-movie-img-url').value;

    if(singleMovieHtmlElement.querySelector('#edit-movie-titl').value != singleMovieName){
      movieData[singleMovieHtmlElement.querySelector('#edit-movie-titl').value] = movieData[singleMovieName];
      delete movieData[singleMovieName];
    }

    singleMovieHtmlElement.querySelector('.movie-edit-window').classList.remove('movie-edit-window-show');
    retriggerSortAndRenderBaseOnCriteria();
  });

}

async function deleteMovie(movieName){
  delete movieData[movieName];
}

//this function sorts the movie data, base on the provided criteria and order then return a new sorted movieData object
function sortMovieData(movieData, sortCriteria, sortOrder = "descending") {
  if (sortCriteria == "name") {
    return keyValuePairsArrayToObject(Object.entries(movieData).sort());
  }
  else {
    if (sortOrder == "ascending") {
      return keyValuePairsArrayToObject(Object.entries(movieData).sort((a, b) => a[1][sortCriteria] - b[1][sortCriteria]));
    }
    else return keyValuePairsArrayToObject(Object.entries(movieData).sort((a, b) => b[1][sortCriteria] - a[1][sortCriteria]));
  }
}

//This function takes a key value pairs array and returns an object
function keyValuePairsArrayToObject(keyValuePairsArray) {
  //first create an empty object
  let obj = {};
  //Then for each each key assign the relative value and add them to the object obj
  for (let i = 0; i < keyValuePairsArray.length; i++) {
    obj[keyValuePairsArray[i][0]] = keyValuePairsArray[i][1];
  }
  return obj;
}

//this function is combination of sort fonction and render all movies data
function sortAndRenderBaseOnCriteria(movieData, sortCriteria, sortOrder){
  var sortedMovieData = sortMovieData(movieData, sortCriteria, sortOrder);
  renderAllMoviesData(sortedMovieData);
}

//this function when called triggers the sorting and rendering base on the selected criteria
function retriggerSortAndRenderBaseOnCriteria(){
  if(rating_sort_rb.checked){
    sortAndRenderBaseOnCriteria(movieData,"rating", order);
  }
  else if(year_sort_rb.checked){
    sortAndRenderBaseOnCriteria(movieData,"year", order);
  }
  else if(runtime_sort_rb.checked){
    sortAndRenderBaseOnCriteria(movieData,"runtime", order);
  }
  else if(name_sort_rb.checked){
    sortAndRenderBaseOnCriteria(movieData,"name", order);
  }
  else renderAllMoviesData(movieData);
}

//To be excecuted when a new movie is added
add_movie_form.addEventListener("submit", async (e)=> {

  e.preventDefault();

  const new_movie_titl = document.getElementById("new-movie-titl").value;
  const new_movie_year = document.getElementById("new-movie-year").value;
  const new_movie_rating = document.getElementById("new-movie-rating").value;
  const new_movie_runtime = document.getElementById("new-movie-runtime").value;
  const new_movie_img_url = document.getElementById("new-movie-img-url").value;
  const new_movie_cast = document.getElementById("new-movie-cast").value;
  const new_movie_plot = document.getElementById("new-movie-plot").value;

  //check if the added movie already exists:
  //if exists just update the data
  if (movieData[new_movie_titl] != undefined && movieData[new_movie_titl] != {} && movieData[new_movie_titl] != "") {
    alert('this movie already exists')
  }

  else if (new_movie_titl == "") {
    alert('please write a movie name')
  }
  //if does not exist create it an add the relative info then re-render base on the required criteria
  else {
    //use async function to make sure the movie is added before re-rendering 
    await addNewMovieToMovieData(new_movie_titl, new_movie_rating, new_movie_year, new_movie_runtime, new_movie_img_url, new_movie_cast, new_movie_plot);
    retriggerSortAndRenderBaseOnCriteria();
  }

});

async function addNewMovieToMovieData(movieName, rating, year, runtime, image_url, cast, plot){
  movieData[movieName] = {};
  movieData[movieName].year = year;
  movieData[movieName].rating = rating;
  movieData[movieName].runtime = runtime;
  movieData[movieName].image_url = image_url;
  movieData[movieName].cast = cast;
  movieData[movieName].plot = plot;
}

asc_order_rb.addEventListener('click', (e)=>{
  order = "ascending"
  retriggerSortAndRenderBaseOnCriteria();
})

desc_order_rb.addEventListener('click', (e)=>{
  order = "descending"
  retriggerSortAndRenderBaseOnCriteria();
})

rating_sort_rb.addEventListener('click', (e)=>{
  sortAndRenderBaseOnCriteria(movieData, "rating", order);
});

year_sort_rb.addEventListener('click', (e)=>{
  sortAndRenderBaseOnCriteria(movieData, "year", order);
});

runtime_sort_rb.addEventListener('click', (e)=>{
  sortAndRenderBaseOnCriteria(movieData, "runtime", order);
});

name_sort_rb.addEventListener('click', (e)=>{
  sortAndRenderBaseOnCriteria(movieData, "name", order);
});

default_sort_rb.addEventListener('click', (e)=>{
  renderAllMoviesData(movieData);
});

sort_form.addEventListener('click', (e)=>{
  if(name_sort_rb.checked || default_sort_rb.checked){
    disableAscDescRadioButtons();
  }
  else enableAscDescRadioButtons();
})

function enableAscDescRadioButtons(){
  asc_order_rb.disabled = false;
  desc_order_rb.disabled = false;
}

function disableAscDescRadioButtons(){
  asc_order_rb.disabled = true;
  desc_order_rb.disabled = true;
}

renderAllMoviesData(movieData);
disableAscDescRadioButtons();


















