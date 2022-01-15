import {
  FaDev,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRss,
} from "react-icons/fa";

import config from "config.json";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p style={{ fontSize: "1rem" }}>Made with ❤️ by {config.username}</p>
      <div className={styles.socialsContainer}>
        {config.user.githubLink ? (
          <a href={config.user.githubLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        ) : null}

        {config.user.linkedinLink ? (
          <a href={config.user.linkedinLink} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        ) : null}

        {config.user.twitterLink ? (
          <a href={config.user.twitterLink} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        ) : null}

        {config.user.devToLink ? (
          <a href={config.user.devToLink} target="_blank" rel="noreferrer">
            <FaDev />
          </a>
        ) : null}

        <a href="/rss.xml" target="_blank" rel="noreferrer">
          <FaRss />
        </a>
      </div>
    </div>
  );
}
