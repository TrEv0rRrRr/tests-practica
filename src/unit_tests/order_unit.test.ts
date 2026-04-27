import { Order } from "../Clases/Orders/Order.js";
import { OrderItem } from "../Clases/Orders/OrderItem.js";
import { Product } from "../Clases/Orders/Product.js";

describe("Testing the product sales system", () => {
  test("Should throw an error if you try to create a product with an invalid name", () => {
    // Arrange
    const price = 15;

    // Act + Assert
    expect(() => new Product("", price)).toThrow("Product must have a name");
  });

  test("Should throw an error if you try to create a product with an invalid price", () => {
    // Arrange
    const name = "Product";

    // Act + Assert
    expect(() => new Product(name, -1)).toThrow("Invalid price");
  });

  test("Should calculate the total price of the item properly", () => {
    // Arrange
    const product = new Product("Product", 10);
    const item = new OrderItem(product, 15);

    // Act
    const totalPrice = item.getTotal();

    // Assert
    expect(totalPrice).toBe(150);
  });

  test("Should throw an error if you try to pay for an empty order", () => {
    // Arrange
    const order = new Order();

    // Act + Assert
    expect(() => order.pay()).toThrow("Cannot pay empty order");
  });

  test("Should throw an error if you try to cancel a paid order", () => {
    // Arrange
    const order = new Order();
    const product = new Product("Producto", 15);
    const orderItem = new OrderItem(product, 1);

    // Act
    order.addItem(orderItem);
    order.pay();

    // Assert
    expect(() => order.cancel()).toThrow("Cannot cancel a paid order");
  });
});
