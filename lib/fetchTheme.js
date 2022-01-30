const fetchTheme = (set) => {
  // Get saved dark mode state from localStorage
  const savedTheme = localStorage.getItem('savedTheme');
  if (savedTheme) {
    // Local storage stores logic values as string so have to compare to 'true' here
    set(savedTheme === 'true');
  }
};
export default fetchTheme;
