import { useRouter } from "next/router";

import SearchBar from "@/components/atoms/searchbar";
import Logo from "@/components/atoms/logo";

import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "@/components/hooks/context";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { query, setQuery } = useContext(ContextAPI);

  useEffect(() => {
    setQuery(query);
  }, [query, setQuery]);

  useEffect(() => {
    if (router?.query?.search) {
      setSearch(router.query.search);
      setQuery(router.query.search);
    } else {
      setQuery("");
    }
  }, [router]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    router.push(`/items?search=${search}`);
  };

  return (
    <nav className={styles.header}>
      <section>
        <Logo />
      </section>
      <section>
        <SearchBar
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={setSearch}
          submit={handlerSubmit}
        />
      </section>
    </nav>
  );
}
