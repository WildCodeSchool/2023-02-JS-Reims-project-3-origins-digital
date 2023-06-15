import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function VideoCarousel({ videos, name, slideNumber }) {
  const [slideNum, setSlideNum] = useState(slideNumber);

  useEffect(() => {
    const updateSlidesNumber = () => {
      setSlideNum(window.innerWidth <= 768 ? 1 : slideNumber);
    };
    updateSlidesNumber();
    window.addEventListener("resize", updateSlidesNumber);
    return () => {
      window.removeEventListener("resize", updateSlidesNumber);
    };
  }, [slideNumber]);
  return (
    <div className="video-carousel">
      <h1>{name}</h1>
      <Carousel
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        showThumbs={false}
        autoPlay
        interval={5000}
        transitionTime={500}
        swipeable
        dynamicHeight
        selectedItem={0}
        emulateTouch
        useKeyboardArrows
        stopOnHover
        centerMode
        centerSlidePercentage={100 / slideNum}
        axis="horizontal"
      >
        {videos.map((video) => (
          <div key={`${video.id}`}>
            <img src={video.thumbnail_url} alt={video.title} />
            <p className="legend">{video.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

VideoCarousel.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      time: PropTypes.string,
      idCategory: PropTypes.number,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  slideNumber: PropTypes.number.isRequired,
};

export default VideoCarousel;
