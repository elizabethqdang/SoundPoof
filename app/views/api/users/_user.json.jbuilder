json.extract! user, :id, :email, :username, :bio, :location
json.id user.id
json.email user.email
json.username user.username
json.bio user.bio
json.location user.location
json.trackIds user.track_ids
json.likedTrackIds user.liked_track_ids
json.commentedTrackIds user.commented_track_ids

# json.profile_image_url url_for(user.profile_image)
# json.banner_image url_for(user.banner_image)


# json.user do
# 		json.set! user.id do 
# 			json.extract! user, :id, :track_ids, :username, :email
	# 		if user.profile_image.attached?
	# 			json.profile_image_url url_for(user.profile_image)
	# 		else
	# 			json.profile_image_url ''
	# 		end
	# 	end
	# end

# json.tracks do
# 	user.tracks.each do |track|
# 		json.set! track.id do
# 			json.extract! track, :id, :title, :artist, :user_id, :description
# 			if track.audio.attached?
# 					json.audioUrl url_for(track.audio)
# 			else
# 					json.audioUrl ''
# 			end
# 			if track.artwork.attached?
# 					json.artworkUrl url_for(track.artwork)  
# 			else
# 					json.artworkUrl ''
# 			end
# 		end
# 	end
# end