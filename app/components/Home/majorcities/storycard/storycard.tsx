import React from "react";
import { Story } from "../../../../models/story";


interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { title, description, image, link } = story;

  return (
    <div className="story-card">
      <img src={image} alt={title} 
      sizes="(max-width: 768px) 425px, (max-width: 1200px) 850px, 1295px"
      width="425"
      height="240"/>
      <div className="story-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Know More</a>
      </div>
    </div>
  );
};

export default StoryCard;