const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const floatingWindow = document.getElementById('floatingWindow');

openButton.addEventListener('click', () => {
    floatingWindow.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    floatingWindow.style.display = 'none';
});

  
  