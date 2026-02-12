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
        <title>Hamriyah Free Zone Company Formation | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Hamriyah Free Zone Company Formation</h1>
                <p>
                  In today’s fast-paced business environment, speed and
                  efficiency are essential. Hamriyah Free Zone offers a
                  streamlined company formation process, with trade licenses
                  issued quickly — sometimes within as little as 60 minutes —
                  allowing entrepreneurs and investors to start operations
                  without unnecessary delays.
                </p>
                <p>
                  Strategically located at the crossroads of Asia, Europe, and
                  Africa, Hamriyah Free Zone provides access to a growing market
                  of over 1.5 billion people, making it an ideal hub for
                  international trade, manufacturing, and logistics.
                </p>

                <h2>Hamriyah Free Zone Authority</h2>
                <p>
                  Located in Sharjah, the third-largest emirate in the UAE,
                  Hamriyah Free Zone benefits from a strong industrial ecosystem
                  and a well-established infrastructure. Sharjah, recognized by
                  UNESCO as the Cultural Capital of the Arab World, combines a
                  rich heritage with a modern business environment, supported by
                  numerous educational institutions and vibrant communities.
                </p>

                <h2>Benefits of Hamriyah Free Zone Company Formation</h2>
                <ul>
                  <li>Cost-effective startup packages</li>
                  <li>Extensive land and warehouse space availability</li>
                  <li>
                    Ideal environment for manufacturing and packaging industries
                  </li>
                  <li>Established petrochemical industry hub</li>
                  <li>Easy business setup and operational processes</li>
                  <li>Flexible visa packages tailored to business needs</li>
                </ul>
                <h2>
                  Suitable Industries for Business Setup in Hamriyah Free Zone
                </h2>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Textile Industry</h3>
                    <p>
                      Strategically positioned for international trade between
                      Asia, Europe, and Africa, the free zone supports textile
                      manufacturing and trading with strong logistics advantages
                      and investor-friendly policies.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Building Materials</h3>
                    <p>
                      Ideal for manufacturing and trading construction materials
                      due to available land, warehouse facilities, and easy
                      access to major highways such as Sheikh Mohammed Bin Zayed
                      Road (E311) and Emirates Road (E611).
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Food Industry</h3>
                    <p>
                      Growing global demand and supportive regulations make
                      Hamriyah Free Zone a strong platform for food production
                      and distribution, with dedicated areas for food-related
                      operations.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Heavy Industry</h3>
                    <p>
                      With approximately 26 million square meters of industrial
                      land, the free zone is suitable for large-scale industrial
                      operations and heavy manufacturing.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Logistics and Transportation</h3>
                    <p>
                      Excellent connectivity by sea, air, and land makes
                      Hamriyah Free Zone an efficient logistics hub for
                      international trade and distribution.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Oil and Gas</h3>
                    <p>
                      The UAE’s strong position in global energy markets
                      supports refinery, petrochemical, and downstream projects
                      within Hamriyah Free Zone.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Packaging Industry</h3>
                    <p>
                      The growing demand for safe and innovative packaging
                      solutions makes this sector ideal for businesses seeking
                      cost-effective operations and strategic location
                      advantages.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Perfume and Cosmetics</h3>
                    <p>
                      With high consumer spending on beauty products in the UAE,
                      the region offers strong market opportunities for cosmetic
                      and fragrance businesses.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Petrochemical Industry</h3>
                    <p>
                      One of the UAE’s leading manufacturing sectors, supported
                      by infrastructure designed for large-scale production and
                      export.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Recycling Industry</h3>
                    <p>
                      Hamriyah Free Zone promotes environmentally sustainable
                      business models, providing opportunities for recycling and
                      green technology companies.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>SMEs and Startups</h3>
                    <p>
                      Affordable packages and streamlined procedures make it
                      ideal for small and medium enterprises looking to
                      establish or expand operations.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Steel Industry</h3>
                    <p>
                      A well-established steel fabrication ecosystem combined
                      with strong logistics connectivity supports industry
                      growth.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Timber Industry</h3>
                    <p>
                      Integrated storage and manufacturing facilities provide
                      competitive advantages for timber-related businesses.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Marine Industry</h3>
                    <p>
                      Direct access to Hamriyah Port supports shipbuilding,
                      maintenance, offshore fabrication, and marine services.
                    </p>
                  </div>
                </div>
                <h2>How We Support Your Business Setup</h2>
                <p>
                  At Elitezen Services, we provide comprehensive business setup
                  consultancy and document clearing services to ensure a smooth
                  and hassle-free experience. Our team offers:
                </p>
                <ul>
                  <li>
                    Detailed consultation on all UAE company formation options
                  </li>
                  <li>
                    Cost analysis and comparison across different jurisdictions
                  </li>
                  <li>
                    End-to-end support throughout the registration process
                  </li>
                </ul>
                <p>
                  We aim to deliver professional guidance in a friendly and
                  transparent manner — without unnecessary sales pressure —
                  helping you choose the best setup solution for your business
                  goals.
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
