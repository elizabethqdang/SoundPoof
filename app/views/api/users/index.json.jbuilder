@users.each do |user|
	json.set! user.id do
		json.extract! user, :id, :username, :email, :location, :bio
		json.likedTrackIds user.likedTrackIds
		json.commentedTrackIds user.commentedTrackIds
		

		if user.profile_image.attached?
			json.profile_image_url url_for(user.profile_image)
		else
			json.profile_image_url ''
		end
		if user.banner.attached?
			json.bannerUrl asset_path(user.banner.url)
		else
			json.profile_image_url ''
		end
	end
end
