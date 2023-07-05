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
      <figcaption className="video">{video.title}</figcaption>
      <iframe
        title={video.title}
        width="440"
        height="365"
        src={`${video.url}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <figcaption>{video.description}</figcaption>
    </figure>
  ) : (
    <figure className="windowsVideo">
      <figcaption className="video">
        pour visualiser {video.title}, il faut se connecter
      </figcaption>
      <Link to="/login">
        <img className="LogoF" src={Logo} alt="connecte toi" />{" "}
      </Link>
    </figure>
  );
}

export default VideoComponent;
