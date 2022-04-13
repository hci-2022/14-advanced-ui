// TODO: Uncomment this line when JavaScript-less styles have been written
// document.querySelector('html').className = 'js';

/*
  Add-to-cart callbacks, logic, calculations, and events
*/
const store = document.querySelector('#store');

store.addEventListener('click', handleAddToCartButtonClicks);

function handleAddToCartButtonClicks(event) {
  const button = event.target;
  if (button.tagName !== 'BUTTON') return;
}


/*
  Utility functions for handling money
*/

function lineItemSubtotal(wholeUnitPrice, quantity) {

}

function formatCurrency(wholeUnitValue, symbol) {

}


/*
  Slideover behavior for store at mobile scales
*/

const cartButton = document.querySelector('a[href="#cart"]');

cartButton.addEventListener('click', function(event) {
  console.log('Cart button clicked!');
});
