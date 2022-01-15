import Link from "next/link";

import Date from "@/components/Date";
import styles from "@/styles/Blog.module.css";

interface Props {
  articles: {
    slug: string;
    date: string;
    title: string;
    readingTime: { text: string };
  }[];
}

export default function ShowRecentArticles({ articles }: Props) {
  return (
    <div>
      <h3>Recent articles</h3>
      {articles.map((article, index) => (
        <div key={index} className={styles.blogsContainer}>
          <Link href={`/blog/${article.slug}`}>
            <a className={styles.blogContainer}>
              <p className={styles.date}>
                <Date dateString={article.date} />
              </p>
              <h3>{article.title}</h3>
              <p className={styles.readingTime}>{article.readingTime.text}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
