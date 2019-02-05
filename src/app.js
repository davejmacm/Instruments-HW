document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectInstrument = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectInstrument);
  instrumentDropdown.bindEvents();
});
