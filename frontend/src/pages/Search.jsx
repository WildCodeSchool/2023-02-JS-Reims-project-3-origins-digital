import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

function Search() {
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
          {resultsVideos.map((video) => (
            <div key={video.id} className="thumbnail">
              <h2 className="legend">{video.title}</h2>
              <img
                className="imgCategory"
                src={video.thumbnail_url}
                alt={video.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune vidéo trouvée pour la recherche</p>
      )}
    </div>
  );
}

export default Search;
