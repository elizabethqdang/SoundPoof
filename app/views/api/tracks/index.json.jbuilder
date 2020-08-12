@tracks.each do |track|
    json.set! track.id do 
				json.extract! track, :id, :title, :artist, :user_id, :description, :created_at, :audio, :artwork

				json.user_id track.user.id

				# json.commenterIds track.comments.pluck(:user_id)
				json.numComments track.comments.length
				json.commentIds track.comment_ids

				# json.likerIds track.likes.pluck(:user_id)
				json.numLikes track.likes.length
				json.likerIds track.liker_ids

				# json.reposterIds track.reposts.pluck(:user_id)
				json.numReposts track.reposts.length
				json.reposterIds track.reposter_ids

				json.numFollowing track.user.following_ids.length
				json.numFollowers track.user.follower_ids.length
				json.followingIds track.user.following_ids
				json.numTracks track.user.track_ids.length

				# json.profileImgUrl url_for(track.user.profile_image)
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
				if track.user.profile_image.attached?
					json.profileImgUrl url_for(track.user.profile_image)
				else
					json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jpeg'
				end
				
		end
end