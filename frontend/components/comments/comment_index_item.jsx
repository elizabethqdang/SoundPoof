import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
		this.deleteComment = this.deleteComment.bind(this);
		this.userTrackButtons = this.userTrackButtons.bind(this);
  }

  deleteComment(e) {
		e.preventDefault(); 
		const { comment, track, deleteComment } = this.props;
		console.log("deleteComment", "comment", comment, "comment.id", comment.id);

    deleteComment(track.id, this.props.comment.id); 
  }

  userTrackButtons() {
		const { track, deleteComment, currentUser, id, comment } = this.props;
    
    if (currentUser.id === comment.user_id) {
      return (
				<div className='comment-info'>
					<div className="comment-timestamp">
						{moment(new Date(comment.created_at)).fromNow()}
					</div>
					<div className='comment-index-button' onClick={(e)=> this.deleteComment(e)}></div>
				</div>
      );}else{
        return (
					<div className='comment-info'>
						<div className="comment-timestamp">
							{moment(new Date(comment.created_at)).fromNow()}
						</div>
					</div>
        );}
  }
 
  render() {
			const { track, id, comment, currentUser, users } = this.props;

      return (
        <div className='posted-comment'>
          <a href={`/#/users/${comment.user_id}`}>
						<div className='comment-uploader-img'>
						<img src={comment.profileImgUrl ? comment.profileImgUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"}/> 
            </div>
					</a> 
					<div className='comment-uploader-body'>
							<a href={`/#/users/${comment.user_id}`}>
								<div className='comment-email'>{comment.commenterEmail}</div>
							</a> 
							<div className='comment-body'>{comment.body}</div>
					</div>
					{this.userTrackButtons()}
			</div>
    );
  }
}

export default CommentIndexItem;