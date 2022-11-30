//import faker from "faker";

import CarPlaceholder from "stories/assets/card-placeholder.jpg";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      image: CarPlaceholder,
      title: "Ergonomic Steel Car",
      //title: faker.commerce.productName(),
      //summary: faker.commerce.productDescription(),
      //slang: faker.lorem.slug(),
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
