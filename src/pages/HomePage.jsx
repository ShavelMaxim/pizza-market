import React from "react";
import Catalog from "../components/Catalog.jsx";
import Navigate from "../components/Navigate.jsx";
import Categories from "../components/Categories.jsx";
import Filters from "../components/Filters.jsx";
import Pagination from "../components/Pagination.jsx";

export default function HomePage() {
  return (
    <>
      <Navigate left={<Categories />} right={<Filters />} />
      <Catalog />
      <Pagination />
    </>
  );
}
