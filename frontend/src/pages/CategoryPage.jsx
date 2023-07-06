import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";

function CategoryPage() {
  const { token } = useAuth();

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

  const videoElements = getVideosByCategory(categoryId).map((video) =>
    video.is_public || (!video.is_public && token) ? (
      <div key={video.id} className="thumbnail">
        <Link key={`${video.id}`} to={`/videos/${video.id}`}>
          <h2 className="legend">{video.title}</h2>
          <img
            src={video.thumbnail_url}
            alt={video.title}
            className="imgCategory"
          />
        </Link>
      </div>
    ) : (
      <div key={video.id} className="thumbnail">
        <Link to="/login">
          <h2 className="legend">
            Pour Voir {video.title} il faut se connecter
          </h2>
          <img src={Logo} alt="Connecte Toi" className="logo-f" />
        </Link>
      </div>
    )
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="titleCategory">{categoryName}</h1>
      <div className="thumbnails-container">{videoElements}</div>
    </div>
  );
}

export default CategoryPage;
