"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  // Every tile and quick-navigation item points to a real section on this page.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });
});
