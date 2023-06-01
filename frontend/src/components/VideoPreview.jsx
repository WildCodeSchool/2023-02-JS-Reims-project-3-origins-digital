import React from "react";
import PropTypes from "prop-types";

function VideoPreview({ video }) {
  return (
    <figure className="video-preview">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </figure>
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
