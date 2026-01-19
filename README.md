# Course Registration & Data Dashboard

A simple web project built with **HTML, CSS, and JavaScript**.

## Part A: Course Registration Module
- Registration form (Student Name, Matric Number, Course Code, Course Title)
- Input validation (all fields required, matric format check)
- Saves registrations to **localStorage**
- Displays registered courses in a table
- Data persists after page reload

## Part B: Integrated Data Dashboard
- Consumes **REST Countries API**
- Displays at least 3 fields (Country, Population, Region)
- Includes loading state and error handling
- Refresh Data button to fetch new data

## Part C: User Experience & Integration
- Responsive layout (mobile + desktop)
- Separated concerns:
  - `index.html` (structure)
  - `css/style.css` (styling)
  - `js/registration.js` and `js/dashboard.js` (logic)

## How to Run
- Open the folder in VS Code
- Use **Live Server** to run `index.html`
