json.extract! track, :id, :title, :artist

if track.user.artwork_url.attached? 
  json.userImage url_for(track.user.artwork_url)
end 
json.trackUploader track.user.username
json.trackUploaderId track.user.id
json.trackUrl url_for(track.track_url)
json.artworkUrl url_for(track.album_cover)

json.track do
	# user.tracks.each do |track|
		json.set! track.id do
			json.extract! track, :id, :title, :artist
			if track.audio.attached?
					json.audioUrl url_for(track.audio)
			else
					json.audioUrl ''
			end
			if track.artwork.attached?
					json.artworkUrl url_for(track.artwork)  
			else
					json.artworkUrl ''
			end
		end
	# end
end