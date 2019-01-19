const Beers = require('./models/beers.js')
const BeerListView = require('./views/beer_list_view.js')
// const Highcharts = require('./views/highchart_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const container = document.querySelector('.beer-container')
    const selection = document.querySelector('#beer-selector')
    const viewer = new BeerListView(container, selection)
    viewer.bindEvents();



const getData = new Beers
// console.log(getData);
getData.getData();

});
