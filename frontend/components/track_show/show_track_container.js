import { connect } from "react-redux";

import { fetchTrack } from "../../actions/track_actions";
// import { selectCommentsForTrack, selectTrack } from "../../reducers/selectors";
import ShowTrack from "./show_track";

const mapStateToProps = (state, { match }, ownProps) => {
  const trackId = parseInt(match.params.trackId);
  // const track = selectTrack(state.entities, trackId);
  // const comments = selectCommentsForTrack(state.entities, track);
  return {
		trackId,
		// track,
		// comments
	};
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrack);
