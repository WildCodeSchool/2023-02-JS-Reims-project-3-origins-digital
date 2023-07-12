import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const LikedVideosContext = createContext();

function LikedVideosProvider({ children }) {
  const [likedVideos, setLikedVideos] = useState([]);

  const addLikedVideo = (video) => {
    setLikedVideos([...likedVideos, video]);
  };

  const removeLikedVideo = (videoId) => {
    setLikedVideos(likedVideos.filter((video) => video.id !== videoId));
  };

  const isVideoLiked = (videoId) => {
    return likedVideos.some((video) => video.id === videoId);
  };

  const contextValue = useMemo(() => {
    return { likedVideos, addLikedVideo, removeLikedVideo, isVideoLiked };
  }, [likedVideos]);

  return (
    <LikedVideosContext.Provider value={contextValue}>
      {children}
    </LikedVideosContext.Provider>
  );
}
LikedVideosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { LikedVideosProvider, LikedVideosContext };
