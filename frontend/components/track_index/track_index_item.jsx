import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TrackIndexItem = ({ track }) => (
  <li className="track-item-container">
		<div className="track item1 header">
			<Link to={`/tracks/${track._id}`}></Link>
		</div>

		<div className="track item2 artwork">
			<img src=
			{track.artwork_url ? track.artwork_url : ''} alt= "Track Artwork" />
		</div>

		<div className="track item3 info">
			<p>Artist {track.artist}</p>
			<p>Track Title{track.title}</p>
		</div>

		<div className="track item4 waveform">
		</div>

		<div className="track item5 footer">

		</div>
  </li>
)

export default withRouter(TrackIndexItem);