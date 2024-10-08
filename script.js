const languageButton = document.getElementById('language-button');
const languageDropdown = document.getElementById('language-dropdown');

languageButton.addEventListener('click', () => {
  languageDropdown.classList.toggle('hidden');
});