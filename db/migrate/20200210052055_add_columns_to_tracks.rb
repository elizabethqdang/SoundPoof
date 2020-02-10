class AddColumnsToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :artwork_file, :string
    add_column :tracks, :track_file, :string
    add_column :tracks, :artwork_url, :string
    add_column :tracks, :track_url, :string
  end
end
