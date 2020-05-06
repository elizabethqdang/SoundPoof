# json.extract! @track, :id, :title, :artist, :user_id
# json.track do
# 	json.id @track.id
# 	json.title @track.title
# 	json.artist @track.artist
# 	json.description @track.description
# 	json.userEmail @track.user.email
# 	json.userUsername @track.user.username
# 	json.userId @track.user.id
# 	json.profile_image_url @track.user.profile_image
# 	json.audioUrl url_for(@track.audio)
# 	json.artworkUrl url_for(@track.artwork)

# 	json.commentIds @track.comments.pluck(:id)

# 	json.likes @track.user.id
# 	json.numLikes @track.likes.length

# 	test = current_user ? current_user.id : -1 
# 	json.liked @track.likes.pluck(:user_id).include?(test)
	
# 	likeid = @track.likes.find{|like| like.user_id == test}
#   likeid = likeid.nil? ? -1 : likeid.id
# 	json.likeId likeid
	
# 	peaks = track.audioPeaks ? track.audioPeaks : []
# 	json.audioPeaks peaks
# end

json.track do
		json.set! @track.id do
			json.extract! @track, :id, :title, :artist, :user_id, :description

			json.comments @track.comments
			json.commenterIds @track.comments.pluck(:user_id)
			json.likerIds @track.likes.pluck(:user_id)
			json.numLikes @track.likes.length
			json.userProfile url_for(@track.user.profile_image)
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
			json.body comment.body
			json.user_id comment.user_id
			json.track_id comment.track_id
			json.commenterEmail comment.user.email
			json.commenterUsername comment.user.username

			if comment.user.profile_image.attached?
				json.commenterProfileUrl url_for(comment.user.profile_image)
			else
				json.commenterProfileUrl ''
			end
    end 
	end
end