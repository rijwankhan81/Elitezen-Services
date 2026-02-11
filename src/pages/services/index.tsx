import Head from "next/head";
import styles from "./services.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import { servicesData } from "@/constants/services";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>
                    Trusted Business Setup & Regulatory Services in the UAE
                  </h1>
                  <p className={styles.desc}>
                    From company formation to product registration and
                    regulatory support, we help businesses start, operate, and
                    grow in the UAE with complete confidence.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.services}>
          <Container>
            <div className={styles.servicesWrapper}>
              {servicesData.map((category) => (
                <div
                  key={category.slug || category.category}
                  className={styles.col}
                >
                  <h4>
                    {category.slug ? (
                      <Link href={`/services/${category.slug}`}>
                        {category.category}
                      </Link>
                    ) : (
                      <span className={styles.noLink}>{category.category}</span>
                    )}
                  </h4>

                  <ul className={styles.list}>
                    {category.services.map((service) => (
                      <li
                        key={service.slug || service.title}
                        className={
                          service.children?.length ? styles.children : ""
                        }
                      >
                        {service.slug ? (
                          <Link
                            href={`/services/${category.slug}/${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        ) : (
                          <span className={styles.noLink}>{service.title}</span>
                        )}

                        {service.children && service.children.length > 0 && (
                          <ul className={styles.submenu}>
                            {service.children.map((child) => (
                              <li key={child.slug || child.title}>
                                {child.slug ? (
                                  <Link
                                    href={`/services/${category.slug}/${child.slug}`}
                                  >
                                    {child.title}
                                  </Link>
                                ) : (
                                  <span className={styles.noLink}>
                                    {child.title}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
