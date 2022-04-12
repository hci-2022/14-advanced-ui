document.querySelector('html').className = 'js';

const cartButton = document.querySelector('a[href="#cart"]');

cartButton.addEventListener('click', function(event) {
  console.log('Cart button clicked!');
});
