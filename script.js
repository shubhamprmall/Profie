// Signup form (only needed on signup.html)
const form = document.getElementById('signupForm');
const message = document.getElementById('message');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.style.color = '#adff2f';
    message.textContent = `Thank you for signing up, ${form.name.value}!`;
    form.reset();
  });
}
