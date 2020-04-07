json.array! @posts do |post|
  json.extract! post, :id, :title
  json.artWorkUrl url_for(post.artwork)
end
