import Head from "next/head";
import styles from "./blog.module.scss";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import Testimonials from "@/components/testimonials";
import BlogCard from "@/components/blogs";
import { blogPosts as postsFromFile, BlogPost } from "@/contants/blogs";
import { GetStaticProps } from "next";

function formatDateISOToReadable(isoDate: string) {
  try {
    const d = new Date(isoDate);
    // Use a stable format: "12 March 2024" (locale independent because we select 'en-GB' explicitly)
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short", // "Mar" — use "long" for "March"
      year: "numeric",
    }).format(d);
  } catch {
    return isoDate;
  }
}
type Props = {
  posts: BlogPost[];
};
export default function BlogPage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blogs | Peddy Pay</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.row}>
                <div className={styles.content}>
                  <h1>
                    Explore the Latest Insights, Tips & Updates from PeddyPay
                  </h1>
                  <p className={styles.desc}>
                    Stay updated with global fintech trends, product releases,
                    security tips, and smart financial guidance.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className={styles.scandown}>
          <div className={styles.wrap}>
            <Container>
              <div className={styles.head}>
                <h2>Latest Articles</h2>
              </div>
              <div className={styles.blog}>
                {posts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </Container>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // create stable, pre-formatted date strings at build time
  const posts = postsFromFile.map((post) => ({
    ...post,
    formattedDate: formatDateISOToReadable(post.date),
  }));

  return {
    props: {
      posts,
    },
  };
};
