const BeerView = function(space, data){
  this.space = space
  this.data = data

}

BeerView.prototype.render = function () {
  this.space.innerHTML = " "

     const title = document.createElement('h2')
     title.textContent = `${this.data.name} (abv: ${this.data.abv}%)`
     this.space.appendChild(title)

     const tagline = document.createElement('h4')
     tagline.textContent = this.data.tagline
     this.space.appendChild(tagline)

     const firstbrewed = document.createElement('p')
     firstbrewed.textContent = `First Brewed: ${this.data.first_brewed}`
     this.space.appendChild(firstbrewed)

     const description = document.createElement('p')
     description.textContent = this.data.description
     this.space.appendChild(description)

     const image = document.createElement('img');
     image.src = this.data.image_url
     image.className = 'image';
     // image.classList.add('center')
     this.space.appendChild(image);

     const foodPairingTitle = document.createElement('p');
     foodPairingTitle.textContent = `Suggested Food Pairings:`
     this.space.appendChild(foodPairingTitle);

     const foodPairingList = this.createPairingList(this.data.food_pairing);
     this.space.appendChild(foodPairingList);

}

BeerView.prototype.createPairingList = function (pairings) {
   const list = document.createElement('ul');

   pairings.forEach((pairing) => {
    const listItem = document.createElement('li');
    listItem.textContent = pairing;
    list.appendChild(listItem);
   });

   return list;

 };

 BeerView.prototype.renderAll = function () {
   this.space.innerHTML = " "

      this.data.forEach( beer  => {
      const li = document.createElement('li')
      li.textContent = `${beer.name} (abv: ${beer.abv}%)`
      this.space.appendChild(li)
      })

 };


module.exports = BeerView;
