@tracks.each do |track|
    json.set! track.id do 
				json.extract! track, :id, :title, :artist, :user_id, :description
				# :likes, :likers, :comments, :commenters
				
				# json.comments track.comments
				# json.commenterIds track.comments.pluck(:user_id)
				json.likerIds track.likes.pluck(:user_id)
				json.numLikes track.likes.length
				json.userProfile url_for(track.user.profile_image)
				json.userEmail track.user.email
				json.userUsername track.user.username

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