import { Container } from "react-bootstrap";
import styles from ".//getApp.module.scss";
import NextImage from "@/hooks/NextImage";

export default function Getapp() {
  return (
    <>
      <section className={styles.getApp}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h2>Join Millions Using PeddyPay Today!</h2>
              <p>
                Experience the future of digital payments. Fast, secure, and
                rewarding.
              </p>
            </div>
            <div className={styles.getStarted}>
              <a href="">Get Started Now</a>
            </div>
            <div className={styles.btns}>
              <a href="">
                <NextImage src={"/images/appleicon.svg"} alt={""} />
                <h6>
                  Download on the <span>App Store</span>
                </h6>
              </a>
              <a href="">
                <NextImage src={"/images/playicon.svg"} alt={""} />
                <h6>
                  GET IT ON <span>Google Play</span>
                </h6>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
