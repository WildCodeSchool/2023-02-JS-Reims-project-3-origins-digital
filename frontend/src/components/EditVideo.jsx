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
      setMessage("Vidéo modifiée!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la modification des vidéos :", error);
    }
  };

  return (
    <div className="edit-video-container">
      <div className="category-section">
        <h1>Modifier une vidéo</h1>
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
          <button type="button" onClick={handleUpdateVideos}>
            Modifier vidéo sélectionnée
          </button>
          {message && <p>{message}</p>}
        </div>

        {videos
          .filter((video) =>
            selectedCategory
              ? video.id_category === categoryNameToIdMap[selectedCategory]
              : video.id
          )
          .map((video) => (
            <div className="onceVideo" key={video.id}>
              <input
                type="checkbox"
                checked={selectedVideos.includes(video.id)}
                onChange={(e) => handleVideoCheckboxChange(e, video.id)}
              />
              <span>{video.title}</span>
              <h5>{video.description}</h5>
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
            </div>
          ))}
      </div>
    </div>
  );
}

export default EditVideo;
