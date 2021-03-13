import Product from "../../models/Product";
import "regenerator-runtime/runtime";

export const createProduct = async (req, res, next) => {
  const createdProduct = await Product.create(req.body); // 이 아이의 리턴값을 newProduct으로 테스팅에서 지정
  res.status(201).json(createdProduct); // 그래서 여기서 넣은 json값을 테스팅에서 res._getJSONData()로 뽑아볼 수 있음.
};

// 테스팅 순서
// 1. createProduct가 함수인지
// 2. db에 Product.create가 제대로 동작하는 지(데이터가 db에 생성되는지)
// 3. 응답이 코드가 제대로 작성되어져 있는지
// 4. json데이터를 제대로 보내는지
