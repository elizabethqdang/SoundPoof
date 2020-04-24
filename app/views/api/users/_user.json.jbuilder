json.extract! user, :id, :email, :username, :bio, :location
json.id user.id
json.email user.email
json.username user.username
json.trackIds user.track_ids
json.likedTrackIds user.liked_track_ids
json.commentIds user.comment_ids
json.profile_image_url url_for(user.profile_image)
# json.banner_image url_for(user.banner_image)


# json.users do
# 		json.set! user.id do 
# 			json.extract! user, :id, :track_ids, :username, :email
# 			json.tracks user.tracks.each do |track|
# 					json.track_ids user.track_ids
# 					json.uploaderId user.id
			
# 				# json.likes track.likes.each do |like|
# 				# 	json.id like.track_id
# 				# 	json.userlike_id like.userlike_id
# 				# end
# 		end
# 	end
# end

json.tracks do
	user.tracks.each do |track|
		json.set! track.id do
			json.extract! track, :id, :title, :artist, :user_id
			if track.audio.attached?
					json.audio_url url_for(track.audio)
			else
					json.audio_url ''
			end
			if track.artwork.attached?
					json.artwork_url url_for(track.artwork)  
			else
					json.artwork_url ''
			end
		end
	end
end