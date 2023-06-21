import React, { useState, useEffect } from "react";
import VideoCarousel from "../components/VideoCarousel";

function Home() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/videos`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const shuffledVideos = [...data].sort(() => Math.random() - 0.5);
        const suggestions = shuffledVideos.slice(0, 3);
        for (let i = 0; i < 3; i += 1) {
          suggestions.push(...suggestions);
        }
        setAllVideos(data);
        setSuggestedVideos(suggestions.slice(0, 15));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const getVideosByCategory = (idCategory) => {
    const categoryVideos = allVideos.filter(
      (video) => video.id_category === idCategory
    );
    for (let i = 0; i < 3; i += 1) {
      categoryVideos.push(...categoryVideos);
    }
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
        carouselConfig={{ autoPlay: true }}
      />
      <VideoCarousel
        slideNumber={4}
        videos={footballVideos}
        name="Football"
        carouselConfig={{ autoPlay: false }}
      />
      <VideoCarousel
        slideNumber={4}
        videos={basketballVideos}
        name="Basketball"
        carouselConfig={{ autoPlay: false }}
      />
      <VideoCarousel
        slideNumber={4}
        videos={tennisVideos}
        name="Tennis"
        carouselConfig={{ autoPlay: false }}
      />
      <VideoCarousel
        slideNumber={4}
        videos={swimmingVideos}
        name="Swimming"
        carouselConfig={{ autoPlay: false }}
      />
      <VideoCarousel
        slideNumber={4}
        videos={hockeyVideos}
        name="Hockey"
        carouselConfig={{ autoPlay: false }}
      />
    </div>
  );
}

export default Home;
