const PubSub = require('../helpers/pub_sub.js')
const BeerView = require('./beer_view.js')


const BeerListView = function(container, selection){
  this.container = container
  this.selection = selection
  this.data = null;
}

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('complete-beer:data', (evt) =>{
    this.data = evt.detail;
    this.populate(this.data)
  })
}



BeerListView.prototype.populate = function (beers) {
    beers.forEach( beer  => {
    const option = document.createElement('option')
    option.textContent = beer.name
    this.selection.appendChild(option)
    })
  };


module.exports = BeerListView;
