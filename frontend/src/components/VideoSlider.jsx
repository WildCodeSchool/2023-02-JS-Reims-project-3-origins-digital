import Slider from "react-slick";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function VideoSlider({ slideNumber, videos }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileView ? 1 : slideNumber,
    slidesToScroll: isMobileView ? 1 : slideNumber,
    arrows: true,
  };
  // Utilisation de useEffect pour détecter si la vue est en mode mobile ou desktop
  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Vérifier si la vue est mobile lors du chargement initial et lors du redimensionnement de la fenêtre
    checkIfMobileView();
    window.addEventListener("resize", checkIfMobileView);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", checkIfMobileView);
    };
  }, []);
  return (
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
        <div key={video} className="video-item">
          <ReactPlayer url={video} controls width="300px" height="200px" />
        </div>
      ))}
    </Slider>
  );
}
VideoSlider.propTypes = {
  slideNumber: PropTypes.number.isRequired,
  videos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default VideoSlider;
