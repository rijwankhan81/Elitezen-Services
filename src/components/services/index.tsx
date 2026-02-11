import styles from "./services.module.scss";
import { servicesData } from "@/constants/services";
import Link from "next/link";

export default function Servicesnav() {
  return (
    <>
      <section className={styles.services}>
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
                    className={service.children?.length ? styles.children : ""}
                  >
                    {service.slug ? (
                      <Link href={`/services/${category.slug}/${service.slug}`}>
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
      </section>
    </>
  );
}
