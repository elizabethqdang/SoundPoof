json.extract! user, :id, :email
json.id user.id
json.email user.email
json.trackIds user.track_ids
json.likedTrackIds user.liked_track_ids

json.tracks do
	user.tracks.each do |track|
    json.set! track.id do 
				# json.likes track.likes.each do |like|
				# 	json.id like.track_id
				# 	json.userlike_id like.userlike_id
				# end
		end
	end
end

# json.tracks do
# 	user.tracks.each do |track|
# 		json.set! track.id do
# 			json.extract! track, :id, :title, :artist, :user_id
# 			if track.audio.attached?
# 					json.audio_url url_for(track.audio)
# 			else
# 					json.audio_url ''
# 			end
# 			if track.artwork.attached?
# 					json.artwork_url url_for(track.artwork)  
# 			else
# 					json.artwork_url ''
# 			end
# 		end
# 	end
# end