import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoComponent() {
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
  return (
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
    </figure>
  );
}

export default VideoComponent;
