const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instrument-families:all-instruments', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentInfo(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentInfo = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument', selectedInstrument)
};

module.exports = InstrumentFamilies;
