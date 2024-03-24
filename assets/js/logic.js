/*This file is used for functions to use for both index and blog.html files*/ 

const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const mainContainer = document.querySelector('.mainContainer');
// Set default mode to light
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light container');
    mainContainer.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark container');
    mainContainer.setAttribute('class', 'dark');
  }
});

