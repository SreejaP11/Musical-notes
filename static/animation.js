// Get the image element by its ID
const artistImg = document.getElementById('artist-img');

// Set the initial scale and direction of the animation
let scale = 1;
let direction = 1;

// Define the animation function
function animate() {
  // Increase or decrease the scale based on the direction
  scale += direction * 0.02;

  // Reverse the direction when the scale reaches a certain threshold
  if (scale > 1.2 || scale < 0.8) {
    direction = -direction;
  }

  // Apply the new scale to the image
  artistImg.style.transform = `scale(${scale})`;

  // Request the next frame of the animation
  requestAnimationFrame(animate);
}

// Start the animation
animate();

// Define an array to store the reviews
var reviews = [];

// Function to add a new review
function addReview() {
  // Get the values of the name, rating and review fields
  var name = document.getElementById("name").value;
  var rating = document.querySelector('input[name="rating"]:checked').value;
  var review = document.getElementById("review").value;

  // Create a new review object
  var newReview = {
    name: name,
    rating: rating,
    review: review,
  };

  // Add the new review object to the reviews array
  reviews.push(newReview);

  // Call the displayReviews function to update the review table
  displayReviews();

  // Clear the name, rating and review fields
  document.getElementById("name").value = "";
  document.querySelector('input[name="rating"]:checked').checked = false;
  document.getElementById("review").value = "";
}

// Function to display the reviews in a table
function displayReviews() {
  // Get a reference to the table body element
  var tableBody = document.querySelector("table#review-table tbody");

  // Clear the table body element
  tableBody.innerHTML = "";

  // Loop through the reviews array and add each review to the table
  for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var ratingCell = row.insertCell(1);
    var reviewCell = row.insertCell(2);
    nameCell.innerHTML = review.name;
    ratingCell.innerHTML = review.rating;
    reviewCell.innerHTML = review.review;
  }
}

// Set the release date to 30th June 2023 00:00
var releaseDate = new Date("June 30, 2023 00:00:00").getTime();

// Update the countdown timer every second
var countdown = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the release date
  var timeRemaining = releaseDate - now;

  // If the release date has passed, display "RELEASED!"
  if (timeRemaining < 0) {
    document.getElementById("countdown").innerHTML = "RELEASED!";
  } else {
    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the time remaining in the countdown timer
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }
}, 1000);
// Get all the radio buttons
const ratings = document.querySelectorAll('.rating input[type="radio"]');

// Add an event listener to each radio button
ratings.forEach(rating => {
  rating.addEventListener('change', () => {
    // Get the selected rating value
    const selectedRating = rating.value;
    
    // Log the selected rating value
    console.log(`Selected rating: ${selectedRating}`);
  });
});
