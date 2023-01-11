/*
  Interface Segregation Principle:
  Os clientes não devem ser forçados a depender de interfaces/types/membros abstratos que não utilizam
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './entities/discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Carlos', 'Santana', '000.000.000-00');
const enterpriseCustomer = new EnterpriseCustomer('Carlos Inc.', '000.000.000-00');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pen', 1.99));
shoppingCart.addItem(new Product('T-Shirt', 60));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
