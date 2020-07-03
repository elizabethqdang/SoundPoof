import React from 'react';

class UserSearchResult extends React.Component {
	constructor(props) {
		super(props);
		this.userSearchResult = this.userSearchResult.bind(this);
	}

	userSearchResult() {
	}

	render() {
		return (
			<li className='search-show collection-show'>
				<img onClick={this.userSearchResult} src={this.props.user.profileImgUrl || ""} />
				<span onClick={this.userSearchResult}>{this.props.user.email}</span>
			</li>
		);
	}
}

export default UserSearchResult;