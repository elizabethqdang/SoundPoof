import React from 'react';

class TrackLikes extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleLike = this.handleToggleLike.bind(this);
	}

	handleToggleLike(e) {
		e.preventDefault();
		const { track, deleteLike, createLike, currentUser } = this.props;

		if (!currentUser) {
			this.props.history.push('/login');
			return;
		}

		if (currentUser.likedTrackIds.includes(track.id)) {
			deleteLike(track.id);
		} else {
			createLike(track.id);
		}
	}

	render() {
		const { track, currentUser } = this.props;
		console.log(track.id);

		if (currentUser && !currentUser.likedTrackIds) { return null; }

		const likeActive = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'active' : '');
		// const likeText = ((currentUser && currentUser.likedTrackIds.includes(track.id)) ? 'Liked' : 'Like');

		let content;
		// switch (type) {
		// 	case 'STREAM_INDEX_ITEM':
				content = <button onClick={this.handleToggleLike} type="button" className={`bc-btn sound-actions-btn action-like ${likeActive}`}>{track.numLikes}</button>;
			// 	break;
			// case 'QUEUE_ITEM':
			// 	content = <button onClick={this.handleToggleLike} className={`bc-btn playable-like-btn queue-like-btn ${likeActive}`}>Like</button>;
			// 	break;
			// case 'QUEUE_ITEM_ACTION':
			// 	content = <button onClick={this.handleToggleLike} className={`more-actions-btn more-like-btn ${likeActive}`}>{likeText}</button>;
			// 	break;
			// case 'PLAY_BAR':
			// 	content = <div onClick={this.handleToggleLike} className={`playbar-like ${likeActive}`}></div>;
			// 	break;
		// }

		return (
			content
		);
	}
}

export default TrackLikes;