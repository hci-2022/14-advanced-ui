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

  const cart = document.querySelector('#cart');
  const cartList = cart.querySelector('#cart-items');
  const cartItemTemplate = cart.querySelector('template#line-item');

  const lineItem = cartItemTemplate.content.cloneNode(true);

  /* Build out itemData */
  const item = button.parentElement;
  const itemData = {}

  for (var key in item.dataset) {
    itemData[key] = item.dataset[key];
  }

  itemData.name = item.querySelector('h3').innerText;

  /* Attach itemData to lineItem template */

  const li = lineItem.querySelector('li[data-id]');
  const quantity = 3;
  li.dataset.id = itemData.id;
  li.dataset.quantity = quantity;
  li.dataset.price = itemData.price;

  li.querySelector('.name output').innerText = itemData.name;
  li.querySelector('.quantity output').innerText = quantity;
  li.querySelector('.price output').innerText = formatCurrency(itemData.price);
  li.querySelector('.total output').innerText =
    formatCurrency(itemData.price * quantity);

  li.querySelector('input[type="hidden"]').value = itemData.id + ',' + quantity;


/*
<li data-id="" data-quantity="" data-price="">
  <ul>
    <li class="name"><b>Item:</b> <output></output></li>
    <li class="quantity"><b>Count:</b> <output></output></li>
    <li class="price"><b>Unit Price:</b> <output></output></li>
    <li class="total"><b>Unit Total:</b> <output></output></li>
    <input type="hidden" name="item" value="[data-id],[data-quantity]" />
  </ul>
</li>

*/
  cartList.appendChild(lineItem);
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
