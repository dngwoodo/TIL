import Product from "../../models/Product";
import { createProduct } from "../../routers/product/product.controller";
import httpMocks from "node-mocks-http"; // req, res를 사용할 수 있음.
import newProduct from "../data/new-product.json";

Product.create = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("Product Controller Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });
  it("should have a createProduct funtcion", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", () => {
    createProduct(req, res, next);
    expect(Product.create).toBeCalledWith(newProduct);
  });
});
