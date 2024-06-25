import "../styles/Home.css";
import Navbar from "../components/Navbar";
import HomePageCarousel from "../components/Homepage-Carousel";

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
    </>
  );
};
export default Home;
