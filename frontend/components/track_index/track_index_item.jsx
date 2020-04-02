import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TrackIndexItem = ({ track }) => (
  <li>
		<div className="track-item-header">
			<Link to={`/tracks/${track._id}`}></Link>
		</div>

		<div className="track-item-artwork"><img src=
			{track.thumbnail_image_urls ? spot.thumbnail_image_urls[0] : ''} alt= "Track Artwork" />
		</div>

		<div className="track-item-info">
			<p>Artist</p>
			<p>Track Title</p>
		</div>

		<div className="track-item-waveform">
		</div>

		<div className="track-item-footer">

		</div>
  </li>
)

export default withRouter(TrackIndexItem);