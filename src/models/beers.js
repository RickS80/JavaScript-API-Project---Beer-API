const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')


const Beers = function() {
  this.data = [];
}


Beers.prototype.getData = function () {
  const url = 'https://api.punkapi.com/v2/beers'
  const request = new RequestHelper(url)

  const myPromise = request.get();
  myPromise.then((data) => {
    this.data = data;

  PubSub.publish('complete-beer:data', this.data);
  })
  .catch((err) =>{
    console.error(err);
  })
  PubSub.subscribe('BeerList:selectedID', (evt) => {
    selectedID = evt.detail;
    console.log('selectedID:',selectedID);
    this.publishBeerDetail(selectedID)
  })
};

Beers.prototype.publishBeerDetail = function (selectedID) {
  const selectedBeerObject = this.data[selectedID];
  console.log('selectedBeerObject',selectedBeerObject);
  PubSub.publish('selectedBeerObject', selectedBeerObject)
}






module.exports = Beers;
