// Bootstrap handles the mobile menu. This file only sets the footer year.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
