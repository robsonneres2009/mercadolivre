import styles from "./styles.module.scss";

export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} data-testid="button">
      {title}
    </button>
  );
}
