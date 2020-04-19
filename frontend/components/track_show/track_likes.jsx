import React from 'react';

class TrackLikes extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isFavorited: 0, isActive: '' };
		this.addFavorite = this.addFavorite.bind(this);
	}

	findUserFavorite(array, user) {
		if (array === undefined) return false;
		for (let i = 0; i < array.length; i++) {
			if (array[i].user_id === user.id) {
				return true;
			}
		}
		return false;
	}

	componentWillReceiveProps(nextProps) {
		let favorite = nextProps.favoritable;
		if (this.findUserFavorite(favorite.favorites, nextProps.currentUser)) {
			this.setState({ isFavorited: 1, isActive: 'active' });
		} else {
			this.setState({ isFavorited: 0, isActive: '' });
		}
	}

	componentDidMount() {
		let favorite = this.props.favoritable;
		if (this.findUserFavorite(favorite.favorites, this.props.currentUser)) {
			this.setState({ isFavorited: 1, isActive: 'active' });
		}
	}

	addFavorite() {
		let user = this.props.currentUser;
		let favoritable = this.props.favoritable;

		if (this.state.isFavorited === 1) {
			let favorite = this.props.favoritable.favorites.find(fav => (
				fav.user_id === this.props.currentUser.id
			));

			this.props.deleteFavorite(favorite.id)
				.then(() => this.props.fetchSelectedRandomSong(this.props.favoritable.id));
		} else {
			this.props.createFavorite(user, favoritable)
				.then(() => this.props.fetchSelectedRandomSong(this.props.favoritable.id));
		}
	}


	render() {
		let favorites = this.props.favoritable.favorites || [];
		return (
			<li onClick={this.addFavorite} className={`favorite ${this.state.isActive}`}>
				<div className={`heart-icon ${this.state.isActive}`} />
				<span className={`favorite ${this.state.isActive}`}>
					{`${favorites.length}`}
				</span>
			</li>
		);
	}
}

export default TrackLikes;