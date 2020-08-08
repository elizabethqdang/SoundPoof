json.extract! comment, :id, :body, :user_id, :track_id, :created_at

json.id comment.id
json.body comment.body
json.user_id comment.user.id
json.track_id comment.track.id
json.created_at comment.created_at

json.profileImgUrl url_for(comment.user.profile_image)
json.commenterEmail url_for(comment.user.email)