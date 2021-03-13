import Product from "../../models/Product";
import { createProduct } from "../../routers/product/product.controller";
import httpMocks from "node-mocks-http"; // req, res를 사용할 수 있음.
import newProduct from "../data/new-product.json";

Product.create = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("Product Controller Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });
  it("should have a createProduct funtcion", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", async () => {
    await createProduct(req, res, next);
    expect(Product.create).toBeCalledWith(newProduct);
  });

  it("should return 201 response code", async () => {
    await createProduct(req, res, next);
    expect(res.statusCode).toBe(201); // status 코드가 아무것도 지정해주지 않으면 200번임. 그래서 product.controller.js에 res.status(201)을 따로 해준다.
    expect(res._isEndCalled()).toBeTruthy(); // send가 있는지 확인
  });

  it("should return json body in response", async () => {
    Product.create.mockReturnValue(newProduct); // 리턴 값 지정
    await createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "description property missing" }; // 몽고 디비에서 보내주는 에러가 아니라 에러메시지를 임의로 만든다.
    const rejectedPromise = Promise.reject(errorMessage); // 비동기이기 때문에 반환값이 Promise이여야 하므로 이렇게 넣어준다.
    Product.create.mockReturnValue(rejectedPromise); // 리턴에 에러 값 넣기
    await createProduct(req, res, next);
    // express는 비동기요청이 실패하면 서버가 망가져버림. 동기는 알아서 처리해준다.
    // 그래서 next를 통해서 에러를 처리하는 미들웨어로 보내줘야 한다.
    expect(next).toBeCalledWith(errorMessage); // next가 errorMessage와 함께 호출되어졌는 지
  });
});
