import { useRouter } from "next/router";

import Product from "@/components/molecules/product";
import styles from "./styles.module.scss";

export default function Products({ products }) {
  const router = useRouter();

  const handlerClick = (id) => {
    router.push(`/items/${id}`);
  };

  return (
    <div className={styles.container} data-testid="products">
      <div className={styles.content}>
        {products.slice(0, 4)?.map((item) => {
          return <Product key={item.id} onClick={handlerClick} item={item} />;
        })}
      </div>
    </div>
  );
}
