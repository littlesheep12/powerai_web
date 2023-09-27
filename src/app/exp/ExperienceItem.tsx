import React from 'react';

// Define property types
interface ExperienceItemProps {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  githubLink: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  date,
  technologies,
  description,
  githubLink
}) => {
  // Split the description into an array of bullet points
  const descriptionPoints = description.split('\n');

  return (
    <div className="project">
      <div className="project-item">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p><em>{date} - {technologies.join(' / ')}</em></p>
        <blockquote>
          <p>Github: <a href={githubLink}>{githubLink}</a></p>
        </blockquote>
        <ul className="list-disc pl-4">
          {descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ExperienceItem;
