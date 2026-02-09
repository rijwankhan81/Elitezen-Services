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
        <title>Mainland Company Formation in Dubai | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Mainland Company Formation in Dubai</h1>
                <p>
                  Mainland company formation in Dubai is one of the most popular
                  and rewarding options for investors and entrepreneurs looking
                  to establish a strong presence in the UAE. A Dubai mainland
                  company offers significant advantages compared to other
                  emirates, including access to a dynamic market, world-class
                  infrastructure, and a secure and business-friendly
                  environment.
                </p>
                <p>
                  Dubai is globally recognized as a hub for tourism, innovation,
                  luxury lifestyle, and international trade. If you are planning
                  to start a new business in the UAE, forming a mainland company
                  in Dubai provides flexibility, credibility, and unlimited
                  growth opportunities across local and international markets.
                </p>

                <h2>Company Registration Authority in Dubai Mainland</h2>
                <p>
                  The Department of Economy and Tourism (DET), formerly known as
                  the Department of Economic Development (DED), is the
                  government authority responsible for licensing and regulating
                  mainland businesses in Dubai.
                </p>
                <p>
                  DET plays a vital role in shaping Dubai’s economic landscape
                  by supporting innovation, improving the business environment,
                  and promoting sustainable growth. The organization develops
                  strategic economic policies, supports key industries, and
                  provides comprehensive services to both local and
                  international investors.
                </p>

                <h2>Agencies of Dubai Economy</h2>

                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Dubai SME</h3>
                    <p>
                      Dubai SME focuses on fostering entrepreneurship and
                      supporting small and medium enterprises (SMEs) within the
                      emirate. Its mission is to create a pro-business ecosystem
                      that encourages innovation, helps startups grow, and
                      strengthens Dubai’s position as a global hub for SMEs.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Dubai Industries & Exports</h3>
                    <p>
                      Dubai Industries & Exports promotes trade and industrial
                      development by supporting exporters and manufacturers. The
                      agency works to enhance Dubai’s global competitiveness by
                      creating a strong ecosystem that enables businesses to
                      expand into international markets.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Dubai FDI</h3>
                    <p>
                      The Dubai Investment Development Agency (Dubai FDI)
                      promotes foreign direct investment opportunities and
                      assists investors in establishing and expanding their
                      businesses in Dubai and across global markets.
                    </p>
                  </div>
                </div>
                <h2>License Types in Dubai Mainland</h2>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Commercial License</h3>
                    <p>
                      A commercial license allows businesses to trade, import,
                      and export goods across the UAE, as well as provide
                      certain services. Recent regulatory changes have removed
                      the requirement for a local sponsor in many business
                      activities.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Professional License</h3>
                    <p>
                      A professional license enables foreign investors to retain
                      100% ownership for service-based activities. In many
                      cases, the requirement for a local service agent has also
                      been simplified or removed depending on the activity.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Industrial License</h3>
                    <p>
                      An industrial license is required for manufacturing,
                      processing, or industrial activities within the UAE.
                    </p>
                  </div>
                </div>
                <h2>Procedure to Set Up a Mainland Company in Dubai</h2>
                <p>
                  Mainland companies are registered under the Department of
                  Economy and Tourism (DET). The general setup process includes:
                </p>
                <ul>
                  <li>
                    Prepare required documents:
                    <ol>
                      <li>
                        Passport copy and visit visa copy (for non-residents)
                      </li>
                      <li>Emirates ID copy (for UAE residents)</li>
                      <li>UAE PASS (for residents)</li>
                    </ol>
                  </li>
                  <li>Provide trade name options for company registration.</li>
                  <li>
                    Finalize business activities with professional consultation
                    if needed.
                  </li>
                  <li>
                    Submit the online application through a business setup
                    consultant.
                  </li>
                  <li>
                    Once the payment voucher is issued, complete the payment and
                    receive the trade license — often on the same day.
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
