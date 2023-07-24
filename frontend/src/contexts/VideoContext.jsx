import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const fetchVideos = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/videos`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  const value = useMemo(() => {
    return { videos, setVideos, fetchVideos };
  }, [videos]);

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
