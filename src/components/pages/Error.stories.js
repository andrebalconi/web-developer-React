import React from "react";

import Error from "./Error";
import TakenImage from "draws/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    image={<TakenImage />}
    title="Pagina nao encontrada"
    description="Ops! Essa pagina foi abduzida"
  />
);
