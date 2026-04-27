import { OrderItem } from "./OrderItem.js";

export class Order {
  items: OrderItem[] = [];
  status: "CREATED" | "PAID" | "CANCELLED" = "CREATED";

  addItem(item: OrderItem) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
  }

  pay() {
    if (this.items.length === 0) {
      throw new Error("Cannot pay empty order");
    }
    this.status = "PAID";
  }

  cancel() {
    if (this.status === "PAID") {
      throw new Error("Cannot cancel a paid order");
    }
    this.status = "CANCELLED";
  }
}
