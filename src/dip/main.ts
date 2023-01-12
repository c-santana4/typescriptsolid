/*
  Dependency Inversion Principle:

  Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
  depender de abstrações.

  Dependa de abstrações, não de implementações.
  Abstrações não devem depender de detalhes. Detalhes devem depender
  de abstrações.

  Classes de baixo nível são classes que executam tarefas (os detalhes)
  Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './entities/discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';
import { MessagingProtocol } from './entities/interfaces/messaging-protocol';

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
