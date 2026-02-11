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
          Ajman Media City Free Zone Company Formation | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Ajman Media City Free Zone Company Formation</h1>

                <p>
                  Ajman Media City Free Zone (AMCFZ) is one of the newest and
                  fastest-growing business hubs in the UAE, offering flexible
                  and cost-effective company formation solutions. Located in
                  Ajman — a rapidly developing emirate known for its strong
                  industrial and commercial growth — AMCFZ provides
                  entrepreneurs and investors with an ideal platform to
                  establish and expand their businesses.
                </p>
                <p>
                  Designed to support startups, freelancers, and international
                  companies, Ajman Media City Free Zone offers a simplified
                  setup process and a business-friendly environment that enables
                  companies to operate efficiently within the UAE and beyond.
                </p>

                <h2>Advantages of Ajman Media City Free Zone</h2>

                <ul>
                  <li>
                    Business setup packages starting from approximately AED
                    8,500
                  </li>
                  <li>Affordable visa packages</li>
                  <li>100% foreign ownership</li>
                  <li>Full repatriation of capital and profits</li>
                  <li>
                    Attractive tax environment (no personal or corporate income
                    tax, subject to regulations)
                  </li>
                  <li>
                    Multiple business activities allowed under a single license
                  </li>
                  <li>Fast online registration process</li>
                  <li>
                    Trade license issuance often within 24 hours (subject to
                    approval)
                  </li>
                  <li>Simplified visa processing services</li>
                  <li>
                    Eligibility to open a UAE corporate bank account after
                    license issuance
                  </li>
                </ul>
                <h2>Types of Companies in Ajman Media City Free Zone</h2>

                <ul>
                  <li>
                    <b>Free Zone Establishment (FZE):</b> Single-owner company
                  </li>
                  <li>
                    <b>Free Zone Company (FZC):</b> Multiple shareholders
                  </li>
                  <li>Branch of a Foreign Company (BFC)</li>
                  <li>Subsidiary of a Foreign Company</li>
                  <li>Branch of a Local Company (BLC)</li>
                </ul>
                <h2>Required Documents for Company Registration</h2>
                <h3>Standard Requirements</h3>
                <ul>
                  <li>Completed application form</li>
                  <li>Passport copy of proposed owner(s)</li>
                  <li>
                    Two passport-size color photographs (white background)
                  </li>
                  <li>Three proposed company name options</li>
                  <li>Declaration of company capital (maximum AED 100,000)</li>
                </ul>
                <h2>
                  Additional Documents for Branch or Subsidiary of Foreign
                  Company
                </h2>

                <ul>
                  <li>Certificate of Incorporation of the parent company</li>
                  <li>
                    Memorandum & Articles of Association of the parent company
                  </li>
                  <li>
                    Board Resolution approving branch or subsidiary formation
                    and appointing an authorized manager
                  </li>
                  <li>
                    Passport copy (minimum six months validity) of the company
                    representative or manager
                  </li>
                </ul>
                <p>
                  <b>Note:</b> Certain corporate documents must be attested by
                  the UAE Embassy in the country of origin and subsequently by
                  the UAE Ministry of Foreign Affairs.
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
