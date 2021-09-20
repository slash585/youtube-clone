import React from 'react'
import Avatar from '@material-ui/core/Avatar'

import './video-card.css'

function VideoCard({ image, title, channel, timestamp, views, channelImage }) {
  return (
    <div className="video-card">
      <img className="video-tumbnail" alt={title} src={image} />
      <div className="video-info">
        <Avatar className="video-avatar" alt={channel} src={channelImage} />
        <div className="video-text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} + {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
