import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Importera Link för interna rutter

function ProjectSlide({ project }) {
  return (
    <div className="project-slide">
      <div className="project-text-part">
        <h3>{project.title}</h3>
        {project.course && <p className="project-course">{project.course}</p>}
        <p className="project-description">{project.description}</p>

        <div className="project-actions">
        
          {project.playUrl && (
            <Link to={project.playUrl} className="game-link-btn">
              Spela nu 🎮
            </Link>
          )}

         
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="github-link" 
              target="_blank" 
              rel="noreferrer"
            >
              Se projektet på GitHub
            </a>
          )}
        </div>
      </div>

      <div className="project-image-part">
        <div className="gallery-wrapper">
          <Swiper
            nested={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="project-images-swiper"
          >
            {project.images && project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-img-container">
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;