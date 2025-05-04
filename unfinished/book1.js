// Previous/Next functionality for the dock buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Find the checkboxes corresponding to the pages
const page1Checkbox = document.getElementById('checkbox-page1');
const page2Checkbox = document.getElementById('checkbox-page2');
const page3Checkbox = document.getElementById('checkbox-page3');
const page4Checkbox = document.getElementById('checkbox-page4');

// Previous Button functionality
prevBtn.addEventListener('click', () => {
  const currentPage = document.querySelector('.page[style*="z-index: 1"]');
  if (currentPage) {
    if (currentPage.id === 'page2') {
      page1Checkbox.checked = true;
    } else if (currentPage.id === 'page3') {
      page2Checkbox.checked = true;
    } else if (currentPage.id === 'page4') {
      page3Checkbox.checked = true;
    }
  }
});

// Next Button functionality
nextBtn.addEventListener('click', () => {
  const currentPage = document.querySelector('.page[style*="z-index: 1"]');
  if (currentPage) {
    if (currentPage.id === 'page1') {
      page2Checkbox.checked = true;
    } else if (currentPage.id === 'page2') {
      page3Checkbox.checked = true;
    } else if (currentPage.id === 'page3') {
      page4Checkbox.checked = true;
    }
  }
});
