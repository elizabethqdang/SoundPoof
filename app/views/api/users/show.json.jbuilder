# json.user do
# 	json.set! @user.id do
		json.extract! @user, :id, :username, :email, :location, :bio

		json.likedTrackIds @user.liked_track_ids
		json.numLiked @user.liked_track_ids.length
		json.commentedTrackIds @user.commented_track_ids

		# if @user.profile.attached?
		# 	json.profileUrl asset_path(@user.profile.url)
		# else
		# 	json.profileUrl ''
		# end
		if @user.profile_image.attached?
			json.profile_image_url url_for(@user.profile_image)
		else
			json.profile_image_url ''
		end
		# if @user.banner.attached?
		# 	json.bannerUrl asset_path(@user.banner.url)
		# else
		# 	json.bannerUrl ''
		# end
# 	end
# end

json.tracks do
	@user.tracks.each do |track|
		json.set! track.id do
			json.extract! track, :id, :title, :artist, :user_id, :description

			json.comments track.comments
			json.likes track.likes

			# if @track.audio.attached?
			# 		json.audioUrl url_for(@track.audio)
			# else
			# 		json.audioUrl ''
			# end
			# if @track.artwork.attached?
			# 		json.artworkUrl url_for(@track.artwork)  
			# else
			# 		json.artworkUrl ''
			# end
		end
	end
end
