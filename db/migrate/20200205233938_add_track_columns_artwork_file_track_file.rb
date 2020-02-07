class AddTrackColumnsArtworkFileTrackFile < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :artwork_file, :string
    add_column :tracks, :track_file, :string
  end
end
