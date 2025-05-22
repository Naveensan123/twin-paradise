// Simple contact form validation example
const form = document.querySelector('form');
if(form) {
  form.addEventListener('submit', function(e) {
    const email = form.querySelector('input[type="email"]').value.trim();
    if(!email || !email.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email address');
    }
  });
}
