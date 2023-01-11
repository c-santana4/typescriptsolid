/*
  Liskov Substitution Principle:
  Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
  deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

  Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
  Mais simples ainda: Se meu programa espera um Animal, algo do tipo
  Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './entities/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pen', 1.99));
shoppingCart.addItem(new Product('T-Shirt', 60));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
