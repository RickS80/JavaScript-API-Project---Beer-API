const Beers = require('./models/beers.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const getData = new Beers
console.log(getData);
getData.getData();

});
