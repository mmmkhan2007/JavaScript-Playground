/*

Calculate the Total Price of Groceries

Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

Notes
There might be a floating point precision problem in here...

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function getTotalPrice(groceries) {
    return Number(groceries.reduce((acc, curr) => acc += curr.price * curr.quantity, 0).toFixed(2));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function getTotalPrice(groceries) {
    return groceries
        .map((grocery) => grocery.quantity * grocery.price)
        .reduce((accumulator, value) => (accumulator + value).toFixed(2) * 1)
}



//#############################################################
//#  SOLUTION 3
//#############################################################


getTotalPrice = g => Number(g.reduce((x, y) => x + y.price * y.quantity, 0).toFixed(2))



//#############################################################
//#  SOLUTION 4
//#############################################################


function getTotalPrice(groceries) {
    return Number(
        groceries
        .map((val) => val.price * val.quantity)
        .reduce((c, v) => c + v)
        .toFixed(1)
    );
}