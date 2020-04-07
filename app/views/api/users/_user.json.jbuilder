json.extract! user, :id, :email

# json.user do
#     json.set! user.id do 
# 				json.extract! user, :id, :email
# 		end
# end

# json.tracks do
# 	user.tracks.each do |track|
# 		json.set! track.id do
# 			json.extract! track, :id, :title, :artist
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