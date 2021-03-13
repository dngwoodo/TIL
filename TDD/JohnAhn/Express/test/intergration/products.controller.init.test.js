import request from "supertest";
import app from "../../server";
import newProduct from "../data/new-product.json";

it("POST /api/product", async () => {
  const response = await request(app).post("/api/product").send(newProduct);
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe(newProduct.name);
  expect(response.body.description).toBe(newProduct.description);
  expect(response.body.price).toBe(newProduct.price);
});

it("should return 500 on POST /api/product", async () => {
  const response = await request(app)
    .post("/api/product")
    .send({ name: "phone" });

  expect(response.statusCode).toBe(500);

  // console.log("response.body", response.body); // 오류 메시지를 다 알순 없으므로 이렇게 뽑아서 확인하고 넣어준다.
  expect(response.body).toStrictEqual({
    message:
      "Product validation failed: description: Path `description` is required.",
  });
});
