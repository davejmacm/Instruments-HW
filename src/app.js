const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectInstrument = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectInstrument);
  instrumentDropdown.bindEvents();
});
