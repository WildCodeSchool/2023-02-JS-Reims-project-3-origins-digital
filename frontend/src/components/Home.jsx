import React from "react";
import VideoSlider from "./VideoSlider";

function Home() {
  const videos = [
    "https://youtu.be/p5RKLMMb5u4",
    "https://youtu.be/_GMJH85RgVA",
    "https://youtu.be/kHsum3xHplA",
    "https://youtu.be/Gdgp0exjN8I",
    "https://youtu.be/mwIkAbAa9ec",
    "https://youtu.be/zvq7GJQb2Sw",
    "https://youtu.be/Myh74zZ4zi8",
    "https://youtu.be/Dgi5XGB2rnA",
    "https://youtu.be/w_xyfEkKep8",
  ];
  return (
    <div>
      <VideoSlider slideNumber={3} videos={videos} name="Suggestions" />
      <VideoSlider slideNumber={4} videos={videos} name="FOOTBALL" />
      <VideoSlider slideNumber={4} videos={videos} />
    </div>
  );
}

export default Home;
