import Image from "next/image";

import { Project, ProjectBox } from "./ProjectBox";
import projectImage from "@/public/projects/aayushsahu.png";

const projects: Project[] = [
  {
    name: "Project name",
    description: "project description",
    image: <Image src={projectImage} alt="project image" />,
    sourceLink: "https://github.com/aayushmau5",
    demoLink: "https://github.com/aayushmau5",
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          name={project.name}
          image={project.image}
          description={project.description}
          demoLink={project.demoLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </div>
  );
}
