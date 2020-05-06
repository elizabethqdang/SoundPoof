import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  
  }

  deleteComment(e) {
    e.preventDefault(); 
    let { id }= this.props;
    this.props.deleteComment(id); 
  }

  userTrackButtons() {
    const { track, deleteComment, currentUser, id, comment } = this.props;
    
    if (currentUser.id == comment.user_id) {
      return (
        <div className='comment-index-button' onClick={(e)=> this.deleteComment(e)}></div>
      );}else{
        return (
          <div></div> 
        );}
  }
 
  render() {

      let { track, id, comment } = this.props;
      let userButton = this.userTrackButtons(); 

      return (
            <div className='posted-comment'>
                <a href={`/#/users/${comment.user_id}`}><div className='comment-uploader-img'>
                    <img src={comment.user_id}/> 
                </div></a> 
                <div className='comment-uploader-body'>
                    <a href={`/#/users/${comment.user_id}`}><div>{comment.user_id}</div></a> 
                    <div>{comment.body}</div>
                </div>
                {userButton}
            </div>
        );
  }
}

export default CommentIndexItem;