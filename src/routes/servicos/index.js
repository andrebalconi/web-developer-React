import React from "react";
import { useParams } from "react-router-dom";

import ProductDetailPage from "components/pages/ProductDetail";
import Error from "components/pages/Error";
import NotFoundImage from "draws/About";

import { useScrolltoTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetail = () => {
  useScrolltoTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        image={<NotFoundImage />}
        title="Servico nao encontrado"
        description="Servico nao encontrado ou nao disponivel"
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
