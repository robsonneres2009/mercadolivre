import Header from "@/components/molecules/header";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container} data-testid="home">
      <Header />
    </div>
  );
}
