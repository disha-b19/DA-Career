// Select elements
const formEl = document.querySelector("form");
const searchBox = document.querySelector("#job-role");
const searchButton = document.querySelector(".search-icon");
const jobContainer = document.querySelector(".job-listing");
const internshipBtn = document.querySelector(".internship-btn");
const softwareDeveloperBtn = document.querySelector(".software-developer-btn");
const filterBtn = document.querySelector(".filter-btn");
const feedbackForm = document.querySelector("form");
const jobCards = document.querySelectorAll(".job");

// Event listener for the search functionality
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchTerm = searchBox.value.toLowerCase();
  filterJobs(searchTerm);
});

// Event listeners for job role filter buttons
internshipBtn.addEventListener("click", () => filterJobs("internship"));
softwareDeveloperBtn.addEventListener("click", () => filterJobs("software developer"));

// Function to filter jobs based on search or button click
function filterJobs(role) {
  jobCards.forEach((job) => {
    const jobTitle = job.querySelector("h3").textContent.toLowerCase();
    if (jobTitle.includes(role)) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
}

// Feedback form submission
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Check if fields are filled
  if (name && email && message) {
    alert("Thank you for your feedback!");
    feedbackForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});



let inputData = "";

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.example.com/search?query=${encodeURIComponent(inputData)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    const container = document.getElementById("container");
    container.innerHTML = "";

    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("job");

      const head = document.createElement("h3");
      head.innerText = result.title || "Image Title";

      const para = document.createElement("p");
      para.innerText = result.description || "Image Description";

      imageWrapper.appendChild(head);
      imageWrapper.appendChild(para);

    });
  }
  catch (error) {
    console.log("error fetching image:", error);
  }
}

formEl.addEventListener("submit", (event) =>
)
