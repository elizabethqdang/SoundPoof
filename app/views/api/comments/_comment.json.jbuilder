json.extract! comment, :id, :body, :user_id, :track_id
json.id comment.id
json.commenter_id comment.user_id
json.body comment.body
json.track_id comment.track_id
json.commenterProfile comment.user.profile_image

# json.comments do
# 		json.set! comment.id do
# 			json.extract! comment, :id, :body, :track_id, :user_id
# 			json.users comment.users.each do |user|
# 				json.commenter_id comment.user_id
# 			end
# 			json.tracks comment.tracks.each do |track|
# 				json.track_id comment.track_id
# 			end
# 		end
# end
	