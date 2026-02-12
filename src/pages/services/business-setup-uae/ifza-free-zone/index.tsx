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
        <title>IFZA Free Zone Company Formation | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>IFZA Free Zone Company Formation</h1>

                <p>
                  The International Free Zone Authority (IFZA) has relocated its
                  full operations to Dubai and now operates under Dubai Silicon
                  Oasis. This transition provides both new and existing
                  investors with the advantage of establishing a Dubai-based
                  free zone company, offering enhanced credibility, strategic
                  positioning, and access to Dubai’s dynamic business ecosystem.
                </p>
                <p>
                  IFZA Free Zone is known for its streamlined company setup
                  process, allowing entrepreneurs and businesses to establish
                  their presence in the UAE quickly and efficiently.
                </p>
                <p>
                  Elitezen Services is an Authorized Service Partner of the
                  International Free Zone Authority. As Dubai-based business
                  setup consultants with over 12 years of experience, we have
                  successfully assisted clients across various industries and
                  maintain strong partnerships with multiple UAE free zone
                  authorities. Our goal is to ensure a smooth, efficient, and
                  professional company formation experience for every client.
                </p>
                <h2>
                  Why Choose IFZA Free Zone for Company Formation in Dubai?
                </h2>
                <p>
                  Located in Dubai Silicon Oasis, IFZA Free Zone has become one
                  of the most attractive destinations for entrepreneurs and
                  investors. With its strategic location, modern infrastructure,
                  and flexible licensing options, IFZA provides an ideal
                  platform for businesses looking to establish and grow in
                  Dubai.
                </p>
                <p>Key advantages include:</p>
                <ul>
                  <li>Simple and efficient company formation process</li>
                  <li>Wide range of business activities and license types</li>
                  <li>Flexible and affordable license packages</li>
                  <li>
                    Strategic Dubai location with strong business networking
                    opportunities
                  </li>
                </ul>
                <p>
                  IFZA offers a highly supportive environment for startups,
                  SMEs, and international investors seeking a reliable and
                  cost-effective business setup solution.
                </p>
                <h2>Benefits of IFZA Free Zone</h2>
                <ul>
                  <li>100% foreign ownership</li>
                  <li>No personal income tax</li>
                  <li>100% repatriation of capital and profits</li>
                  <li>Business-friendly legal and regulatory framework</li>
                  <li>
                    Import and export tax advantages (subject to applicable
                    regulations)
                  </li>
                  <li>Flexible license upgrade or downgrade options</li>
                  <li>
                    Flexible visa allocation (subject to authority approval)
                  </li>
                  <li>
                    3-year residency visa eligibility for shareholders and
                    employees
                  </li>
                  <li>
                    Access to a rapidly growing international business community
                  </li>
                </ul>
                <h2>Frequently Asked Questions</h2>
                <h3>Why choose IFZA Free Zone over other free zones?</h3>
                <p>
                  With its relocation to Dubai Silicon Oasis, IFZA offers the
                  advantage of a Dubai-based license combined with competitive
                  pricing compared to many other Dubai free zones. This makes it
                  an attractive option for businesses seeking cost-effective
                  solutions without compromising on location.
                </p>
                <h3>How long does it take to register a company?</h3>
                <p>
                  Typically, IFZA can issue a trade license within 2–3 working
                  days. Processing time may vary depending on investor security
                  approvals or specific requirements.
                </p>
                <h3>Where is IFZA Free Zone located?</h3>
                <p>
                  IFZA Free Zone is now based in Dubai Silicon Oasis, placing it
                  within Dubai’s innovative technology and business district.
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
