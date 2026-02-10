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
        <title>Business Support | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <h1>Business Support Services</h1>

                <p>
                  Every successful business needs a reliable professional
                  partner to manage legal processes, government procedures, and
                  administrative tasks efficiently. At Elitezen Services, we
                  provide comprehensive business support solutions for both
                  corporate clients and individuals, allowing you to focus on
                  growing your business while we handle the operational and
                  regulatory requirements.
                </p>
                <p>
                  Our goal is to simplify complex procedures through
                  professional guidance, transparent communication, and flexible
                  service solutions tailored to your needs.
                </p>

                <h2>Business Support Services in Dubai</h2>
                <h3>Our Services</h3>
                <p>
                  Elitezen Services offers a wide range of business support
                  solutions designed to help new and established companies
                  operate smoothly. We manage essential administrative and
                  government-related processes, enabling business owners to
                  concentrate on their core activities while we handle the
                  supporting tasks.
                </p>
                <p>
                  We believe in building long-term partnerships through reliable
                  service, efficiency, and a client-focused approach.
                </p>
                <h3>Our Business Support Services Include:</h3>
                <ul>
                  <li>Document Attestation Services</li>
                  <li>Document Translation Services</li>
                  <li>PRO Services in Dubai</li>
                  <li>Family Visa Services</li>
                  <li>Employee Visa Services</li>
                  <li>Housemaid Visa Services</li>
                  <li>Investor Visa Services</li>
                  <li>License Amendment Services</li>
                  <li>Add or Remove Business Partners</li>
                  <li>Add or Remove Business Activities</li>
                  <li>Company Liquidation Services</li>
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
