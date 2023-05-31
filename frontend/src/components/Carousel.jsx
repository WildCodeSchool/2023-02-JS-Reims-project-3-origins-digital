import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function Carousel() {
  const [isMobileView, setIsMobileView] = useState(false);

  const videos = [
    "https://youtu.be/p5RKLMMb5u4",
    "https://youtu.be/_GMJH85RgVA",
    "https://youtu.be/kHsum3xHplA",
    "https://youtu.be/Gdgp0exjN8I",
    "https://youtu.be/mwIkAbAa9ec",
    "https://youtu.be/zvq7GJQb2Sw",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobileView ? 1 : 3,
    slidesToScroll: isMobileView ? 1 : 3,
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
    <div className="carrousel">
      <span> Suggestions </span>
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
    </div>
  );
}

export default Carousel;
