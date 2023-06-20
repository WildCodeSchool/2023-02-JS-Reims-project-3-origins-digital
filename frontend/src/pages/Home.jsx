import React, { useState, useEffect, useContext } from "react";
import VideoCarousel from "../components/VideoCarousel";
import { VideoContext } from "../contexts/VideoContext";

function Home() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [allVideos] = useContext(VideoContext);

  useEffect(() => {
    const shuffledVideos = [...allVideos].sort(() => Math.random() - 0.5);
    const suggestions = shuffledVideos.slice(0, 15);
    setSuggestedVideos(suggestions.slice(0, 15));
  }, [allVideos]);

  const getVideosByCategory = (idCategory) => {
    const categoryVideos = allVideos.filter(
      (video) => video.id_category === idCategory
    );
    return categoryVideos.slice(0, 15);
  };

  const footballVideos = getVideosByCategory(1);
  const basketballVideos = getVideosByCategory(2);
  const tennisVideos = suggestedVideos;
  const swimmingVideos = suggestedVideos;
  const hockeyVideos = suggestedVideos;

  return (
    <div>
      <VideoCarousel
        slideNumber={3}
        videos={suggestedVideos}
        name="Suggestions"
      />
      <VideoCarousel slideNumber={4} videos={footballVideos} name="Football" />
      <VideoCarousel
        slideNumber={4}
        videos={basketballVideos}
        name="Basketball"
      />
      <VideoCarousel slideNumber={4} videos={tennisVideos} name="Tennis" />
      <VideoCarousel slideNumber={4} videos={swimmingVideos} name="Swimming" />
      <VideoCarousel slideNumber={4} videos={hockeyVideos} name="Hockey" />
    </div>
  );
}

export default Home;
