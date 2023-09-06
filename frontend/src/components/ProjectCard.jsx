import "../styles/project-card.css"

function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card">
                <div className="project-card-description">
                    <h2 className="project-card-title">
                        This is the title of the project card
                    </h2>
                    <p className="project-card-subtitle">
                        This is the subtitle of the project card
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;

