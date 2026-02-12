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
        <title>UAQ Free Zone Company Formation | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>UAQ Free Zone Company Formation</h1>
                <p>
                  Umm Al Quwain Free Trade Zone (UAQ FTZ) is located in the
                  Emirate of Umm Al Quwain — a progressive and business-friendly
                  region known for its modern infrastructure, peaceful
                  environment, and strategic proximity to major UAE cities.
                  Situated approximately 45 km from Dubai, UAQ FTZ provides an
                  ideal balance between affordability and accessibility, making
                  it an attractive destination for entrepreneurs and investors.
                </p>
                <p>
                  With its supportive regulatory framework and efficient company
                  formation processes, UAQ Free Trade Zone has become a
                  preferred choice for micro-businesses, startups, SMEs, and
                  large enterprises seeking a secure and flexible business
                  environment in the UAE.
                </p>

                <h2>About UAQ Free Trade Zone</h2>
                <p>
                  UAQ FTZ offers a wide range of business opportunities
                  supported by investor-friendly policies and streamlined
                  administrative procedures. The free zone is designed to
                  simplify company formation and licensing, allowing businesses
                  to start operations quickly and efficiently.
                </p>
                <p>
                  Generous investment incentives and a transparent regulatory
                  framework make UAQ FTZ particularly attractive for
                  international investors looking for cost-effective solutions
                  without compromising on operational flexibility.
                </p>

                <h2>Benefits of UAQ Free Trade Zone</h2>
                <ul>
                  <li>
                    Attractive tax environment (0% corporate and personal income
                    tax, subject to regulations)
                  </li>
                  <li>100% foreign ownership</li>
                  <li>Wide range of permitted business activities</li>
                  <li>Full repatriation of capital and profits</li>
                  <li>No currency restrictions</li>
                  <li>
                    Import and export duty advantages within the free zone
                    (subject to policies)
                  </li>
                  <li>Simple and fast registration process</li>
                  <li>Dedicated customer support and business assistance</li>
                </ul>
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
