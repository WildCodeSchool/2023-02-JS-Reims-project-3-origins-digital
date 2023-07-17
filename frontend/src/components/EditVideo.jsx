import React, { useState, useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

function EditVideo() {
  const { videos, setVideos } = useContext(VideoContext);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [updatedVideoData, setUpdatedVideoData] = useState({
    title: "",
    description: "",
    url: "",
    thumbnail_url: "",
    time: "",
    id_category: "",
  });
  const [message, setMessage] = useState("");

  const handleVideoCheckboxChange = (event, videoId) => {
    if (event.target.checked) {
      setSelectedVideos([videoId]);
      const selectedVideo = videos.find((video) => video.id === videoId);
      setUpdatedVideoData((prevData) => ({
        ...prevData,
        title: selectedVideo.title,
        description: selectedVideo.description,
        url: selectedVideo.url,
        thumbnail_url: selectedVideo.thumbnail_url,
        time: selectedVideo.time,
        id_category: selectedVideo.id_category.toString(),
      }));
    } else {
      setSelectedVideos([]);
      setUpdatedVideoData({
        title: "",
        description: "",
        url: "",
        thumbnail_url: "",
        time: "",
        id_category: "",
      });
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setUpdatedVideoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateVideos = async () => {
    try {
      await Promise.all(
        selectedVideos.map(async (videoId) => {
          await fetch(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
            }/videos
          /${videoId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedVideoData),
            }
          );
        })
      );

      setVideos((prevVideos) =>
        prevVideos.map((video) => {
          if (selectedVideos.includes(video.id)) {
            return {
              ...video,
              ...updatedVideoData,
            };
          }
          return video;
        })
      );

      setSelectedVideos([]);
      setUpdatedVideoData({
        title: "",
        description: "",
        url: "",
        thumbnail_url: "",
        time: "",
        id_category: "",
      });
      setMessage("Vidéo modifiée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la modification des vidéos :", error);
    }
  };

  return (
    <div className="edit-video-container">
      <h1>Modifier une vidéo</h1>

      <div>
        <label htmlFor="updatedTitle">Nouveau titre :</label>
        <input
          type="text"
          id="updatedTitle"
          name="title"
          value={updatedVideoData.title}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="updatedDescription">Nouvelle description :</label>
        <textarea
          id="updatedDescription"
          name="description"
          value={updatedVideoData.description}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="updatedUrl">Nouvelle URL :</label>
        <input
          type="text"
          id="updatedUrl"
          name="url"
          value={updatedVideoData.url}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="updatedThumbnailUrl">Nouvelle URL de vignette :</label>
        <input
          type="text"
          id="updatedThumbnailUrl"
          name="thumbnail_url"
          value={updatedVideoData.thumbnail_url}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="updatedTime">Nouveau temps :</label>
        <input
          type="text"
          id="updatedTime"
          name="time"
          value={updatedVideoData.time}
          onChange={handleFieldChange}
        />
      </div>

      <div>
        <label htmlFor="updatedCategoryId">Nouvel ID de catégorie :</label>
        <input
          type="text"
          id="updatedCategoryId"
          name="id_category"
          value={updatedVideoData.id_category}
          onChange={handleFieldChange}
        />
      </div>

      <button type="button" onClick={handleUpdateVideos}>
        Modifier les vidéos sélectionnées
      </button>

      {videos.map((video) => (
        <div key={video.id}>
          <input
            type="checkbox"
            checked={selectedVideos.includes(video.id)}
            onChange={(e) => handleVideoCheckboxChange(e, video.id)}
          />
          <span>{video.title}</span>
          <p>{video.description}</p>
        </div>
      ))}

      {message && <p>{message}</p>}
    </div>
  );
}

export default EditVideo;
