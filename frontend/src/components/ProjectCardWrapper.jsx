import "../styles/project-card-wrapper.css";

import ProjectCard from "./ProjectCard";

function ProjectCardWrapper() {
    return (
        <div className="project-card-wrapper-container">
            <div className="project-card-wrapper">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectCardWrapper;

