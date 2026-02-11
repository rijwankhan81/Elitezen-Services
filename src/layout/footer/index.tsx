import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import {
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NextImage from "@/hooks/NextImage";
import { usePathname } from "next/navigation";
import { companyItems } from "@/constants/companyNav";
import { servicesNav } from "@/constants/servicesNav";
import { legalItems } from "@/constants/legalNav";
import { contactInfo } from "@/constants/contactInfo";
export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
              <Link className={styles.logo} href="/">
                <NextImage src="/images/logo.png" alt="" />
              </Link>
              <p>
                Your trusted partner for business setup, compliance, and growth
                in the UAE.
              </p>
              <div className={styles.connect}>
                <ul>
                  <li>
                    <Link href="javascript:void(0)">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">
                      <FaInstagram />
                    </Link>
                  </li>

                  <li>
                    <Link href="javascript:void(0)">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_menu}>
              <h3>Services</h3>
              <ul>
                {servicesNav.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <h3>Company</h3>
              <ul>
                {companyItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.footer_menu}>
              <h3>Legal</h3>
              <ul>
                {legalItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href} className={styles.navItem}>
                      <Link
                        href={item.href}
                        className={`${styles.nav_link} ${
                          isActive ? styles.active : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <h3>Contact Information</h3>

              <ul>
                <li>
                  <FaPhoneAlt />
                  <span>{contactInfo.phone}</span>
                </li>

                <li>
                  <FaEnvelope />
                  <span>{contactInfo.email}</span>
                </li>

                <li>
                  <FaMapMarkerAlt />
                  <span>{contactInfo.address}</span>
                </li>
                <li>
                  <FaClock />

                  <span>{contactInfo.timing}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>
              © 2026 Elitezen Services. All rights reserved.
            </p>
            <p className={styles.copyright}>Powered by JIONEX</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
