import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

function CategoryPage() {
  const { categoryName } = useParams();
  const { videos } = useContext(VideoContext);
  const categoryNameToIdMap = {
    Football: 1,
    Basketball: 2,
    Tennis: 3,
    Natation: 4,
    Hockey: 5,
  };

  const categoryId = categoryNameToIdMap[categoryName];
  const shuffledVideos = [...videos].sort(() => Math.random() - 0.5);
  const getVideosByCategory = (idCategory) => {
    let categoryVideos = videos.filter(
      (video) => video.id_category === idCategory
    );
    if (!categoryVideos.length) {
      categoryVideos = shuffledVideos.slice(0, 15);
    }
    return categoryVideos.slice(0, 15);
  };

  const videoElements = getVideosByCategory(categoryId).map((video) => (
    <div key={video.id} className="thumbnail">
      <h2 className="legend">{video.title}</h2>
      <img
        src={video.thumbnail_url}
        alt={video.title}
        className="imgCategory"
      />
    </div>
  ));

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="titleCategory">{categoryName}</h1>
      <div className="thumbnails-container">{videoElements}</div>
    </div>
  );
}

export default CategoryPage;
