import Head from "next/head";
import styles from "../services.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import Servicesnav from "@/components/services";
import Appointment from "@/components/appointment";

export default function Services() {
  return (
    <>
      <Head>
        <title>Business Setup in UAE | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Business Setup in UAE</h1>
                <p>
                  Starting a successful business in the UAE begins with choosing
                  the right location and structure for your company. The United
                  Arab Emirates is widely recognized as one of the best
                  destinations for entrepreneurs and investors, offering a
                  strong and sustainable economy supported by key industries
                  such as petroleum, tourism, trading, logistics, import, and
                  export.
                </p>
                <p>
                  Business activities in the UAE are regulated by both the
                  Federal Government and individual Emirates. Understanding the
                  legal framework, business environment, and specific
                  requirements of each emirate is essential for making informed
                  decisions. Every emirate offers unique advantages and
                  opportunities, along with certain considerations that
                  entrepreneurs should evaluate carefully.
                </p>
                <p>
                  As experienced business setup consultants, we guide you
                  through every step of the process. We provide detailed
                  information about different emirates, including licensing
                  options, pricing, requirements, and procedures. Our goal is to
                  help you select the ideal location and structure that aligns
                  with your business vision and long-term goals.
                </p>

                <h2>Business Setup in Dubai Mainland</h2>
                <p>
                  Setting up a business in Dubai has become faster and more
                  efficient than ever. In many cases, a new company can be
                  established within a short timeframe. Whether you already have
                  a business idea or need professional guidance, we assist you
                  with seamless company formation in Dubai.
                </p>
                <p>There are several company formation options available:</p>
                <ul>
                  <li>Mainland Company Formation</li>
                  <li>Free Zone Company Formation</li>
                  <li>Offshore Company Formation</li>
                </ul>
                <p>
                  Each structure provides different benefits depending on your
                  business activities, ownership preferences, and operational
                  requirements.
                </p>
                <h2>Company Formation in Free Zones</h2>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Sharjah Media City Free Zone</h3>
                    <p>
                      We support entrepreneurs in establishing companies in
                      Sharjah’s leading free zones, including Sharjah Media City
                      (Shams) and Hamriyah Free Zone. Each free zone is designed
                      to serve specific industries and offers specialized
                      advantages, making it easier to select the right
                      environment for your business.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Ajman Free Zone</h3>
                    <p>
                      Setting up a company in Ajman Free Zone or Ajman Media
                      City Free Zone provides flexible and cost-effective
                      options for entrepreneurs. Ajman Free Zone features its
                      own port and is ideal for manufacturing, trading, import,
                      and export businesses. Ajman Media City Free Zone focuses
                      on media, professional, and trading activities with
                      simplified licensing solutions.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Ajman Media City Free Zone</h3>
                    <p>
                      Ajman Media City Free Zone offers streamlined company
                      formation packages tailored to different business needs.
                      Entrepreneurs can choose licensing packages that match
                      their operational goals, ensuring flexibility and
                      efficiency.
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
