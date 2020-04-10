json.id track.id
json.title track.title
json.artist track.artist
json.user_id track.user_id
json.audioUrl url_for(track.audio)
json.artworkUrl url_for(track.artwork)

json.track do
		json.set! track.id do
			json.extract! track, :id, :title, :user_id, :artist
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
end