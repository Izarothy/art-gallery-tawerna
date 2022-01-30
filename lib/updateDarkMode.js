const updateDarkMode = (currentTheme) => {
  // Update local storage with darkMode state every time it changes
  localStorage.savedTheme = currentTheme;

  // Add dark mode to the html element based on the state - this is for tailwind utility class
  document.querySelector('html').classList.toggle('dark', currentTheme);
};

export default updateDarkMode;
