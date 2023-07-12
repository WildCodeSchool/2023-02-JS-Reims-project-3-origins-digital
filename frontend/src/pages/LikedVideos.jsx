import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import { LikedVideosContext } from "../contexts/LikedVideosContext";
import VideoCarousel from "../components/VideoCarousel";

function LikedVideos({ slideNum }) {
  const { likedVideos } = useContext(LikedVideosContext);

  const [slideNumber, setSlideNumber] = useState(slideNum);
  useEffect(() => {
    const updateSlideNumber = () => {
      setSlideNumber(window.innerWidth <= 768 ? 1 : slideNum);
    };
    updateSlideNumber();
    window.addEventListener("resize", updateSlideNumber);
    return () => {
      window.removeEventListener("resize", updateSlideNumber);
    };
  }, [slideNum]);

  return (
    <div>
      <h2>Vidéos aimées</h2>
      <div className="video-carousel">
        <Carousel
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          showThumbs={false}
          autoPlay={false}
          interval={5000}
          transitionTime={500}
          swipeable
          dynamicHeight
          selectedItem={0}
          emulateTouch
          useKeyboardArrows
          stopOnHover
          centerMode
          centerSlidePercentage={100 / slideNumber}
          axis="horizontal"
        >
          <VideoCarousel slideNumber={3} videos={likedVideos} />
        </Carousel>
      </div>
    </div>
  );
}

LikedVideos.propTypes = {
  slideNum: PropTypes.number.isRequired,
};

export default LikedVideos;
