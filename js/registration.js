console.log("✅ registration.js loaded");

const form = document.getElementById("courseForm");
const tableBody = document.getElementById("courseTable");

if (!form || !tableBody) {
  console.error("❌ Form or table not found. Check IDs: courseForm, courseTable");
}

const matricPattern = /^LCU\/[A-Z]{2}\/\d{2}\/\d{5}$/;

function getCourses() {
  return JSON.parse(localStorage.getItem("courses")) || [];
}

function saveCourses(courses) {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function renderTable() {
  const courses = getCourses();
  tableBody.innerHTML = "";

  courses.forEach((c, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${c.matric}</td>
      <td>${c.code}</td>
      <td>${c.title}</td>
      <td><button type="button" data-index="${index}" class="deleteBtn">Delete</button></td>
    `;
    tableBody.appendChild(tr);
  });
}

// ✅ delete using event delegation (more reliable than onclick)
tableBody.addEventListener("click", (e) => {
  if (!e.target.classList.contains("deleteBtn")) return;

  const index = Number(e.target.dataset.index);
  const courses = getCourses();
  courses.splice(index, 1);
  saveCourses(courses);
  renderTable();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const matric = document.getElementById("matricNumber").value.trim().toUpperCase();
  const code = document.getElementById("courseCode").value.trim();
  const title = document.getElementById("courseTitle").value.trim();

  if (!name || !matric || !code || !title) {
    alert("All fields are required.");
    return;
  }

  if (!matricPattern.test(matric)) {
    alert("Matric format must be like: LCU/UG/23/26088");
    return;
  }

  const courses = getCourses();
  courses.push({ name, matric, code, title });
  saveCourses(courses);

  renderTable();
  form.reset();
});

renderTable();
