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
        <title>Meydan Free Zone | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Meydan Free Zone</h1>
                <h2>Your Launchpad for Business Success in Dubai</h2>
                <p>
                  Established in 2009, Meydan Free Zone is designed to support
                  entrepreneurs, startups, and growing businesses by offering a
                  modern business ecosystem, world-class infrastructure, and
                  simplified company formation processes. With a strong focus on
                  innovation and efficiency, Meydan Free Zone provides the ideal
                  environment for businesses looking to establish and expand in
                  Dubai.
                </p>
                <h2>Why Choose Meydan Free Zone – Dubai</h2>
                <p>
                  Strategically located in the heart of Dubai, Meydan Free Zone
                  has become a preferred destination for companies seeking a
                  dynamic and efficient setup experience. Dubai’s global
                  reputation as a leading business hub makes it an ideal
                  location for entrepreneurs and investors.
                </p>
                <p>Key advantages include:</p>
                <ul>
                  <li>Access to world-class infrastructure</li>
                  <li>
                    Excellent connectivity through international airports and
                    seaports
                  </li>
                  <li>A business-friendly regulatory environment</li>
                  <li>
                    A multicultural and open lifestyle that attracts global
                    talent
                  </li>
                </ul>
                <h2>Key Benefits of Meydan Free Zone</h2>
                <ul>
                  <li>Cost-effective business setup packages</li>
                  <li>100% foreign ownership</li>
                  <li>Attractive tax environment</li>
                  <li>
                    Ability to hire international talent from various
                    nationalities
                  </li>
                  <li>High-speed digital infrastructure and connectivity</li>
                </ul>
                <h2>Why Meydan Free Zone Stands Out</h2>
                <h3>Thriving Business Community</h3>
                <p>
                  Located within the prestigious Meydan Hotel, the free zone
                  offers a premium business environment with views of the iconic
                  Meydan Racecourse — home to the Dubai World Cup — and
                  proximity to The Track, Meydan Golf, creating an inspiring and
                  professional setting.
                </p>
                <h3>Startup-Friendly Environment</h3>
                <p>
                  Meydan Free Zone offers a wide range of business activities,
                  making it suitable for startups and established companies
                  alike. Businesses operate under Limited Liability Company
                  (LLC) structures, providing flexibility and scalability.
                </p>
                <h3>Prime Location</h3>
                <p>Meydan Free Zone is strategically positioned:</p>
                <ul>
                  <li>
                    Approximately 15 minutes from Dubai International Airport
                  </li>
                  <li>Close to Downtown Dubai and Burj Khalifa</li>
                  <li>
                    Easily accessible from major business and residential areas
                  </li>
                </ul>
                <h3>Dubai Residence Visa Benefits</h3>
                <p>
                  Setting up a company in Meydan Free Zone may provide
                  eligibility for a Dubai residence visa (depending on your
                  license and visa package). This offers multiple advantages for
                  entrepreneurs planning to live and operate in Dubai.
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
