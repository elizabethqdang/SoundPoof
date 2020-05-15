json.extract! @comment, :id, :body, :user_id, :track_id
json.commenterProfileUrl url_for(@comment.user.profile_image)
json.commenterEmail @comment.user.email