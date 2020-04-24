import React from 'react';
import _ from 'lodash';
// import StreamIndex from '../stream/stream_index';

class UserStream extends React.Component {
  filterSongs() {
    const { tracks, user } =  this.props;
    const trackIds = user.trackIds;

    this.trackActions = { [user.id]: [] };
    if (trackIds) {
      _.values(tracks).forEach((track) => {
        if (track.uploaderId === user.id) {
          this.trackActions[user.id].push([track, track.createdAt]);
        }
        // if (user.repostedSongIds.has(track.id)) {
        //   const createdAt = user.reposts[track.id];
        //   this.trackActions[user.id].push([track, createdAt]);
        // }
      }, this);
    } else {
      this.trackActions = {};
    }
  }

  render() {
    this.filterSongs();

    return (
      <main className="user-main border-right-light">
        <div className="user-main-stream">
          <li className="stream-index-item">
        <div className="stream-index-item-body">
          <div className="stream-index-item-artwork">
            <a href="#" className="stream-index-item-cover-art">
              <div className="stream-index-item-cover-art-bg">
                <span className="stream-index-item-cover-art-true-image" style={coverImage}>Sound Cover Image</span>
              </div>
            </a>
          </div>
          <div className="stream-index-item-content">
            <div className="stream-index-item-header">
              <div className="sound-title-container">
                <div onClick={handleTogglePlayback} className={`bc-btn sound-title-play-btn ${paused}`}></div>
                <div className="sound-title-info-container">
                  <div className="sound-title-info-first">
                    {this.usernames()}
                  </div>
                  <a className="sound-title-info-second">{track.title}</a>
                  <div className="sound-title-info-third">
                    <div className="sound-title-info-upload-time">{FormatUtil.timeSince(createdAt)}</div>
                    {/* <a className="tag-container tag-small">
                      <span className="truncate sound-title-info-tag">Electronic</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="sound-waveform">
              <div className="waveform loaded">

              </div>
            </div>

            <div className="sound-footer">
              <div className="sound-actions">
                <LikeToggle type="STREAM_INDEX_ITEM" track={track}/>
                <RepostToggle type="STREAM_INDEX_ITEM" track={track}/>
                <button onClick={addToNextUp.bind(null, track.id)} type="button" className="bc-btn sound-actions-btn action-next-up">Add to Next up</button>
              </div>
              <div className="sound-stats">
                <div className="sound-stats-plays">{FormatUtil.formatPlays(track.plays)}</div>
                {/* <div className="sound-stats-comments">1</div> */}
              </div>
            </div>
          </div>
        </div>
      </li>
					{/* <StreamIndex
            trackActions={this.trackActions}
            users={this.props.users}
            togglePlayback={this.props.togglePlayback}
            receivePlaybackSong={this.props.receivePlaybackSong}
            addToNextUp={this.props.addToNextUp}
            currentSongId={this.props.currentSongId}
            playing={this.props.playing}
            currentUser={this.props.currentUser}
            createRepost={this.props.createRepost}
            deleteRepost={this.props.deleteRepost}
          /> */}
          {/* <div className="user-main-stream-loading"></div> */}
        
				
				</div>
      </main>
    );
  }
}

export default UserStream;