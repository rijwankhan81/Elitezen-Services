import styles from "./services.module.scss";
import { Container } from "react-bootstrap";
import { servicesData } from "@/contants/services";
import Link from "next/link";

export default function Servicesnav() {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.servicesWrapper}>
          {servicesData.map((category) => (
            <div key={category.slug} className={styles.col}>
              <h4>
                <Link href={`/services/${category.slug}`}>
                  {category.category}
                </Link>
              </h4>

              <ul className={styles.list}>
                {category.services.map((service) => (
                  <li
                    key={service.slug}
                    className={service.children?.length ? styles.children : ""}
                  >
                    <Link href={`/services/${category.slug}/${service.slug}`}>
                      {service.title}
                    </Link>

                    {service.children && service.children.length > 0 && (
                      <ul className={styles.submenu}>
                        {service.children.map((child) => (
                          <li key={child.slug}>
                            <Link
                              href={`/services/${category.slug}/${service.slug}/${child.slug}`}
                            >
                              {child.title}
                            </Link>
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
      </section>
    </>
  );
}
