@users.each do |user|
	json.set! user.id do
		json.extract! user, :id, :username, :email, :location, :bio
		json.likedTrackIds user.liked_track_ids
		json.commentedTrackIds user.commented_track_ids

		if user.profile_image.attached?
			json.profile_image_url url_for(user.profile_image)
		else
			json.profile_image_url ''
		end
		
		json.bannerUrl asset_path(user.banner.url)
		json.profileUrl asset_path(user.profile.url)
	end
end
