import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TrackLikes from './track_likes';
// import RepostIconContainer from '../icons/repost_container';
// import MoreOptionsContainer from '../more_options_container';

class TrackDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isActive: '' };
	}

	// showRepost() {
	// 	let path = this.props.location.pathname;
	// 	if (path.slice(path.length - 7) !== 'reposts') {
	// 		return <RepostIconContainer track={this.props.track} />;
	// 	}
	// }

	render() {
		let track = this.props.track;
		return (
			<li className="track-detail">
				<ul>
					<TrackLikes favoritable={track} />
					{/* {this.showRepost()} */}
					<li tabIndex='0' onBlur={this.closeOptions} className='more-options' onClick={this.toggleOptions} >
						<div className='ellipses-icon' />
						<span className='song-options'>More</span>
						{/* {options} */}
					</li>
					{/* <MoreOptionsContainer track={this.props.track} /> */}
				</ul>
				<ul>
					<li>
						<div className='comment-icon' />
						<span>{this.props.comments}</span>
					</li>
				</ul>
			</li>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	deleteSong: id => dispatch(deleteSong(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackDetail));