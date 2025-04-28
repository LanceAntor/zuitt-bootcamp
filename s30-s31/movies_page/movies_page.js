document.addEventListener('DOMContentLoaded', async function () {
    const moviesList = document.getElementById('movies-list');

    async function fetchMovies() {
        try {
            const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies');
            if (response.ok) {
                const data = await response.json();
                console.log("Fetched data:", data);

                if (Array.isArray(data.movies)) {
                    displayMovies(data.movies);
                } else if (Array.isArray(data)) {
                    displayMovies(data);
                } else {
                    console.error('Unexpected response format:', data);
                    moviesList.innerHTML = '<p class="error-message">Unexpected data format from the server.</p>';
                }
            } else {
                console.error('Failed to fetch movies:', response.status);
                moviesList.innerHTML = '<p class="error-message">Failed to load movies. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Error fetching movies: ' + error.message);
            moviesList.innerHTML = '<p class="error-message">An error occurred while fetching movies.</p>';
        }
    }

    function displayMovies(movies) {
        moviesList.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
            <img src="../images/default_poster.png" alt="Movie Poster" class="movie-poster">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
        `;
            moviesList.appendChild(movieCard);
        });
    }

    fetchMovies();
});
