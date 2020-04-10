class EditTracks < ActiveRecord::Migration[5.2]
	def change
		add_column :tracks, :audio_file, :string
		remove_column :tracks, :track_file
		add_column :tracks, :audio_url, :string
    remove_column :tracks, :track_url
  end
end
