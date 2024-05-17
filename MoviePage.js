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


// let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
// let left_scroll1 = document.getElementById('left_scroll1');
// let right_scroll1 = document.getElementById('right_scroll1');

// left_scroll1.addEventListener('click', () => {
//     mvoes_bx_1.scrollLeft -= 150;
// })
// right_scroll1.addEventListener('click', () => {
//     mvoes_bx_1.scrollLeft += 150;
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

