json.id track.id
json.title track.title
json.artist track.artist
json.description track.description
json.user_id track.user.id
json.user_id track.user_id
json.audioUrl url_for(track.audio)
json.artworkUrl url_for(track.artwork)

json.numLikes track.likes.length
json.likerIds track.likes.pluck(:user_id)

json.numComments track.comments.length
json.commentIds track.comments.pluck(:id)

# json.userId track.user.id
json.userProfile asset_path(track.user.profile.url)