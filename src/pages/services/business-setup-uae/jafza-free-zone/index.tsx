import Head from "next/head";
import styles from "../../services.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import Servicesnav from "@/components/services";
import Appointment from "@/components/appointment";

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Company Formation in Jebel Ali Free Zone (JAFZA) | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Company Formation in Jebel Ali Free Zone (JAFZA)</h1>
                <p>
                  Jebel Ali Free Zone, commonly known as JAFZA, is one of the
                  oldest and most prestigious free zones in the UAE, established
                  in 1985 under the visionary leadership of His Highness Sheikh
                  Rashid Bin Saeed Al Maktoum. Designed to support international
                  trade and industrial growth, JAFZA provides investors with
                  access to a world-class business environment and long-term
                  opportunities for sustainable growth.
                </p>
                <p>
                  Today, JAFZA hosts thousands of companies from around the
                  world and plays a significant role in Dubai’s economic
                  development. The free zone contributes substantially to the
                  UAE’s foreign direct investment (FDI) and has helped generate
                  over 144,000 jobs, making it a vital pillar of the country’s
                  business ecosystem.
                </p>

                <h2>Strategic Location & Logistics Advantage</h2>
                <p>
                  JAFZA is widely recognized as the logistics corridor of the
                  UAE. Its strategic location connects major global trade routes
                  and provides seamless access to:
                </p>

                <ul>
                  <li>
                    Jebel Ali Port — one of the busiest ports in the world
                  </li>
                  <li>Al Maktoum International Airport</li>
                  <li>Major regional and international markets</li>
                </ul>

                <p>
                  Infrastructure developments, including the upcoming JAFZA
                  bridge connecting JAFZA North and South, are designed to
                  enhance traffic flow and logistics efficiency between the
                  port, free zone, and airport, further strengthening its appeal
                  for global businesses.
                </p>
              </div>

              <Servicesnav />
            </div>
          </Container>
        </div>
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
