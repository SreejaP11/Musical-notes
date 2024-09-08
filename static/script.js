const navList = document.querySelector("nav ul");
const searchLink = document.createElement("li");
const artistSpotlightLink = document.createElement("li");
const playlistLink = document.createElement("li");

searchLink.innerHTML = '<a href="search.html">SEARCH</a>';
artistSpotlightLink.innerHTML = '<a href="artist_spotlight.html">ARTIST SPOTLIGHT</a>';
playlistLink.innerHTML = '<a href="playlist.html">PLAYLIST</a>'

navList.appendChild(searchLink);
navList.appendChild(artistSpotlightLink);
navList.appendChild(playlistLink);


const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.href;

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
      link.style.color = "red";
    
  });
  
  link.addEventListener("mouseout", () => {
    if (link.href === currentPage) {
      link.style.color = "yellow";
    } else {
      link.style.color = "white";
    }
  });
});



const text = "MUSICAL NOTES are the ATOMS of the MELODY UNIVERSE"; // the text to be typed
const speed = 50; // the speed of the typing effect in milliseconds
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typeWriter, 1000); // delay the effect by 1 second
});










const form = document.querySelector('form');
const clearFiltersButton = document.getElementById('clear-filters');

form.addEventListener('submit', handleSubmit);
clearFiltersButton.addEventListener('click', clearFilters);

function handleSubmit(e) {
	e.preventDefault();
	const searchInput = document.querySelector('input[type=text]');
	const searchTerm = searchInput.value;
	search(searchTerm);
	searchInput.value = '';
}

async function search(term) {
	const response = await fetch(`https://itunes.apple.com/search?term=${term}&limit=10`);
	const data = await response.json();
	const results = data.results;

	const searchResults = document.querySelector('.search-results');
	searchResults.innerHTML = '';

	results.forEach(result => {
		const trackName = result.trackName;
		const artistName = result.artistName;
		const artworkUrl = result.artworkUrl100;
		const previewUrl = result.previewUrl;
		const duration = Math.round(result.trackTimeMillis / 1000 / 60);

		const resultDiv = document.createElement('div');
		resultDiv.classList.add('result');

		const resultHtml = `
			<img src="${artworkUrl}">
			<div>
				<p>${trackName}</p>
				<p>${artistName}</p>
				<p>${duration} min</p>
				<audio src="${previewUrl}" controls></audio>
			</div>
		`;

		resultDiv.innerHTML = resultHtml;
		searchResults.appendChild(resultDiv);
	});
}

function clearFilters() {
	const durationInput = document.getElementById('duration');
	const explicitSelect = document.getElementById('explicit');

	durationInput.value = '';
	explicitSelect.value = 'all';
	search('');
}


