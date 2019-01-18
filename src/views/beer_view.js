const BeerView = function(space, data){
  this.space = space
  this.data = data

}

BeerView.prototype.render = function () {
  this.space.innerHTML = " "

     const h3 = document.createElement('h3')
     h3.textContent = this.data.name
     this.space.appendChild(h3)

     const p = document.createElement('p')
     p.textContent = this.data.description
     this.space.appendChild(p)

     


}


module.exports = BeerView;
