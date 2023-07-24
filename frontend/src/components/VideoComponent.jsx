import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaRedditAlien,
  FaWhatsapp,
} from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";

function VideoComponent() {
  const { token } = useAuth();

  const [video, setVideo] = useState([]);
  const { id: vidId } = useParams();
  const [isURLCopied, setIsURLCopied] = useState(false);

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

  const handleCopyLink = () => {
    const url = `${window.location.origin}/video/${vidId}`;
    navigator.clipboard.writeText(url).then(() => {
      setIsURLCopied(true);
      setTimeout(() => {
        setIsURLCopied(false);
      }, 2000);
    });
  };

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
      <div className="SocialLinks">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            `${window.location.origin}/video/${vidId}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialLink"
        >
          <FaTwitter />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            `${window.location.origin}/video/${vidId}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialLink"
        >
          <FaFacebook />
        </a>
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(
            `${window.location.origin}/video/${vidId}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialLink"
        >
          <FaInstagram />
        </a>
        <a
          href={`https://reddit.com/submit?url=${encodeURIComponent(
            `${window.location.origin}/video/${vidId}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialLink"
        >
          <FaRedditAlien />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `${window.location.origin}/video/${vidId}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="SocialLink"
        >
          <FaWhatsapp />
        </a>
        <button
          type="button"
          className="SocialLinkButton"
          onClick={handleCopyLink}
          style={{ marginLeft: "auto" }}
        >
          <MdContentCopy />{" "}
        </button>
        {isURLCopied && (
          <span
            style={{
              display: "block",
              marginLeft: "auto",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            URL copiée dans le presse-papiers.
          </span>
        )}
      </div>
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
