json.extract! track, :id, :title, :artist :user_id
json.id track.id
json.title track.title
json.artist track.artist
json.user_id track.user_id
json.audio_url url_for(track.audio)
json.artwork_url url_for(track.artwork)
json.comments track.comments

json.tracks do
		json.set! track.id do
			json.extract! track, :id, :title, :artist, :user_id
			json.likes track.likes.each do |like|
					json.id like.track_id
					json.userlike_id like.userlike_id
			end
			json.comments track.comments.each do |comment|
				json.comment_id track.comment_id
				json.commenter_id	track.user_id
			end
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

peaks = track.audioPeaks ? track.audioPeaks : []
json.audioPeaks peaks