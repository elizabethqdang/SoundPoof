import React from "react";
import { connect } from "react-redux";
import { receiveCurrentTrack, fetchTrack } from "../../actions/track_actions";
import UserShowPage from "../user/user_show_page";
// import {
// 	playSong,
// 	pauseSong,
// 	updateCurrentSongTime,
// 	resetCurrentSong
// } from "../../actions/current_song_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
	return {
		user: state.entities.users[ownProps.match.params.userId],
		currentUserId: state.session.id,
		tracks:
			Object.values(state.entities.tracks).length >= 1
				? Object.values(state.entities.tracks).filter(track => {
						return track.user_id === parseInt(ownProps.match.params.userId);
				  })
				: Object.values(state.entities.tracks),
		// playing: state.ui.currentSong.playing,
		// currentSongId: state.ui.currentSong.id
	};
};

const mdp = dispatch => ({
	// updateUser: user => dispatch(updateUser(user)),
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	fetchUser: id => dispatch(fetchUser(id)),
	// playSong: () => dispatch(playSong()),
	// pauseSong: () => dispatch(pauseSong()),
	// updateCurrentSongTime: time => dispatch(updateCurrentSongTime(time)),
	// resetCurrentSong: () => dispatch(resetCurrentSong()),
	receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track))
});

export default connect(msp, mdp)(UserShowPage);