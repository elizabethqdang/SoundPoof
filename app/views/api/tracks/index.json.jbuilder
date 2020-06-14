@tracks.each do |track|
    json.set! track.id do 
				json.extract! track, :id, :title, :artist, :user_id, :description
				json.id track.id
				json.created_at track.created_at
				json.user_id track.user_id
				json.numComments track.comments.length
				json.commenterIds track.comments.pluck(:user_id)
				json.likerIds track.likes.pluck(:user_id)
				json.numLikes track.likes.length
				json.reposterIds track.reposts.pluck(:user_id)
				json.numReposts track.reposts.length
				json.profileImgUrl url_for(track.user.profile_image)
				json.userEmail track.user.email
				json.userUsername track.user.username
				json.profileUrl asset_path(track.user.profile.url)
				json.bannerUrl asset_path(track.user.banner.url)
				
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