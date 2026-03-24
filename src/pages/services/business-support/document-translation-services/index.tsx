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
          Document Translation Services in Dubai | Elitezen Services
        </title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainWrap}>
          <Container>
            <div className={styles.page}>
              <div className={styles.pageContent}>
                <section>
                  <h1>Document Translation Services in Dubai</h1>

                  <p>
                    At Elitezen Services, we provide reliable and professional
                    document translation services in Dubai. Conveniently located
                    near Fish Roundabout, Deira, we work with certified legal
                    translators to deliver accurate, high-quality translations
                    at competitive prices.
                  </p>

                  <p>
                    Our flexible approach ensures that your requirements are
                    fully met, including revisions when needed. We specialize in
                    English to Arabic and Arabic to English translations, along
                    with certified legal translations approved by the Ministry
                    of Justice.
                  </p>
                </section>

                <section>
                  <h2>Professional Translation Services You Can Trust</h2>

                  <p>
                    We offer translation services for both corporate and
                    personal documents. Standard translations are typically
                    delivered within 24–48 hours, depending on the volume and
                    complexity of the documents. Our team is committed to timely
                    delivery without compromising quality.
                  </p>

                  <p>
                    As part of our premium services, we also provide document
                    pickup and delivery across Dubai, ensuring a smooth and
                    convenient experience for our clients.
                  </p>

                  <p>
                    In addition to Arabic and English, we support translations
                    in multiple languages, including Hindi, Urdu, Spanish, and
                    other international languages.
                  </p>
                </section>

                <section>
                  <h2>Specialized Translation Services</h2>

                  <p>
                    We assist with translation of important legal and business
                    documents, including Memorandum of Association (MOA), which
                    is essential for mainland company formation in Dubai. Our
                    expertise extends to a wide range of document types across
                    various industries.
                  </p>
                </section>

                <section>
                  <h2>Our Translation Services Include</h2>
                  <ul>
                    <li>English to Arabic Translation</li>
                    <li>Arabic to English Translation</li>
                    <li>Certified Legal Translation in Dubai</li>
                    <li>Hindi to Arabic Translation</li>
                    <li>Marriage Certificate Translation</li>
                    <li>Birth Certificate Translation</li>
                    <li>Educational Document Translation</li>
                    <li>Certificate Translation</li>
                    <li>Project Report Translation</li>
                  </ul>
                </section>

                <section>
                  <h2>Why Choose Elitezen Services?</h2>

                  <ul>
                    <li>
                      Highly qualified and experienced translators,
                      interpreters, and editors
                    </li>
                    <li>
                      Certified legal translators approved by the Ministry of
                      Justice
                    </li>
                    <li>Available 24/7, 365 days a year</li>
                    <li>Fast turnaround with urgent service options</li>
                    <li>Free pickup and delivery across the UAE</li>
                    <li>Support for 200+ languages</li>
                    <li>
                      Capability to handle projects of any size (from single
                      page to large volumes)
                    </li>
                    <li>Transparent pricing with no hidden charges</li>
                  </ul>

                  <p>
                    We are trusted by businesses and individuals alike for
                    delivering accurate, timely, and affordable translation
                    services. At Elitezen Services, quality and customer
                    satisfaction are always our top priorities.
                  </p>
                </section>

                <section>
                  <h2>Get in Touch</h2>
                  <p>
                    For more information or to request a quote, feel free to
                    contact our team. We are here to assist you with all your
                    translation needs.
                  </p>
                </section>
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
