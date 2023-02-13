import styles from "./styles.module.scss";

export default function BreadCrump({ string = [] }) {
  return (
    <div className={styles.container} data-testid="breadcrump">
      {string?.map((item, index) => (index == 0 ? item : " > " + item))}
    </div>
  );
}
