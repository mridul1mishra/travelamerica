'use client'
import React from "react";
import "./majorcities.css"; // optional if you want to style it
import { StoriesSectionProps } from "../../../models/story";
import StoryCard from "./storycard/storycard";
import Head from "next/head";

interface MajorCitiesProps {
  section: StoriesSectionProps;
}

export default function Majorcities({ section: { heading, storydescription, stories } }: StoriesSectionProps) {
  
    return (
      <>
      <Head>
        <link rel="preload" as="font" href="/data/corben-cdnfonts/Corben-Bold.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="image" href="/data/logo3.webp" type="image/png"/>
        
      </Head>
        <section className="travel-stories">
  <h1  className="section-heading">{heading}</h1>
  <p className="description-text">{storydescription}</p>

  <div className="story-cards">
    {stories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
  </div>

  <div className="carousel-controls">
    <a href="/majorcities/newyork" className="view-more-btn">View More</a>
  </div>
        </section>
        </>
    );
};