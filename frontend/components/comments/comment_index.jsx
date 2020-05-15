import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	trackComments() {
		let { track, comments, currentUser, deleteComment } = this.props;
		if (comments) { 
			return (
				track.comments.map(id => (
				<CommentIndexItem key={id} track={track} currentUser={currentUser} id={id} deleteComment={deleteComment} comment={comments[id]} />
				)));
		} else {
			return (
				<div></div>
			)
		}
	}

	render() {
		// let { track, comments, currentUser, deleteComment } = this.props;
		// let trackComments = track.comments.map(id => (
		// 	<CommentIndexItem key={id} track={track} currentUser={currentUser} id={id} deleteComment={deleteComment} comment={comments[id]} />
		// ));

		return (
			<div className='tsc-container'>
				{this.trackComments()}
				{/* { trackComments } */}
			</div>
		);
	}

}

export default CommentIndex; 