import React, { useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";
import Logo from "../images/logo RGB Original Digital.png";
import { useAuth } from "../contexts/AuthContext";

function Search() {
  const { token } = useAuth();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { videos } = useContext(VideoContext);
  const resultsVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Les résultats de la recherche: {query}</h1>
      {resultsVideos.length > 0 ? (
        <div className="thumbnails-container">
          {resultsVideos.map((video) =>
            video.is_public || (!video.is_public && token) ? (
              <Link
                key={`${video.id}`}
                to={`/videos/${video.id}`}
                style={{ textDecoration: "none" }}
              >
                <h2 className="legend">{video.title}</h2>
                <img
                  className="imgCategory"
                  src={video.thumbnail_url}
                  alt={video.title}
                />
              </Link>
            ) : (
              <Link to="/login">
                <h2 className="legend">
                  Pour regarder {video.title} il faut se connecter.
                </h2>
                <img src={Logo} alt="Connecte Toi" className="logo-f" />
              </Link>
            )
          )}
        </div>
      ) : (
        <p>Aucune vidéo trouvée pour la recherche</p>
      )}
    </div>
  );
}

export default Search;
