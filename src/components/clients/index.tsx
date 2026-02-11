import { Container } from "react-bootstrap";
import styles from "./clients.module.scss";
import NextImage from "@/hooks/NextImage";
import { clients } from "@/constants/clients";
import { FaHandshake } from "react-icons/fa";

export default function Clients() {
  return (
    <>
      <section className={styles.clients}>
        <Container>
          <div className={styles.head}>
            <p className={styles.title}>
              <FaHandshake />
              Our Clients
            </p>
            <h2>Trusted by Leading Companies</h2>
            <p className={styles.desc}>
              Join thousands of businesses who chose us for their setup and
              compliance needs
            </p>
          </div>
          <div className={styles.row}>
            {clients.map((item) => {
              return (
                <div key={item.id} className={styles.col}>
                  <div className={styles.wrapper}>
                    <div className={styles.image}>
                      <NextImage src={item.image} alt={item.title} />
                    </div>
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
