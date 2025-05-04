const loginBtn = document.getElementById('loginBtn');
const body = document.body;

loginBtn.addEventListener('click', () => {
  body.classList.toggle('active');
  loginBtn.textContent = body.classList.contains('active') ? 'Back' : 'Login';
});

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const tempEmail = 'user1';
  const tempPassword = '1234';

  if (email !== tempEmail) {
    emailInput.value = '';
    emailInput.placeholder = 'Email does not exist';
    emailInput.focus();
  } else if (password !== tempPassword) {
    passwordInput.value = '';
    passwordInput.placeholder = 'Re-enter password';
    passwordInput.focus();
  } else {
    window.location.href = 'index.html';
  }
});


