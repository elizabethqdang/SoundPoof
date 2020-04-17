import React from "react";
import { Link } from "react-router";


const commentList = (comments = []) =>
	comments.map(comment => <CommentShow comment={comment} key={comment.id} />);

const TrackDetail = ({ track }) => {
	return (
		<div>
			<ul className="bench-list">
				{/* <img className="index-image" src={track.artwork_url} /> */}
				{/* <li>Comments: {track.comment || "No reviews yet"}</li> */}
				<li>Title: {track.title}</li>
				<li>Artist: {track.artist}</li>
			</ul>
			<br />
			<div className="reviews">
				<h3>Comments</h3>
				{/* {commentList(track.comments)} */}
			</div>
		</div>
	);
};

export default TrackDetail;
