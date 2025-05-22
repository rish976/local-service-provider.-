// Responsive Navbar Toggle
const nav = document.querySelector('nav');
const authButtons = document.querySelector('.auth-buttons');

function toggleMenu() {
  nav.classList.toggle('show');
  authButtons.classList.toggle('show');
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('show');
    authButtons.classList.remove('show');
  }
});

// Click Handlers
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.innerText} button clicked`);
  });
});

// Search Function
document.querySelector('.search-bar button').addEventListener('click', () => {
  const query = document.querySelector('.search-bar input').value;
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert('Please enter a service to search for.');
  }
});