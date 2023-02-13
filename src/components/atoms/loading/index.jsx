import styles from "./styles.module.scss";

export const Loading = () => (
  <div className={styles.overlay} data-testid="loading">
    <div className={styles.loading} />
  </div>
);
