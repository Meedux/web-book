// Menu Tray Toggle
const burgerBtn = document.getElementById('burger-btn');
const menuTray = document.getElementById('menu-tray');

burgerBtn.addEventListener('click', () => {
  menuTray.classList.toggle('open');
});

// Dropdown Toggles
const aboutUsItem = document.getElementById('about-us');
const contactsItem = document.getElementById('contacts');

//About Us
[aboutUsItem, contactsItem].forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('open');
  });
});

// Handle book click with zoom effect
function handleClick(event, url) {
  event.preventDefault();

  const book = event.currentTarget;
  const otherBook = document.querySelector(book.id === 'book1' ? '#book2' : '#book1');

  book.classList.add('zoomed-fade-out');
  otherBook.classList.add('shrink-out');

  setTimeout(() => {
    window.location.href = url;
  }, 1200);
}


// Attach click events to book elements
document.getElementById('book1').addEventListener('click', (e) => handleClick(e, 'book1.html'));
document.getElementById('book2').addEventListener('click', (e) => handleClick(e, 'book2.html'));

// Logout Modal Logic
const logoutModal = document.getElementById('logout-modal');
const logoutConfirm = document.getElementById('logout-confirm');
const logoutCancel = document.getElementById('logout-cancel');
const homeLink = document.querySelector('li a[href="#"]'); // Assuming 'Home' is the first <a>

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  logoutModal.style.display = 'flex';
});

logoutCancel.addEventListener('click', () => {
  logoutModal.style.display = 'none';
});

logoutConfirm.addEventListener('click', () => {
  // Replace with actual logout logic or redirect
  window.location.href = 'login.html'; // Example target
});

