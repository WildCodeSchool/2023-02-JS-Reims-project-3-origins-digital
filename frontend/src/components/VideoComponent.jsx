import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";

function VideoComponent() {
  const { token } = useAuth();

  const [video, setVideo] = useState([]);
  const { id: vidId } = useParams();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/videos/${vidId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de la vidéo :",
          error
        );
      });
  }, [vidId]);
  return video.is_public || (!video.is_public && token) ? (
    <figure className="windowsVideo">
      <figcaption className="legendTitle">{video.title}</figcaption>
      <iframe
        className="video"
        title={video.title}
        src={`${video.url}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <figcaption className="legend">{video.description}</figcaption>
    </figure>
  ) : (
    <figure className="windowsVideo">
      <figcaption className="video">
        Pour regarder {video.title}, il faut se connecter.
      </figcaption>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <img className="LogoF" src={Logo} alt="connecte toi" />{" "}
      </Link>
    </figure>
  );
}

export default VideoComponent;
