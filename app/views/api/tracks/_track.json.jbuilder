json.id track.id
json.uploaderId track.user_id
json.title track.title
json.artist track.artist
json.description  track.description
json.audioUrl url_for(track.audio)
json.artworkUrl url_for(track.artwork)
json.numLikes track.likes.length
json.numComments track.comments.length

json.commentIds track.comments.pluck(:id)
test = current_user ? current_user.id : -1 

json.liked track.likes.pluck(:user_id).include?(test)
likeid = track.likes.find{|like| like.user_id == test}
likeid = likeid.nil? ? -1 : likeid.id
json.likeId likeid

json.tracks do
		json.set! track.id do
			json.extract! track, :id, :title, :artist, :user_id
# 			json.comments track.comments.each do |comment|
# 				json.comment_id track.comment_id
# 				json.commenter_id	track.user_id
# 			end
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