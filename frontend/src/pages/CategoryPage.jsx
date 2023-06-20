import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

function CategoryPage() {
  const { categoryName } = useParams();
  const [allVideos] = useContext(VideoContext);
  const categoryNameToIdMap = {
    Football: 1,
    Basketball: 2,
    Tennis: 3,
    Swimming: 4,
    Hockey: 5,
  };

  const categoryId = categoryNameToIdMap[categoryName];
  const shuffledVideos = [...allVideos].sort(() => Math.random() - 0.5);
  const getVideosByCategory = (idCategory) => {
    let categoryVideos = allVideos.filter(
      (video) => video.id_category === idCategory
    );
    if (!categoryVideos.length) {
      categoryVideos = shuffledVideos.slice(0, 3);
    }
    for (let i = 0; i < 3; i += 1) {
      categoryVideos.push(...categoryVideos);
    }
    return categoryVideos.slice(0, 15);
  };

  const videoElements = getVideosByCategory(categoryId).map((video, index) => (
    <div key={`${video.id}+${index * 4}`}>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <img src={video.thumbnail_url} alt={video.title} />
    </div>
  ));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{categoryName}</h1>
      {videoElements}
    </div>
  );
}

export default CategoryPage;
