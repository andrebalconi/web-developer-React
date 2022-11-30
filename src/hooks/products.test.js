import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slang = ".NET-7";

    const product = useProduct({ slang });

    expect(product.title).toEqual(".NET 7");
  });

  test("returns undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
