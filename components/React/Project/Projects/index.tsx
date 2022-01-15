import { Project, ProjectBox } from "./ProjectBox";

const projects: Project[] = [
  {
    name: "Blog Project",
    description: "A multi-user blog website made using React and NodeJS.",
    sourceLink: "https://github.com/aayushmau5/blog-frontend",
    demoLink: "https://aayushblogs.netlify.app/",
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
