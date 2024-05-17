const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const year = urlParams.get('year');
const rating = urlParams.get('rating');

// Set movie details
document.getElementById('movie-title').textContent = title;
document.getElementById('movie-year').textContent = 'Year: ' + year;
document.getElementById('movie-rating').textContent = 'Rating: ' + rating;

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get movie details from URL parameters
var movieTitle = getParameterByName('title');
var movieYear = getParameterByName('year');
var movieRating = getParameterByName('rating');

// Set movie details in the review page
document.getElementById('movie-title').innerText = `Movie title: ${movieTitle}`;
document.getElementById('movie-year').innerText = `Year: ${movieYear}`;
document.getElementById('movie-rating').innerText = `Rating: ${movieRating}`;

