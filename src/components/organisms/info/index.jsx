import Image from "next/image";

import styles from "./styles.module.scss";
import Button from "@/components/atoms/button";

export default function Info({ info }) {
  return (
    <div className={styles.container} data-testid="info">
      <div className={styles.content}>
        <section>
          {info?.item?.picture && (
            <Image
              src={info?.item?.picture}
              alt="Produto"
              className={styles.picture}
              width={100}
              height={100}
            />
          )}
        </section>
        <section>
          <h5 className={styles.subtitle}>
            {info?.item?.condition} - {info?.item?.sold_quantity} sold
          </h5>
          <h1 className={styles.title}>{info?.item?.title}</h1>
          <h2 className={styles.price}>$ {info?.item?.price?.amount}</h2>
          <Button title="Comprar" />
        </section>
        <section className={styles.containerDescription}>
          <h1 className={styles.price}>Description del producto</h1>
          <p className={styles.description}>{info?.item?.description}</p>
        </section>
      </div>
    </div>
  );
}
