let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

// let cato_bx = document.getElementById('cato_bx');
// let left_scroll = document.getElementById('left_scroll');
// let right_scroll = document.getElementById('right_scroll');

// left_scroll.addEventListener('click', () => {
//     cato_bx.scrollLeft -= 100;
// })
// right_scroll.addEventListener('click', () => {
//     cato_bx.scrollLeft += 100;
// })



// year and a-z box start 
let year = document.getElementById('year');


year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});


function loadMovies(category) {
    // Get all movie cards
    var movieCards = document.querySelectorAll('.allCard');

    // Loop through each card
    movieCards.forEach(function(card) {
        // Check if the card contains the specified category
        if (card.textContent.toLowerCase().includes(category.toLowerCase())) {
            // Display the card if it matches the category
            card.style.display = 'flex';
        } else {
            // Hide the card if it doesn't match the category
            card.style.display = 'none';
        }
    });
}

function showAllMovies() {
    // Get all movie cards
    var movieCards = document.querySelectorAll('.allCard');

    // Loop through each card
    movieCards.forEach(function(card) {
        // Display all cards
        card.style.display = 'flex';
    });
}

function sortByMostRecent() {
    // Get the container of the movie cards
    var container = document.getElementById('movies-container');

    // Get all movie cards as an array
    var movieCards = Array.from(container.getElementsByClassName('allCard'));

    // Extract the movie cards that contain dates (i.e., have an image)
    var moviesWithDates = movieCards.filter(card => card.querySelector('img'));

    // Sort the cards by the date (most recent first)
    moviesWithDates.sort(function(a, b) {
        // Get the year of each movie from the span inside h6
        var yearA = parseInt(a.querySelector('h6 span').textContent);
        var yearB = parseInt(b.querySelector('h6 span').textContent);
        return yearB - yearA;
    });

    // Clear the container
    container.innerHTML = '';

    // Append the sorted movie cards back to the container
    moviesWithDates.forEach(function(card) {
        container.appendChild(card);
    });

    // Also append the description cards if they exist
    var descriptionCards = movieCards.filter(card => !card.querySelector('img'));
    descriptionCards.forEach(function(card) {
        container.appendChild(card);
    });
}

function filterByYear(year) {
    // Get all movie cards
    var movieCards = document.querySelectorAll('.allCard');

    // Loop through each card
    movieCards.forEach(function(card) {
        // Get the year of the movie from the span inside h6
        var movieYear = card.querySelector('h6 span');
        if (movieYear) {
            // Display the card if the year matches
            if (parseInt(movieYear.textContent) === year) {
                card.style.display = 'flex';
            } else {
                // Hide the card if the year doesn't match
                card.style.display = 'none';
            }
        } else {
            // Hide the card if it doesn't have a year (description-only cards)
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Function to filter movies based on search term
    function filterMovies() {
        const searchInput = document.getElementById('search').value.trim().toLowerCase();
        const movieCards = document.querySelectorAll('.allCard');

        movieCards.forEach(card => {
            const movieTitle = card.querySelector('h5').textContent.toLowerCase();
            if (movieTitle.includes(searchInput)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add event listener to the search button
    document.getElementById('search_icon').addEventListener('click', filterMovies);
});