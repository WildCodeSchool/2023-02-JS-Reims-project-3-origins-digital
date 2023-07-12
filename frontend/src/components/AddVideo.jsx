import React, { useState } from "react";

function AddVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [time, setTime] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [message, setMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleThumbnailUrlChange = (event) => {
    setThumbnailUrl(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleAddVideo = async () => {
    try {
      const response = await fetch("http://localhost:5002/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          url,
          thumbnail_url: thumbnailUrl,
          time,
          id_category: categoryId,
        }),
      });

      if (response.ok) {
        setMessage("Vidéo ajoutée avec succès !");
        setTitle("");
        setDescription("");
        setUrl("");
        setThumbnailUrl("");
        setTime("");
        setCategoryId("");
      } else {
        throw new Error("Erreur lors de l'ajout de la vidéo");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la vidéo :", error);
    }
  };

  return (
    <div>
      <h2>Ajouter une vidéo</h2>

      <div>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description :</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div>
        <label htmlFor="url">URL :</label>
        <input type="text" id="url" value={url} onChange={handleUrlChange} />
      </div>

      <div>
        <label htmlFor="thumbnailUrl">URL de la vignette :</label>
        <input
          type="text"
          id="thumbnailUrl"
          value={thumbnailUrl}
          onChange={handleThumbnailUrlChange}
        />
      </div>

      <div>
        <label htmlFor="time">Durée :</label>
        <input type="text" id="time" value={time} onChange={handleTimeChange} />
      </div>

      <div>
        <label htmlFor="categoryId">ID de catégorie :</label>
        <input
          type="text"
          id="categoryId"
          value={categoryId}
          onChange={handleCategoryIdChange}
        />
      </div>

      <button type="button" onClick={handleAddVideo}>
        Ajouter la vidéo
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddVideo;
