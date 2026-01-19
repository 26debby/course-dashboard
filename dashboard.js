console.log("✅ dashboard.js loaded");

const dataDiv = document.getElementById("countryData");
const statusDiv = document.getElementById("status");
const refreshBtn = document.getElementById("refreshBtn");

let currentIndex = 0;

function getCourses() {
  return JSON.parse(localStorage.getItem("courses")) || [];
}

function renderDashboard() {
  const courses = getCourses();

  if (courses.length === 0) {
    statusDiv.textContent = "No registered courses yet. Register a course first.";
    dataDiv.innerHTML = "";
    return;
  }

  // ✅ make sure index is always valid
  if (currentIndex >= courses.length) currentIndex = 0;

  const c = courses[currentIndex];
  statusDiv.textContent = `Showing ${currentIndex + 1} of ${courses.length}`;

  dataDiv.innerHTML = `
    <p><strong>Name:</strong> ${c.name}</p>
    <p><strong>Matric Number:</strong> ${c.matric}</p>
    <p><strong>Course Code:</strong> ${c.code}</p>
    <p><strong>Course Title:</strong> ${c.title}</p>
  `;
}

refreshBtn.addEventListener("click", () => {
  const courses = getCourses();

  if (courses.length === 0) {
    renderDashboard();
    return;
  }

  // ✅ go to next record each click
  currentIndex = (currentIndex + 1) % courses.length;
  renderDashboard();
});

// ✅ initial display
renderDashboard();
