json.extract! @comment, :id, :body, :user_id, :track_id, :created_at

json.id @comment.id
json.created_at @comment.created_at
json.body @comment.body
json.user_id @comment.user.id
json.track_id @comment.track.id

# json.profileImgUrl url_for(@comment.user.profile_image)
json.commenterEmail @comment.user.email

if @comment.user.profile_image.attached?
	json.profileImgUrl url_for(@comment.user.profile_image)
else
	json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'
end