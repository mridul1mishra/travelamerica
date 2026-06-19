import React from "react";
import { Story } from "../../../../models/story";
import Image, { StaticImageData } from "next/image";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { title, description, image, link } = story;

  return (
    <div className="story-card">
      <div style={{ position: "relative", width: "425px", height: "240px" }}>
      <Image src={image} alt={title} 
      fetchPriority="high"
      fill
      decoding="async"
      sizes="(max-width: 768px) 425px, (max-width: 1200px) 850px, 1295px"
      style={{ objectFit: "cover" }}
      />
      </div>
      <div className="story-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Know More</a>
      </div>
    </div>
  );
};

export default StoryCard;