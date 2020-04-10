import React from "react";
import { connect } from "react-redux";
import { receiveCurrentTrack, fetchTrack } from "../../actions/track_actions";
import TrackShowPage from "./track_show_page";
// import {
// 	playSong,
// 	pauseSong,
// 	updateCurrentSongTime,
// 	resetCurrentSong
// } from "../../actions/current_song_actions";
// import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, {match}, ownProps) => {
  const trackId = parseInt(match.params.trackId);
	return {
		currentUser: state.entities.users[state.session.id],
		currentUserId: state.session.id,
		// currentTrack: state.entities.tracks[state.ui.currentTrack.id],
		track: state.entities.tracks[ownProps.match.params.trackId],
		// playing: state.ui.currentSong.playing,
		// comments: state.entities.comments
		userId: state.session.id,
		// uploaderId: state.session.id
		trackId
	};
};

const mapDispatchToProps = dispatch => ({
	// fetchComments: songId => dispatch(fetchComments(songId)),
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	// playSong: () => dispatch(playSong()),
	// pauseSong: () => dispatch(pauseSong()),
	// updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	// resetCurrentSong: () => dispatch(resetCurrentSong()),
	// receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShowPage);
