import Skills from "@/components/React/Project/Skills";
import Projects from "@/components/React/Project/Projects";
import { PageSEO } from "@/components/SEO";

import styles from "@/styles/ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <PageSEO
        title="Projects"
        description="Checkout the projects made by me"
      />
      <div className={styles.container}>
        <h1>Projects</h1>
        <p>Checkout the work I have done.</p>
        <h2>Skills</h2>
        <p>Here&apos;s the list of skills that I have.</p>
        <Skills />
        <h2>All my projects</h2>
        <p>Here&apos;s the list of projects that I have made.</p>
        <Projects />
      </div>
    </>
  );
}
