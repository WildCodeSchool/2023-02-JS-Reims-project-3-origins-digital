import React, { useEffect, useState } from "react";

function VideoComponent() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000"}/video`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des vidéos :",
          error
        );
      });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <figure key={video.id}>
          <video src={video.url} controls>
            <track
              kind="captions"
              src={video.captionsUrl}
              label="French"
              default
            />
          </video>
          <figcaption>{video.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default VideoComponent;
