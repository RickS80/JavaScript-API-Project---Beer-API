const PubSub = require('../helpers/pub_sub.js')
const BeerView = require('./beer_view.js')
// const Highcharts = require('./highchart_view.js')

const BeerListView = function(container, selection){
  this.container = container
  this.selection = selection
  this.data = null;
}

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('complete-beer:data', (evt) =>{
    this.data = evt.detail;
    console.log(this.data);
    this.populate(this.data)
    this.renderAll()
  })

  this.selection.addEventListener('change', (evt) => {
      const selectedBeerID = evt.target.value;
      console.log('beer ID:', selectedBeerID);
      PubSub.publish('BeerList:selectedID', selectedBeerID)
})


      PubSub.subscribe('selectedBeerObject', (evt) => {
        this.data = evt.detail
        console.log('BeerListObject:',this.data);
        this.render();
      })






}

BeerListView.prototype.populate = function (beers) {
    beers.forEach( beer  => {
    const option = document.createElement('option')
    option.textContent = beer.name
    option.value = beer.id - 1
    console.log();
    this.selection.appendChild(option)
    })
  };

BeerListView.prototype.render = function () {
  const beerView = new BeerView(this.container, this.data)
    beerView.render();
};

BeerListView.prototype.renderAll = function () {
  const allBeerView = new BeerView(this.container, this.data)
    allBeerView.renderAll();



};






module.exports = BeerListView;
