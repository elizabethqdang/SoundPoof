class EditTrackColumn < ActiveRecord::Migration[5.2]
	def change
		add_column :tracks, :audio_url, :string
		add_column :tracks, :artwork_url, :string
    remove_column :tracks, :track_file
  end
end
