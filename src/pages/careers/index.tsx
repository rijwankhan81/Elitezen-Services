import React from "react";
import styles from "./careers.module.scss";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

const jobs = [
  {
    id: 1,
    title: "Business Setup Consultant",
    location: "Dubai, UAE",
    type: "Full Time",
    description:
      "Assist clients with company formation, licensing, and UAE business setup consultation.",
  },
  {
    id: 2,
    title: "PRO Executive",
    location: "Dubai, UAE",
    type: "Full Time",
    description:
      "Handle visa processing, government documentation, and compliance procedures.",
  },
  {
    id: 3,
    title: "Sales Executive",
    location: "Dubai, UAE",
    type: "Full Time",
    description:
      "Generate leads, manage client relationships, and drive business growth.",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    location: "Remote / Dubai",
    type: "Full Time",
    description:
      "Manage SEO, ads, and content strategy to grow online presence.",
  },
];

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Compliance Audit | Elitezen Services</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.careersPage}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <Container>
              <h1>Join Our Team</h1>
              <p>
                Be part of a growing team helping businesses expand in the UAE.
                Build your career with innovation, collaboration, and impact.
              </p>
            </Container>
          </section>

          {/* Why Work With Us */}
          <section className={styles.why}>
            <div className={styles.head}>
              <h2>Why Work With Us?</h2>
            </div>
            <Container>
              <div className={styles.features}>
                <div>
                  <h3>Growth Opportunities</h3>
                  <p>We support your professional and personal growth.</p>
                </div>
                <div>
                  <h3>Dynamic Environment</h3>
                  <p>Work in a fast-paced and innovative business ecosystem.</p>
                </div>
                <div>
                  <h3>Team Culture</h3>
                  <p>Collaborative and supportive team environment.</p>
                </div>
                <div>
                  <h3>Competitive Benefits</h3>
                  <p>Attractive salary packages and incentives.</p>
                </div>
              </div>
            </Container>
          </section>

          {/* Job Listings */}
          <section className={styles.jobs}>
            <div className={styles.head}>
              <h2>Open Positions</h2>
            </div>

            <Container>
              <div className={styles.jobList}>
                {jobs.map((job) => (
                  <div key={job.id} className={styles.card}>
                    <h3>{job.title}</h3>
                    <p className={styles.meta}>
                      {job.location} • {job.type}
                    </p>
                    <p>{job.description}</p>
                    <button>Apply Now</button>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* CTA */}
          <section className={styles.cta}>
            <Container>
              <div className={styles.head}>
                <h2>Didn’t find the right role?</h2>
                <p>
                  Send us your CV and we’ll get in touch when a suitable
                  opportunity arises.
                </p>
              </div>
              <button>Submit Your CV</button>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
