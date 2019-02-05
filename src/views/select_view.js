const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument-families:all-instruments', (evt) => {
    const allInstruments = evt.detail;
    this.populate(allInstruments);
    console.log(allInstruments);

  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentFamilyData){
  instrumentFamilyData.forEach((instrument, index) => {
    const option = document.createElement('instrument');
    option.textContent = instrument.name;//this will only display name for just now - fix for everything once confirmed working
    option.value = index;
    this.element.appendChild(option);
  });
}

module.exports = SelectView;
