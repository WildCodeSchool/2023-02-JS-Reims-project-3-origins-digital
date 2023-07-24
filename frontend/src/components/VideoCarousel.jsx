import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../images/logo RGB Original Digital.png";

function VideoCarousel({ videos, name, slideNumber }) {
  const { token } = useAuth();

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
      <h1 className="nameCarousel">{name}</h1>
      <Carousel
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        showThumbs={false}
        autoPlay={false}
        interval={3000}
        transitionTime={500}
        swipeable
        selectedItem={0}
        emulateTouch
        useKeyboardArrows
        stopOnHover
        centerMode
        centerSlidePercentage={100 / slideNum}
        axis="horizontal"
      >
        {videos.map((video) =>
          video.is_public || (!video.is_public && token) ? (
            <Link key={`${video.id}`} to={`/videos/${video.id}`}>
              <img
                className="imgCarousel"
                src={video.thumbnail_url}
                alt={video.title}
              />
              <p className="legend">{video.title}</p>
            </Link>
          ) : (
            <Link
              key={`${video.id}`}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <img className="logo-f" src={Logo} alt="connecte toi" />
              <p className="legend">
                Pour regarder {video.title} il faut se connecter.
              </p>
            </Link>
          )
        )}
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
