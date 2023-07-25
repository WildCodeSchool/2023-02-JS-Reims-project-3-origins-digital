import React, { useState, useContext, useEffect } from "react";
import { VideoContext } from "../contexts/VideoContext";

function DeleteVideo() {
  const { videos, setVideos } = useContext(VideoContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [message, setMessage] = useState("");

  const handleVideoCheckboxChange = (event, videoId) => {
    if (event.target.checked) {
      setSelectedVideos([...selectedVideos, videoId]);
    } else {
      setSelectedVideos(selectedVideos.filter((id) => id !== videoId));
    }
  };

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5002"
      }/categories`
    )
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const categoryNameToIdMap = {
    football: 1,
    basketball: 2,
    tennis: 3,
    natation: 4,
    hockey: 5,
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDeleteSelectedVideos = async () => {
    try {
      await Promise.all(
        selectedVideos.map(async (videoId) => {
          await fetch(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5002"
            }/videos/${videoId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        })
      );

      setVideos(videos.filter((video) => !selectedVideos.includes(video.id)));
      setSelectedVideos([]);
      setMessage("Vidéo supprimée!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la suppression des vidéos :", error);
    }
  };

  return (
    <div className="delete-video-container">
      <h1>Supprimer une vidéo</h1>

      <div className="filter-section">
        <label htmlFor="choiceCategory">Catégorie :</label>
        <select
          className="selectCategory"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Toutes les vidéos : --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.title}>
              {category.id} {category.title}
            </option>
          ))}
        </select>
        <div className="action-section">
          {" "}
          <button
            type="button"
            className="deletebutton"
            onClick={handleDeleteSelectedVideos}
          >
            Supprimer vidéo sélectionnée
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>

      {videos
        .filter((video) =>
          selectedCategory
            ? video.id_category === categoryNameToIdMap[selectedCategory]
            : video.id
        )
        .map((video) => (
          <div key={video.id}>
            <input
              type="checkbox"
              checked={selectedVideos.includes(video.id)}
              onChange={(e) => handleVideoCheckboxChange(e, video.id)}
            />
            <span>{video.title}</span>
          </div>
        ))}
    </div>
  );
}

export default DeleteVideo;
