function ProjectSlide({ project }) {

  return (

    <div className="project-slide">
      <div className="project-text-part">

        <h3>{project.title}</h3>
        <p className="project-course">{project.course}</p>

        <p className="project-description">{project.description}</p>

        <a href={project.githubUrl} className="github-link" target="_blank" rel="noreferrer">
          Se projektet på min Github
        </a>
      </div>

      <div className="project-image-part">
       
        <div className="project-images-grid">

          {project.images.map((img, index) => (
            <div className="gallery-img-container" key={index}>
              <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;