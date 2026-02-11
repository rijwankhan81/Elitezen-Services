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
        <title>Ajman Free Zone Company Formation | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Ajman Free Zone Company Formation</h1>

                <p>
                  No matter what your business vision is, Ajman Free Zone
                  provides a simple and efficient pathway to start your company
                  in the UAE. Whether you are a trader, manufacturer, service
                  provider, retailer, freelancer, or a new entrepreneur with
                  innovative ideas, Ajman Free Zone offers flexible licensing
                  solutions designed to help your business grow.
                </p>
                <p>
                  Established in 1988, Ajman Free Zone (AFZ) has become one of
                  the UAE’s leading business hubs, known for its
                  investor-friendly environment, affordable packages, and
                  efficient setup procedures. Ajman is rapidly developing as an
                  industrial and manufacturing center, making it an attractive
                  destination for startups and growing businesses.
                </p>

                <h2>Advantages of Ajman Free Zone</h2>

                <ul>
                  <li>100% foreign ownership</li>
                  <li>Wide range of business activities and services</li>
                  <li>Cost-effective license packages</li>
                  <li>Easy repatriation of capital and profits</li>
                  <li>Attractive tax environment (no personal income tax)</li>
                  <li>Modern infrastructure and business facilities</li>
                  <li>
                    One-stop solution for company registration and visa services
                  </li>
                  <li>Fast and streamlined setup procedures</li>
                </ul>
                <h2>License Types in Ajman Free Zone</h2>
                <h3>Trading License</h3>
                <p>
                  Trading licenses can be customized based on the number of
                  activities:
                </p>

                <ul>
                  <li>Single Activity Trading License</li>
                  <li>Two Activity Trading License</li>
                  <li>Three Activity Trading License</li>
                  <li>
                    General Trading License (covers multiple activities except
                    restricted categories)
                  </li>
                </ul>
                <p>
                  Our business consultants can help you select the most suitable
                  license based on your business needs.
                </p>
                <h3>Service License</h3>
                <p>
                  A service license covers various professional and
                  service-based activities such as consultancy, management
                  services, advertising, salon services, and other professional
                  operations.
                </p>
                <h3>Required Documents</h3>
                <ul>
                  <li>Passport copy</li>
                  <li>Passport-size photo</li>
                  <li>Residential address, phone number, and email</li>
                  <li>Proposed company name</li>
                  <li>Selected business activities</li>
                </ul>
                <h2>Specialized Licenses in Ajman Free Zone</h2>
                <h3>Pioneers License</h3>
                <p>
                  Designed specifically for students and young entrepreneurs
                  aged between 20 and 30 years, the Pioneers License offers a
                  cost-effective startup solution for UAE residents looking to
                  launch their first business venture.
                </p>
                <h3>Freelancer License</h3>
                <p>
                  Ideal for individuals seeking to operate legally as
                  independent professionals. This license covers a wide range of
                  business activities and offers predictable renewal costs,
                  making it a flexible solution for freelancers working in the
                  UAE.
                </p>
                <h3>E-Commerce License</h3>
                <p>
                  The E-Commerce License supports businesses involved in online
                  trading activities, enabling both B2C and B2B operations.
                  Entrepreneurs can sell products online, use third-party
                  platforms, and benefit from additional services such as
                  cash-on-delivery solutions.
                </p>
                <p>Available activity categories include:</p>
                <ul>
                  <li>Industrial Equipment E-Trading</li>
                  <li>F&B E-Trading</li>
                  <li>Fashion Retail E-Trading</li>
                  <li>Home, Office & Personal Utilities E-Trading</li>
                  <li>Jewellery & Precious Stones E-Trading</li>
                  <li>Automotive E-Trading</li>
                  <li>Media & Entertainment E-Trading</li>
                  <li>Event Ticketing E-Trading</li>
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
