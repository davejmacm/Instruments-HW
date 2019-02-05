const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');
const instrumentFamilyData = require('./data/instrument_family_data.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectInstrument = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectInstrument);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('.instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentFamiliesData = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamiliesData.bindEvents();
});
