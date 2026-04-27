import { Order } from "../Clases/Orders/Order.js";
import { OrderItem } from "../Clases/Orders/OrderItem.js";
import { Product } from "../Clases/Orders/Product.js";

describe("Testing the product sales system", () => {
  test("Should calculate the total price of the order correctly", () => {
    // Arrange
    const order = new Order();
    const product1 = new Product("Producto 1", 15);
    const item1 = new OrderItem(product1, 2);

    const product2 = new Product("Producto 2", 20);
    const item2 = new OrderItem(product2, 5);

    // Act
    order.addItem(item1);
    order.addItem(item2);

    // Assert
    expect(order.getTotal()).toBe(130);
  });

  test("Should change the status to 'CANCELLED' after canceling the order", () => {
    // Arrange
    const order = new Order();
    const product1 = new Product("Producto 1", 15);
    const item1 = new OrderItem(product1, 2);
    order.addItem(item1);

    // Act
    order.cancel();

    // Assert
    expect(order.status).toBe("CANCELLED");
  });

  test("Should change the status to 'PAID' after paying the order", () => {
    // Arrange
    const order = new Order();
    const product1 = new Product("Producto 1", 15);
    const item1 = new OrderItem(product1, 2);
    order.addItem(item1);

    // Act
    order.pay();

    // Assert
    expect(order.status).toBe("PAID");
  });
});
