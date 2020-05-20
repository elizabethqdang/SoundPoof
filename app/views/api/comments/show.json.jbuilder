json.extract! @comment, :id, :body, :user_id, :track_id
json.user_id @comment.user.id
json.track_id @comment.track.id
json.profileUrl url_for(@comment.user.profile_image)
json.commenterEmail @comment.user.email