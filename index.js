let freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const names = ["Carol", "Dave", "Eve", "Frank", "Grace", "Hank"];
const occupations = [
  "Designer",
  "Programmer",
  "Artist",
  "Consultant",
  "Engineer",
];

function renderFreelancers() {
  const freelancerContainer = document.getElementById("freelancers");
  freelancerContainer.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${freelancer.name}</td>
          <td>${freelancer.occupation}</td>
          <td>$${freelancer.price}</td>
      `;
    freelancerContainer.appendChild(row);
  });

  updateAveragePrice();
}

function updateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const average = (total / freelancers.length).toFixed(2);
  document.getElementById(
    "averagePrice"
  ).textContent = `The average starting price is $${average}.`;
}

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100) + 20;

  freelancers.push({ name, occupation, price });
  renderFreelancers();
}

renderFreelancers();

setInterval(addFreelancer, 3000);
