import { connect } from 'react-redux';
import { fetchTracks, fetchUsers } from '../../actions/search_actions';
import SearchBar from './search_bar_container';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: query => dispatch(fetchTracks(query)),
  fetchUsers: query => dispatch(fetchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);