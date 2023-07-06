import React, { useState, useEffect } from "react";

function DeleteVideo() {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [message, setMessage] = useState("");

  const fetchVideos = async () => {
    try {
      // Code pour récupérer toutes les vidéos de la base de données
      const response = await fetch("http://localhost:5002/videos"); // Remplacez "/api/videos" par l'URL de votre endpoint API pour récupérer les vidéos
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos :", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

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
          await fetch(`http://localhost:5002/videos/${videoId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
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
    <div>
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
