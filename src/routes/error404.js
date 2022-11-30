import React from "react";

import Error from "components/pages/Error";
import TakenImage from "draws/Taken";

const error404 = () => (
  <Error
    image={<TakenImage />}
    title="Pagina nao encontrada"
    description="Ops! Essa pagina foi abduzida"
  />
);

export default error404;
