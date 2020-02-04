class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.string :artist
      t.integer :uploader_id, null: false

      t.index :title
      t.index :uploader_id
      t.timestamps
    end
  end
end
