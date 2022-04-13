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
  const item = button.parentElement;
  const itemData = {}
  console.log(item.dataset); // LI

  for (var key in item.dataset) {
    itemData[key] = item.dataset[key];
  }

  itemData.name = item.querySelector('h3').innerText;

  console.log(itemData);
}


/*
  Utility functions for handling money
*/

function lineItemSubtotal(wholeUnitPrice, quantity) {

}

// calulatePercentage(1250,6.25);
function calculatePercentage(wholeUnitValue, percentage) {
  return Math.round(wholeUnitValue * (percentage / 100));
}

function formatCurrency(wholeUnitValue) {
  var currencySymbol = '$';
  var humanAmount = wholeUnitValue + "";
  if (humanAmount.length < 3) {
    currencySymbol = '¢';
    return humanAmount + currencySymbol;
  }
  humanAmount = humanAmount.replace(/(\d\d)$/, '.$1');
  return currencySymbol + humanAmount;
}


/*
  Slideover behavior for store at mobile scales
*/

const cartButton = document.querySelector('a[href="#cart"]');

cartButton.addEventListener('click', function(event) {
  console.log('Cart button clicked!');
});
