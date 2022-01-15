import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

import { PageSEO } from "@/components/SEO";
import Logo from "@/public/image.png";
import { sortedPostData } from "@/utils/getPosts";
import styles from "@/styles/Home.module.css";
import getResumeLink from "@/utils/getResumeLink";
import { createRSSFile } from "@/utils/generateRSSFeed";
import ShowRecentArticles from "@/components/React/ShowRecentArticles";

export default function Index({ recentPosts, resumeFileNameLink }) {
  return (
    <>
      <PageSEO
        title="Aayush Kumar Sahu - Developer and Explorer"
        description="aayushmau5' personal website"
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>
              {" "}
              Hello <span className={styles.waving}>👋 </span>
            </h1>
            <p>
              My name is{" "}
              <span className={styles.highlight}>Aayush Kumar Sahu</span>, aka,{" "}
              <span className={styles.highlight}>aayushmau5</span>(pronounced:
              aayushmouse).
            </p>
            <p>
              I&apos;m a{" "}
              <span className={styles.highlight}>fullstack web developer</span>{" "}
              based in India.
            </p>
            <p>
              I like to babble about <code>Open-Source</code>,{" "}
              <code>JavaScript/TypeScript</code>, <code>Linux</code>,{" "}
              <code>Vim</code>(<code>vscode</code> works as well),{" "}
              <code>Compilers</code>, or anything interesting :P
            </p>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              placeholder="blur"
              alt="logo"
              className={styles.logo}
            />
          </div>
        </div>

        <ShowRecentArticles articles={recentPosts} />

        <div className={styles.nextStepsContainer}>
          <div className={styles.nextSteps}>
            <p>While you are here, feel free to:</p>
            <Link href="/blog">
              <a className="styledLink">
                <BsArrowRightShort />
                Checkout my blogs
              </a>
            </Link>
            <Link href="/projects">
              <a className="styledLink">
                <BsArrowRightShort />
                Checkout my projects
              </a>
            </Link>
            <p>And if you liked it:</p>
            <a href="mailto:aayushmau5@gmail.com" className="styledLink">
              <BsArrowRightShort />
              Contact me
            </a>
            {resumeFileNameLink ? (
              <a
                href={`/resume/${resumeFileNameLink}`}
                target="_blank"
                rel="noreferrer"
                className="styledLink"
              >
                <BsArrowRightShort />
                See my resume
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const postsData = sortedPostData;
  const recentPosts = [];

  if (postsData[0]) recentPosts.push(postsData[0]);
  if (postsData[1]) recentPosts.push(postsData[1]);

  const resumeFileNameLink = getResumeLink() || null;
  createRSSFile();

  return {
    props: {
      recentPosts,
      resumeFileNameLink,
    },
  };
};
