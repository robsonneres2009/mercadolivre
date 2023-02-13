import BreadCrump from "@/components/atoms/breadcrump";
import { ContextAPI } from "@/components/hooks/context";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import Header from "@/components/molecules/header";
import Info from "@/components/organisms/info";

import styles from "./styles.module.scss";
import { Loading } from "@/components/atoms/loading";

export default function Details() {
  const [info, setInfo] = useState({});
  const { getDetailsProduct, loading, categories } = useContext(ContextAPI);
  const router = useRouter();

  useEffect(() => {
    if (router.query?.id) {
      getDetailsProduct(router.query.id).then((response) => {
        setInfo(response);
      });
    }
  }, [router.query.id]);

  return (
    <div className={styles.container} data-testid="details">
      <Header />
      <BreadCrump string={categories} />
      {loading ? <Loading /> : <Info info={info} />}
    </div>
  );
}
