import React from "react";
import { Link } from "react-router-dom";

import TrackDetail from "./track_detail";
import TrackMap from "../track_map/track_map";
import CommentFormContainer from "./comment_form_container";
import { ProtectedRoute } from "../../util/route_util";
import { CommentLink } from "../../util/link_util";

const TrackShow = ({ track, trackId, fetchTrack, comments }) => {
  const tracks = {
    [trackId]: track
  };

  return (
    <div className="single-track-show">
      <div className="single-track-map">
        <Link to="/">Back to Track Index</Link>
        <TrackMap
          tracks={tracks}
          trackId={trackId}
          singleTrack={true}
          fetchTrack={fetchTrack}
        />
      </div>
      <div className="right-half track-details">
        <TrackDetail track={track} comments={comments} />
        <CommentLink
          component={CommentFormContainer}
          to={`/tracks/${trackId}/comment`}
          label="Leave a Comment"
        />
        <ProtectedRoute
          path="/tracks/:trackId/comment"
          component={CommentFormContainer}
        />
      </div>
    </div>
  );
};

export default TrackShow;
