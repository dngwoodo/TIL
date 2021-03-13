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

  it("should return 201 response code", () => {
    createProduct(req, res, next);
    expect(res.statusCode).toBe(201); // status 코드가 아무것도 지정해주지 않으면 200번임. 그래서 product.controller.js에 res.status(201)을 따로 해준다.
    expect(res._isEndCalled()).toBeTruthy(); // send가 있는지 확인
  });

  it("should return json body in response", () => {
    Product.create.mockReturnValue(newProduct); // 리턴 값 지정
    createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });
});
