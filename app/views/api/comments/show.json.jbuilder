json.extract! @comment, :id, :body, :user_id, :track_id, :created_at
json.id @comment.id
json.created_at @comment.created_at
json.user_id @comment.user.id
json.track_id @comment.track.id
json.profileUrl url_for(@comment.user.profile_image)
json.commenterEmail @comment.user.email