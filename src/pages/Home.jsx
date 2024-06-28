// // src/HomePage.js
// import React from 'react';
// import '../styles/HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       <header className="section header-section">
//         <h1>Welcome to My Homepage</h1>
//       </header>
//       <section className="section section-one">
//         <h2>Section One</h2>
//         <p>This is the first section of the homepage.</p>
//       </section>
//       <section className="section section-two">
//         <h2>Section Two</h2>
//         <p>This is the second section of the homepage.</p>
//       </section>
//       <main className="body">
//         <h2>Main Content</h2>
//         <p>This is the main content of the homepage.</p>
//       </main>
//     </div>
//   );
// }

// export default HomePage;


















import "../styles/Home.css";
import Navbar from "../components/Navbar";
import HomePageCarousel from "../components/Homepage-Carousel";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <>
      <div className="Tags-Container">
        <ul className="Tag-Bar">
          <div className="Tag">
            <li className="Tag-Item">
              <a href="">Tag 1</a>
            </li>
          </div>
          <li className="Tag-Item">
            <a href="">Tag 2</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 3</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 4</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 5</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 6</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 7</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 8</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 9</a>
          </li>
          <li className="Tag-Item">
            <a href="">Tag 10</a>
          </li>
        </ul>
      </div>
      <HomePageCarousel />
      <HomePage />
    </>
  );
};
export default Home;
