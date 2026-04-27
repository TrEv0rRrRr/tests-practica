import { Order } from "../Clases/Orders/Order.js";
import { OrderItem } from "../Clases/Orders/OrderItem.js";
import { Product } from "../Clases/Orders/Product.js";

describe("Testing the product sales system", () => {
  test("Should allow the user to create an order, add items and pay", () => {
    // Arrange
    const product1 = new Product("Product1", 15);
    const item1 = new OrderItem(product1, 2);

    const product2 = new Product("Product2", 15);
    const item2 = new OrderItem(product2, 2);

    // Act
    const order = new Order();
    order.addItem(item1);
    order.addItem(item2);
    order.pay();

    // Assert
    expect(order.status).toBe("PAID");
  });

  test("Should allow the user to create an order, add items and see the final price", () => {
    // Arrange
    const product1 = new Product("Product1", 15);
    const item1 = new OrderItem(product1, 2);

    const product2 = new Product("Product2", 45);
    const item2 = new OrderItem(product2, 3);

    // Act
    const order = new Order();
    order.addItem(item1);
    order.addItem(item2);
    const finalPrice = order.getTotal();

    // Assert
    expect(finalPrice).toBe(165);
  });

  test("Should allow the user to create an order, add items and cancel it", () => {
    // Arrange
    const product1 = new Product("Product1", 15);
    const item1 = new OrderItem(product1, 2);

    const product2 = new Product("Product2", 15);
    const item2 = new OrderItem(product2, 2);

    // Act
    const order = new Order();
    order.addItem(item1);
    order.addItem(item2);
    order.cancel();

    // Assert
    expect(order.status).toBe("CANCELLED");
  });
});
