// src/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="section header-section">
        <h1>Welcome to My Homepage</h1>
      </header>
      <section className="section section-one">
        <h2>Section One</h2>
        <p>This is the first section of the homepage.</p>
      </section>
      <section className="section section-two">
        <h2>Section Two</h2>
        <p>This is the second section of the homepage.</p>
      </section>
      <main className="body">
        <h2>Main Content</h2>
        <p>This is the main content of the homepage.</p>
      </main>
    </div>
  );
}

export default HomePage;
