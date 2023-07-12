import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";
import { LikedVideosContext } from "../contexts/LikedVideosContext";

function VideoComponent() {
  const { token } = useAuth();
  const { addLikedVideo, removeLikedVideo, isVideoLiked } =
    useContext(LikedVideosContext);
  const [isLiked, setIsLiked] = useState(false);

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
        setIsLiked(isVideoLiked(data.id));
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération de la vidéo :",
          error
        );
      });
  }, [vidId, isVideoLiked]);

  const handleLikeVideo = () => {
    if (isLiked) {
      removeLikedVideo(video.id);
    } else {
      addLikedVideo(video);
    }
    setIsLiked(!isLiked);
  };

  return video.is_public || (!video.is_public && token) ? (
    <figure className="windowsVideo">
      <figcaption className="legend">{video.title}</figcaption>
      <iframe
        className="video"
        title={video.title}
        src={`${video.url}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <figcaption className="legend">{video.description}</figcaption>
      {!isLiked ? (
        <button onClick={handleLikeVideo} type="button" className="likebutton">
          Ajouter aux vidéos aimées
        </button>
      ) : (
        <button onClick={handleLikeVideo} type="button" className="likebutton">
          Retirer des vidéos aimées
        </button>
      )}
    </figure>
  ) : (
    <figure className="windowsVideo">
      <figcaption className="video">
        Pour visualiser {video.title}, il faut se connecter
      </figcaption>
      <Link to="/login">
        <img className="LogoF" src={Logo} alt="connecte toi" />{" "}
      </Link>
    </figure>
  );
}

export default VideoComponent;
