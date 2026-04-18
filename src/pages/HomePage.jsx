import React from "react";
import Navigate from "../components/Navigate.jsx";
import Categories from "../components/Categories.jsx";
import Filters from "../components/Filters.jsx";
import Catalog from "../components/Catalog.jsx";

export default function HomePage() {
  return (
    <>
      <Navigate left={<Categories />} right={<Filters />} />
      <Catalog />
    </>
  );
}
