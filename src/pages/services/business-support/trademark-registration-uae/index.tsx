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
        <title>Trademark Registration in the UAE | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Trademark Registration in the UAEe</h1>

                <p>
                  The Ministry of Economy is the official authority responsible
                  for registering and protecting intellectual property rights in
                  the UAE. Trademark registration provides businesses with legal
                  protection for their brand identity, ensuring exclusive
                  ownership and safeguarding against unauthorized use.
                </p>
                <p>
                  A trademark can include names, words, signatures, letters,
                  numbers, graphics, logos, symbols, designs, packaging, or any
                  distinctive mark used to differentiate goods or services from
                  others in the marketplace. It serves as a powerful tool to
                  establish brand recognition and maintain a competitive
                  advantage.
                </p>
                <h2>Why Trademark Registration is Important</h2>

                <div className={styles.row}>
                  <div className={styles.col}>
                    <h3>Legal Protection</h3>
                    <p>
                      Trademark registration grants you exclusive rights to use
                      your brand name, logo, or distinctive identity. It helps
                      prevent competitors from using similar marks that may
                      confuse customers or dilute your brand’s reputation.
                    </p>
                  </div>
                  <div className={styles.col}>
                    <h3>Builds Brand Value</h3>
                    <p>
                      A registered trademark becomes a valuable intangible asset
                      for your business. It enhances credibility, strengthens
                      brand recognition, and increases your company’s overall
                      value — especially when seeking investment, expansion
                      opportunities, or future business sale.
                    </p>
                  </div>
                </div>
                <h2>How We Can Help with Trademark Registration</h2>
                <p>
                  With over 15 years of experience in trademark registration
                  across the UAE, Elitezen Services provides professional
                  guidance throughout the entire process. We work extensively
                  with businesses in highly competitive sectors, particularly
                  consumer products, where brand protection is essential.
                </p>
                <p>
                  Our team assists you from initial consultation and trademark
                  search to application submission and follow-up, ensuring a
                  smooth and efficient registration process.
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
