class AddColumnToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :user_id, :integer
    remove_column :tracks, :uploader_id
  end
end
