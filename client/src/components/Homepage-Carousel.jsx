// HomePageCarousel.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePageCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
    >
      <div>
        <img src="image1.jpg" alt="First slide" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="image2.jpg" alt="Second slide" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="image3.jpg" alt="Third slide" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default HomePageCarousel;