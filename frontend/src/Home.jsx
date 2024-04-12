import React from 'react';
import './App.css';
import campfirePng from './assets/campfire.png';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Howdy! I'm Weston, a Software Engineer from Houston.</h1>
        <p>I recently developed Campfire, an open-source, self-hosted deploy preview solution for containerized, headless frontends.</p>
      </div>
      <div className="logo-and-links">
        <div className="logo-section">
          <img src={campfirePng} alt="campfire png"/>
        </div>
        <div className="campfire-links">
          <p>Case Study: <a href="https://campfirepreviews.github.io">https://campfirepreviews.github.io</a></p>
          <p>GitHub: <a href="https://github.com/campfire-previews/campfire-app">https://github.com/campfire-previews/campfire-app</a></p>
        </div>
      </div>
      <div className="other-projects">
        <h2>Other Projects</h2>
      </div>
    </div>
  );
}

export default Home;