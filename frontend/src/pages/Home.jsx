import React, { useState, useEffect, useContext } from "react";
import VideoCarousel from "../components/VideoCarousel";
import { VideoContext } from "../contexts/VideoContext";

function Home() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const { videos } = useContext(VideoContext);

  useEffect(() => {
    const shuffledVideos = [...videos].sort(() => Math.random() - 0.5);
    const suggestions = shuffledVideos.slice(0, 15);
    setSuggestedVideos(suggestions.slice(0, 15));
  }, [videos]);

  const getVideosByCategory = (idCategory) => {
    const categoryVideos = videos.filter(
      (video) => video.id_category === idCategory
    );
    return categoryVideos.slice(0, 15);
  };

  const footballVideos = getVideosByCategory(1);
  const basketballVideos = getVideosByCategory(2);
  const tennisVideos = getVideosByCategory(3);
  const natationVideos = getVideosByCategory(4);
  const hockeyVideos = getVideosByCategory(5);

  return (
    <div>
      <VideoCarousel
        slideNumber={3}
        videos={suggestedVideos}
        name="Suggestions"
      />
      <VideoCarousel slideNumber={3} videos={footballVideos} name="Football" />
      <VideoCarousel
        slideNumber={3}
        videos={basketballVideos}
        name="Basketball"
      />
      <VideoCarousel slideNumber={3} videos={tennisVideos} name="Tennis" />
      <VideoCarousel slideNumber={3} videos={natationVideos} name="Natation" />
      <VideoCarousel slideNumber={3} videos={hockeyVideos} name="Hockey" />
    </div>
  );
}

export default Home;
