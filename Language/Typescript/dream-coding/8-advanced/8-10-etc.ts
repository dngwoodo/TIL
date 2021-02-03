type Product = 'cat' | 'dog';

// type Capitalize<S extends string> = intrinsic;
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'