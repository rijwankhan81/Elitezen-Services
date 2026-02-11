import { Container } from "react-bootstrap";
import styles from "./stats.module.scss";
import { stats } from "@/constants/stats";

export default function Stats() {
  return (
    <>
      <section className={styles.stats}>
        <Container>
          <div className={styles.row}>
            {stats.map((item) => {
              return (
                <div key={item.id} className={styles.col}>
                  <div className={styles.wrapper}>
                    <div className={styles.icon}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
