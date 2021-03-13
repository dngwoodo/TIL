import Product from "../../models/Product";

export const createProduct = (req, res, next) => {
  Product.create(req.body);
  res.status(201).send();
};
