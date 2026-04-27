export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {
    if (!name) throw new Error("Product must have a name");
    if (price <= 0) throw new Error("Invalid price");
  }
}
