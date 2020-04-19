import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrackPlay from './track_play';
import TrackDetail from '../track_show/track_detail';

const showTrack = () => (
	track = track,
	// user = track.user_id,
	window.location.hash = `/tracks/${track.id}`
);

const showUser = () => (
	track = this.props.track,
	user = track.user_id,
	window.location.hash = `/users/${track.user_id}`
);

const TrackIndexItem = ({ track, user }) => (
		<li className="track-container">
			<img onClick={showTrack} src={track.artwork_url}></img>
			<ul className='track-info'>
				{/* <TrackPlay track={track} showTrack={showTrack} /> */}
				<ul className='track-play-info'>
					<ul className='track-play-name'>
						{/* <li><span className='track-artist' onClick={showUser}>{track.artist}</span></li>
						<li><span className='track-title' onClick={showTrack}>{track.title}</span></li> */}
						<li><Link to={`/users/${track.user_id}`}>{track.artist}</Link></li>
						<li><Link to={`/tracks/${track.id}`}>{track.title}</Link></li>
					</ul>
					<span className='track-genre'>#{track.user_id}</span>
				</ul>

				<div className='waveform-box'>
					{/* <div id={`waveform-${this.props.track.id}`}>
					</div> */}
				</div>
				<TrackDetail track={track} comments={track.comments} />
				</ul>
			</li>
		);

export default withRouter(TrackIndexItem);