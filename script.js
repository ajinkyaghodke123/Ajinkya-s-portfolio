document.addEventListener('DOMContentLoaded', () => {
  // Highlight the clicked navigation link
  const links = document.querySelectorAll('.main-nav a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Keep the footer year current
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
