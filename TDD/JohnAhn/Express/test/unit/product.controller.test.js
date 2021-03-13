import Product from "../../models/Product";
import { createProduct } from "../../routers/product/product.controller";

Product.create = jest.fn();
describe("Product Controller Create", () => {
  it("should have a createProduct funtcion", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    createProduct();
    expect(Product.create).toBeCalled();
  });
});
