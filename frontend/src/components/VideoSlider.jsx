import Slider from "react-slick";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function VideoSlider({ slideNumber, videos, name }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileView ? 1 : slideNumber,
    slidesToScroll: isMobileView ? 1 : slideNumber,
    arrows: false,
  };

  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkIfMobileView();
    window.addEventListener("resize", checkIfMobileView);

    return () => {
      window.removeEventListener("resize", checkIfMobileView);
    };
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        pauseOnHover={settings.pauseOnHover}
      >
        {videos.map((video) => (
          <div key={video.url} className="video-item">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              width="300"
              height="200"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

VideoSlider.propTypes = {
  slideNumber: PropTypes.number.isRequired,
  videos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  name: PropTypes.string.isRequired,
};

export default VideoSlider;
