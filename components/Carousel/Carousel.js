/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

const carouselContainer = document.querySelector('.carousel-container');



const createCarousel = () => {
//Elements
const carousel = document.createElement('div');
const leftButton = document.createElement('div');
const rightButton = document.createElement('div');
const images = [
  {src: "mountains.jpeg", index: 0}, 
  {src: "computer.jpeg", index: 1}, 
  {src: "trees.jpeg", index: 2},
  {src: "turntable.jpeg", index: 3}, 
];
const createImage = data => {
  const image = document.createElement('img');
  image.src = `./assets/carousel/${data.src}`;

  image.dataset.index = data.index;
  carousel.appendChild(image);
}
const index = 0;
const currentImage = document.querySelector(`img[data-index='${index}']`);
console.log(currentImage);

//Element structure
carousel.appendChild(leftButton);

images.forEach(img => {
  createImage(img);

})
carousel.appendChild(rightButton);

//Add classes
carousel.classList.add('carousel');
leftButton.classList.add('left-button');
rightButton.classList.add('right-button');









return carousel;
}
carouselContainer.appendChild(createCarousel());
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
