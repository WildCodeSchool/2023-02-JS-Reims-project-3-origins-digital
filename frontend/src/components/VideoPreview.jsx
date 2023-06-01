import React from "react";
import PropTypes from "prop-types";

function VideoPreview({ video }) {
  return (
    <div className="video-preview">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </div>
  );
}

VideoPreview.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoPreview;
