import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
        <div className='comment-index-button' onClick={(e)=> this.deleteComment(e)}></div>
      );}else{
        return (
          <div></div> 
        );}
  }
 
  render() {
			const { track, id, comment, currentUser, users } = this.props;
			// console.log("comment", comment);
			// console.log("currentUser", currentUser);
			// console.log("track", track);
			// console.log("users", users);

      return (
            <div className='posted-comment'>
                <a href={`/#/users/${comment.user_id}`}><div className='comment-uploader-img'>
						<img src={comment.profileUrl ? comment.profileUrl : "https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg"}/> 
                </div></a> 
                <div className='comment-uploader-body'>
                    <a href={`/#/users/${comment.user_id}`}><div>{comment.commenterEmail}</div></a> 
                    <div>{comment.body}</div>
                </div>
                {this.userTrackButtons()}
            </div>
        );
  }
}

export default CommentIndexItem;