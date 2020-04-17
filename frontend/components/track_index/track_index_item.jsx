import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TrackIndexItem = ({ track }) => (
		<li className="track-item-container">
				<div className="track item1 header">
					<Link to={`/tracks/${track.id}`}></Link>
				</div>

				<div className="track item2 artwork">
					<img src=
					{track.artworkUrl ? track.artworkUrl : ''} alt= "Track Artwork" />
				</div>

				<div className="track item3 info">
					<div className="">{track.artist}</div>
					<Link to={`/users/${track.user_id}`}>{track.artist}</Link>
					<Link to={`/tracks/${track.id}`}>{track.title}</Link>
				</div>

				<div className="track item4 waveform">
				</div>

				<div className="track item5 footer">

				</div>
			</li>
		);

export default withRouter(TrackIndexItem);