import { connect } from "react-redux";

import { fetchTrack } from "../../actions/track_actions";
// import { selectCommentsForTrack, selectTrack } from "../../reducers/selectors";
import TrackShow from "./track_show";

const mapStateToProps = (state, { match }) => {
  const trackId = parseInt(match.params.trackId);
  const track = selectTrack(state.entities, trackId);
  const comments = selectCommentsForTrack(state.entities, track);
  return {
    trackId,
    track,
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
