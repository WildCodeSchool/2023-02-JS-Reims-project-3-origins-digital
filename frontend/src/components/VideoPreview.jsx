import React from "react";
import PropTypes from "prop-types";

function VideoPreview({ video }) {
  return (
    <figure className="video-preview">
      <img src={video.thumbnail} alt={video.title} />
      <figcaption className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </figcaption>
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
