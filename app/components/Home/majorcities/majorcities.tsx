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
        <link
          rel="preload"
          as="font"
          href="/data/corben-cdnfonts/Corben-Bold.ttf"
          type="font/woff2"
        />
        <link
          rel="preload"
          as="image"
          href="/data/logo3.png"
          type="image/png"
        />
      </Head>
        <section className="travel-stories">
  <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="back-to-top"><h2  className="section-heading">{heading}</h2></button>
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