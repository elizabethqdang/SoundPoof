json.track do
		json.set! @track.id do
			# json.extract! @track, :id, :title, :artist, :user_id, :description

			json.id @track.id
			json.user_id @track.user_id
			json.title @track.title
			json.artist @track.artist
			json.description @track.description
			json.timestamp @track.created_at
			json.comments @track.comments
			json.commentIds @track.comments.pluck(:id)
			json.likerIds @track.likes.pluck(:user_id)
			json.numLikes @track.likes.length
			json.reposterIds @track.reposts.pluck(:user_id)
			json.numReposts @track.reposts.length
			json.profileImgUrl url_for(@track.user.profile_image)
			json.profileUrl asset_path(@track.user.profile.url)
			json.userEmail @track.user.email
			json.userUsername @track.user.username

			if @track.audio.attached?
					json.audioUrl url_for(@track.audio)
			else
					json.audioUrl ''
			end
			if @track.artwork.attached?
					json.artworkUrl url_for(@track.artwork)  
			else
					json.artworkUrl ''
			end
		end
end

json.comments do
  @track.comments.each do |comment|
		json.set! comment.id do 
			json.extract! comment, :id, :body, :user_id, :track_id

			json.id comment.id
			json.comment_id comment.id
			json.user_id comment.user.id
			json.track_id comment.track.id
			json.commenterEmail comment.user.email
			json.commenterUsername comment.user.username
			# json.profileImgUrl url_for(comment.user.profile_image)
			
			if comment.user.profile_image.attached?
				json.profileImgUrl url_for(comment.user.profile_image)
			else
				json.profileImgUrl 'https://soundpoof.s3-us-west-2.amazonaws.com/tracks/placeholder.jp'
			end

    end 
	end
end