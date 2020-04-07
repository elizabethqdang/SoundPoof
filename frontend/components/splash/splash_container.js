import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Splash from "./splash";

const mapStateToProps = (state, { session, entities }) => {
	return {
		// currentUser: state.entities.users[state.session.id],
		loggedIn: Boolean(state.session.id)
	};
};

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
