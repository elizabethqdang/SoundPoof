# json.extract! track, :id, :title, :artist, :user_id

<ul>
<% @tracks.each do |track| %>
   <li><%= track.key %> - <%= link_to "Delete",  "tracks/delete/?track=" + track.key, :confirm => 'Are you sure you want to delete ' + track.key + '?' %></li>
<% end %>
</ul>

if (params[:track])
    AWS::S3::S3Object.find(params[:track], BUCKET).delete
    redirect_to root_path
else
    render :text => "No song was found to delete!"
end