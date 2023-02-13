import Image from "next/image";
import styles from "./styles.module.scss";

export default function Product({ onClick, item }) {
  return (
    <div
      className={styles.container}
      onClick={() => onClick(item.id)}
      key={item.id}
      data-testid="product"
    >
      <section className={styles.containerPicture}>
        {item?.thumbnail && (
          <Image
            src={item?.thumbnail}
            alt="Produto"
            width={150}
            height={150}
            className={styles.picture}
          />
        )}
      </section>
      <section className={styles.containerText}>
        <h2 className={styles.price}>{item?.price}</h2>
        <h4 className={styles.title}>{item?.title}</h4>
      </section>
      <section className={styles.containerRegion}>
        <p className={styles.region}>{item?.address?.state_name}</p>
      </section>
    </div>
  );
}
