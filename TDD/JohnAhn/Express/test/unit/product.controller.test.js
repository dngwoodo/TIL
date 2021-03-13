import Product from "../../models/Product";
import { createProduct } from "../../routers/product/product.controller";
import httpMocks from "node-mocks-http"; // req, res를 사용할 수 있음.
import newProduct from "../data/new-product.json";

Product.create = jest.fn();
describe("Product Controller Create", () => {
  it("should have a createProduct funtcion", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;
    req.body = newProduct;
    createProduct(req, res, next);
    expect(Product.create).toBeCalledWith(newProduct);
  });
});
