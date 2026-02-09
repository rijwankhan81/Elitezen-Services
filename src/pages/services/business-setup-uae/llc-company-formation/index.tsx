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
        <title>LLC Company Formation in Dubai | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>LLC Company Formation in Dubai</h1>
                <p>
                  Setting up a business in Dubai has never been easier. The
                  Department of Economy and Tourism (DET) serves as the official
                  licensing and registration authority, ensuring that company
                  formation processes are streamlined, efficient, and
                  cost-effective for entrepreneurs and investors.
                </p>
                <p>
                  The DET license is one of the most flexible and popular
                  options for starting a business in Dubai. Forming an LLC
                  (Limited Liability Company) provides entrepreneurs with the
                  opportunity to operate locally and internationally, offering a
                  strong foundation for business growth and global expansion.
                </p>

                <h2>What is an LLC Company?</h2>
                <p>
                  LLC stands for Limited Liability Company — a widely preferred
                  legal structure for businesses in Dubai. An LLC is considered
                  a separate legal entity from its owners, meaning that
                  shareholders’ liability is limited to the capital they invest
                  in the company.
                </p>
                <p>
                  LLC companies are regulated by the Department of Economy and
                  Tourism (DET). Typically, an LLC requires a minimum of two
                  shareholders and can have up to 50 shareholders, depending on
                  the business activity and regulatory requirements.
                </p>

                <h2>100% Foreign Ownership in Dubai Mainland LLC</h2>
                <p>
                  Under the updated UAE company law implemented on 1 June 2021,
                  foreign investors can now own up to 100% of certain mainland
                  companies without requiring a local sponsor or UAE national
                  partner for many business activities.
                </p>
                <p>
                  This reform has made Dubai an even more attractive destination
                  for international investors, offering greater ownership
                  flexibility and control over business operations.
                </p>
                <h2>How to Set Up an LLC Company in Dubai Mainland</h2>
                <p>
                  The process of establishing an LLC company in Dubai mainland
                  involves several important steps:
                </p>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Trade Name Registration</h3>
                    <p>
                      Reserve and register your company name with the Department
                      of Economy and Tourism (DET).
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Select Business Activities</h3>
                    <p>
                      Choose activities that align with your business objectives
                      and licensing requirements.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Prepare Memorandum of Association (MOA)</h3>
                    <p>Draft and submit the MOA for official approval.</p>
                  </div>
                  <div className={styles.col}>
                    <h3>Obtain Additional Approvals</h3>
                    <p>
                      Secure NOCs or approvals from relevant authorities if
                      required (e.g., Dubai Municipality, RTA, Civil Defense).
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Office Requirement</h3>
                    <p>
                      Choose between an Instant License (which may not require
                      office space during the first year) or leasing an
                      office/shop for a physical business address.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Final Payment & License Issuance</h3>
                    <p>
                      Complete the DET payment process and receive your trade
                      license.
                    </p>
                  </div>
                </div>
                <h2>Advantages of a Limited Liability Company</h2>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Limited Liability Protection</h3>
                    <p>
                      As the name suggests, shareholders’ liability is limited
                      to their investment in the company. Personal assets such
                      as bank accounts or property are generally protected in
                      case of business liabilities. However, this protection
                      does not cover criminal activities or violations of legal
                      regulations, so proper compliance and legal consultation
                      are always recommended.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Tax Benefits</h3>
                    <p>
                      The UAE offers a favorable tax environment. There is
                      currently no personal income tax for individuals. However,
                      corporate tax and VAT regulations apply depending on
                      business activity and applicable laws.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Flexible Ownership Structure</h3>
                    <p>
                      Unlike some business structures, LLC companies allow
                      flexible ownership arrangements. An LLC can have multiple
                      shareholders, and ownership percentages can be structured
                      based on agreements between partners.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Profit Allocation Flexibility</h3>
                    <p>
                      Profit and loss distribution in an LLC can be defined
                      through the operating agreement or MOA. This allows
                      investors and partners to structure financial arrangements
                      according to business strategy rather than strictly
                      according to capital contribution.
                    </p>
                  </div>
                </div>
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
