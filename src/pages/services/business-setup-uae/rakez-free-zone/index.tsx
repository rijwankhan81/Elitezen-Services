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
        <title>Company Setup in RAKEZ Free Zone | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Company Setup in RAKEZ Free Zone</h1>
                <p>
                  Are you planning to start a new business in the UAE and
                  looking for an affordable and flexible license package? Ras Al
                  Khaimah Economic Zone (RAKEZ) offers a cost-effective and
                  efficient solution for entrepreneurs, startups, freelancers,
                  and established businesses seeking to expand in the UAE.
                </p>
                <p>
                  RAKEZ combines world-class infrastructure with
                  investor-friendly policies, making it an ideal destination for
                  company formation. Whether you require a standard license
                  package or a customized business setup solution, our team is
                  ready to guide you through every step of the process.
                </p>

                <h2>About RAKEZ Free Zone</h2>
                <p>
                  Ras Al Khaimah Economic Zone (RAKEZ), located in the Emirate
                  of Ras Al Khaimah, is one of the UAE’s leading business and
                  industrial hubs. It supports a wide range of industries
                  through flexible licensing options, including professional
                  services, commercial activities, industrial operations,
                  freelance businesses, and startup ventures.
                </p>
                <p>
                  RAKEZ is dedicated to empowering businesses by providing
                  affordable packages, streamlined processes, and a supportive
                  environment that encourages growth and innovation.
                </p>
                <p>
                  As experienced business setup consultants, we assist clients
                  with company formation across all UAE jurisdictions —
                  including mainland and free zone structures.
                </p>
                <h2>Advantages of Company Formation in RAKEZ</h2>
                <ul>
                  <li>
                    Wide range of license packages tailored to different
                    business needs
                  </li>
                  <li>100% foreign ownership allowed</li>
                  <li>Fast and efficient company formation process</li>
                  <li>Broad selection of permitted business activities</li>
                  <li>
                    Single-window service facility for streamlined procedures
                  </li>
                  <li>
                    Online portal for company and visa-related services (minimal
                    physical visits required)
                  </li>
                  <li>
                    Strategic location with strong connectivity to major UAE
                    cities
                  </li>
                </ul>
                <h2>
                  RAKEZ Free Zone – All-Inclusive Business Setup Package (AED
                  12,010)
                </h2>
                <p>
                  RAKEZ offers a competitive all-inclusive business setup
                  package designed to help entrepreneurs launch quickly and
                  efficiently.
                </p>
                <h3>Package Includes:</h3>
                <ul>
                  <li>
                    Business License and official documents (MOA, Certificate of
                    Incorporation, etc.)
                  </li>
                  <li>
                    1 Investor Visa allowing you to live and work in the UAE
                  </li>
                  <li>Immigration Card for visa processing</li>
                  <li>
                    Co-working (flexi-desk) rental agreement providing a
                    professional workspace
                  </li>
                  <li>
                    Transparent pricing with no hidden costs (includes
                    licensing, visa, and establishment card fees)
                  </li>
                  <li>
                    License renewal option after the first year for continued
                    operations
                  </li>
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
