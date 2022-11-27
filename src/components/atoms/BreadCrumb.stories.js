import React from "react";

import BreadCrumb from "./BreadCrumb";

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};

const items = [{ label: "Home", link: "/" }, { label: "About" }];

export const usage = () => <BreadCrumb items={items} />;
