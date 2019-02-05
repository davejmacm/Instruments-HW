const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents() = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument',(evt) =>{
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const instrumentInfo = document.createElement('p');
  instrumentInfo.textContent = `The ${instrument.name} family, described as ${instrument.discription}. Instruments considered part of this family include ${instrument.intruments}`
  this.container.innerHTML = '';
  this.container.appendChild(instrumentInfo);
}


module.exports = InstrumentInfoView;
