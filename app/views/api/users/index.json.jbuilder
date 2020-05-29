@users.each do |user|
	json.set! user.id do
		json.extract! user, :id, :username, :email, :location, :bio

		json.id user.id
		json.email user.email
		json.username user.username
		json.location user.location
		json.bio user.bio
		# json.trackIds user.track_ids
		json.trackIds user.tracks.pluck(:id)
		json.likedTrackIds user.liked_track_ids
		# json.commentedTrackIds user.commented_track_ids
		json.commentIds user.comments.pluck(:id)

		json.bannerUrl asset_path(user.banner.url)
		json.profileUrl asset_path(user.profile.url)

		if user.profile_image.attached?
			json.profile_image_url url_for(user.profile_image)
		else
			json.profile_image_url ''
		end
		
	
	end
end
