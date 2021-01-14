import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
		this.trackComments = this.trackComments.bind(this);
	}

	trackComments() {
		const { track, comments, currentUser, deleteComment, users } = this.props;
		if (comments) { 
			return (
				(track.comments).map((comment, idx) => (
				<CommentIndexItem id={comment.id} key={idx} track={track} currentUser={currentUser} deleteComment={deleteComment} comment={comment} users={users} />
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