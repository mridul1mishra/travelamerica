'use client'
import React from "react";
import "./majorcities.css"; // optional if you want to style it
import { StoriesSectionProps } from "../../../models/story";
import StoryCard from "./storycard/storycard";

// Preload links were previously emitted via <Head> from next/head, which is a no-op
// in the App Router. If preloading is still desired, move these to app/layout.tsx
// as <link rel="preload"> inside <head>, or use next/font for the Corben font.

export default function Majorcities({ section: { heading, storydescription, stories } }: StoriesSectionProps) {

    return (
      <>
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