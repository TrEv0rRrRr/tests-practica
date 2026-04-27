import { Product } from "./Product.js";

export class OrderItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {
    if (!product) throw new Error("Item must have a product");
    if (quantity <= 0) throw new Error("Invalid quantity");
  }

  getTotal() {
    return this.product.price * this.quantity;
  }
}
