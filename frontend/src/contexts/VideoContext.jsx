import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/videos`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  const value = useMemo(() => {
    return { videos, setVideos };
  }, [videos]);

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
