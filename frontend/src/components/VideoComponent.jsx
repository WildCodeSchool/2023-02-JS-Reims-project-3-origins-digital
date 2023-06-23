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
    <figure>
      <figcaption>{video.title}</figcaption>
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
  );
}

export default VideoComponent;
