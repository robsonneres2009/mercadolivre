import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import BreadCrump from "@/components/atoms/breadcrump";
import Header from "@/components/molecules/header";
import Products from "@/components/organisms/products";
import { ContextAPI } from "@/components/hooks/context";

import styles from "./styles.module.scss";
import { Loading } from "@/components/atoms/loading";

export default function Found() {
  const {
    products,
    query,
    setProducts,
    getProducts,
    loading,
    categories,
    setCategories,
  } = useContext(ContextAPI);

  useEffect(() => {
    if (query !== "") {
      setProducts([]);
      setCategories([]);
      getProducts(query).then((response) => {
        setProducts(response.items);
        setCategories(response.categories);
      });
    }
  }, [query]);

  return (
    <div className={styles.container} data-testid="found">
      <Header />
      <BreadCrump string={categories} />
      {loading ? <Loading /> : <Products products={products} />}
    </div>
  );
}
