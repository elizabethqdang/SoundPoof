# json.extract! user, :id, :track_ids, :username, :email, :bio, :location

json.id user.id
json.email user.email
json.username user.username
json.bio user.bio
json.location user.location
# json.trackIds user.track_ids
json.likedTrackIds user.liked_track_ids
# json.tracks user.tracks
# json.commentedTrackIds user.commented_track_ids
json.commentIds user.comments.pluck(:id)

json.trackIds user.tracks.pluck(:id)
# json.trackUserId user.tracks.pluck(:user_id)

json.profile_image_url url_for(user.profile_image)
json.bannerUrl asset_path(user.banner.url)
json.profileUrl asset_path(user.profile.url)

	# if user.profile_image.attached?
	# 		json.profile_image_url url_for(user.profile_image)
	# else
	# 	json.profile_image_url 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpg'
	# end