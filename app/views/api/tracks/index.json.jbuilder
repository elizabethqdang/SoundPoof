@tracks.each do |track|
    json.set! track.id do 
				json.extract! track, :id, :title, :artist, :user_id, :description
				
				json.commenterIds track.comments.pluck(:user_id)
				json.likerIds track.likes.pluck(:user_id)
				json.userProfile url_for(track.user.profile_image)
				json.userEmail track.user.email
				json.userUsername track.user.username

        if track.artwork.attached? 
            json.artworkUrl url_for(track.artwork)
        else 
            json.artworkUrl ''
        end
				if track.audio.attached? 
            json.audioUrl url_for(track.audio)
        else 
            json.audioUrl ''
        end
		end
end