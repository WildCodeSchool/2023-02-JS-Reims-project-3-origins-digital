import React, { useState, useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

function DeleteVideo() {
  const { videos, setVideos } = useContext(VideoContext);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [message, setMessage] = useState("");

  const handleVideoCheckboxChange = (event, videoId) => {
    if (event.target.checked) {
      setSelectedVideos([...selectedVideos, videoId]);
    } else {
      setSelectedVideos(selectedVideos.filter((id) => id !== videoId));
    }
  };

  const handleDeleteSelectedVideos = async () => {
    try {
      // Supprimez les vidéos sélectionnées de la base de données
      await Promise.all(
        selectedVideos.map(async (videoId) => {

          await fetch(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
            }/videos
          /${videoId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

        })
      );

      // Mettez à jour l'état des vidéos après la suppression
      setVideos(videos.filter((video) => !selectedVideos.includes(video.id)));
      setSelectedVideos([]);
      setMessage("Vidéos supprimées !");
    } catch (error) {
      console.error("Erreur lors de la suppression des vidéos :", error);
    }
  };

  return (
    <div className="delete-video-container">
      <h1>Page d'administration</h1>

      <button type="button" onClick={handleDeleteSelectedVideos}>
        Supprimer les vidéos sélectionnées
      </button>

      {videos.map((video) => (
        <div key={video.id}>
          <input
            type="checkbox"
            checked={selectedVideos.includes(video.id)}
            onChange={(e) => handleVideoCheckboxChange(e, video.id)}
          />
          <span>{video.title}</span>
        </div>
      ))}

      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteVideo;
