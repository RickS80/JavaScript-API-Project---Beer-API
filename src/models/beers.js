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

    PubSub.publish('munrosListView:data', this.data);
  })
  .catch((err) =>{
    console.error(err);
  })
};




module.exports = Beers;
