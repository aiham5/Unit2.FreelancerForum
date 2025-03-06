// Array of possible names and occupations
const names = ["Alice", "Bob", "Carol", "David", "Eva"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist"];

// Initial freelancers array
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

// Function to render the freelancer list on the page
function renderFreelancers() {
  const freelancersList = document.getElementById("freelancers-list");
  freelancersList.innerHTML = ""; // Clear the previous list

  freelancers.forEach((freelancer) => {
    const freelancerElement = document.createElement("div");
    freelancerElement.textContent = `${freelancer.name}, ${freelancer.occupation} - $${freelancer.startingPrice}`;
    freelancersList.appendChild(freelancerElement);
  });
}

// Function to calculate the average starting price
function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  return total / freelancers.length;
}

// Function to update the average price on the page
function updateAveragePrice() {
  const averagePrice = calculateAveragePrice();
  document.getElementById("average-price").textContent =
    averagePrice.toFixed(2);
}

// Function to generate a random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 50) + 30; // Price between $30 and $80
  return { name, occupation, startingPrice };
}

// Function to add a new freelancer to the list
function addFreelancer() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer); // Add the new freelancer to the array
  renderFreelancers(); // Re-render the freelancer list
  updateAveragePrice(); // Update the average starting price
}

// Initialize the page with the current freelancers
window.onload = function () {
  renderFreelancers(); // Render initial freelancers (Alice and Bob)
  updateAveragePrice(); // Set initial average price

  // Set an interval to add a new freelancer every 3 seconds
  setInterval(addFreelancer, 3000);
};
