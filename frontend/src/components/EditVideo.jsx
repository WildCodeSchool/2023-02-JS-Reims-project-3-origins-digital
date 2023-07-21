import React, { useState, useContext, useEffect } from "react";
import { VideoContext } from "../contexts/VideoContext";

function EditVideo() {
  const { videos, setVideos } = useContext(VideoContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
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

  const handleVideoCheckboxChange = (event, videoId) => {
    if (event.target.checked) {
      setSelectedVideos((prevSelectedVideos) => [
        ...prevSelectedVideos,
        videoId,
      ]);
    } else {
      setSelectedVideos((prevSelectedVideos) =>
        prevSelectedVideos.filter((id) => id !== videoId)
      );
    }
  };

  const handleFieldChange = (event, videoId) => {
    const { name, value } = event.target;
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id === videoId) {
          return {
            ...video,
            [name]: value,
          };
        }
        return video;
      })
    );
  };

  const handleUpdateVideos = async () => {
    try {
      await Promise.all(
        selectedVideos.map(async (videoId) => {
          const selectedVideo = videos.find((video) => video.id === videoId);
          await fetch(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
            }/videos/${videoId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(selectedVideo),
            }
          );
        })
      );

      setSelectedVideos([]);
      setMessage("Vidéos modifiées avec succès !");
    } catch (error) {
      console.error("Erreur lors de la modification des vidéos :", error);
    }
  };

  return (
    <div className="edit-video-container">
      <h1>Page d'administration</h1>
      <label htmlFor="choiceCategory">Catégorie :</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">-- toutes les vidéos : --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.id} {category.title}
          </option>
        ))}
      </select>

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
            <p>{video.description}</p>
            <div>
              <label htmlFor={`updatedTitle_${video.id}`}>
                Nouveau titre :
              </label>
              <input
                type="text"
                id={`updatedTitle_${video.id}`}
                name="title"
                value={video.title}
                onChange={(e) => handleFieldChange(e, video.id)}
              />
            </div>
            <div>
              <label htmlFor={`updatedDescription_${video.id}`}>
                Nouvelle description :
              </label>
              <textarea
                id={`updatedDescription_${video.id}`}
                name="description"
                value={video.description}
                onChange={(e) => handleFieldChange(e, video.id)}
              />
            </div>
            {/* Add other fields for updating video data */}
          </div>
        ))}
      <button type="button" onClick={handleUpdateVideos}>
        Modifier les vidéos sélectionnées
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditVideo;
