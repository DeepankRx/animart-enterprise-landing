import React from 'react';
import './Project.css';
import Image from 'next/image';

const ProjectCard = ({ image, name, link }) => {
  const handleVisitButtonClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="card border-2 border-black">
      <div className="card__img">
        <Image src={image} alt={name} />
      </div>

      <div className="card__title">{name}</div>

      <div className="card__wrapper">
        <button className="card__btn" onClick={handleVisitButtonClick}>
          Visit
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
