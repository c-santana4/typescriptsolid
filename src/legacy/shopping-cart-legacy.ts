type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((total, value) => total + value.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de comprar limpo.');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Notebook', price: 9.9 });
shoppingCart.addItem({ name: 'Pen', price: 1.99 });
shoppingCart.addItem({ name: 'T-Shirt', price: 60 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
