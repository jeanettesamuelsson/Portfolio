import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


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
        <div className="gallery-wrapper">
          <Swiper
            nested={true} // slider in another slider
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="project-images-swiper"
          >
            {project.images.map((img, index) => (
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