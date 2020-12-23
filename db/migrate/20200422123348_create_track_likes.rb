class CreateTrackLikes < ActiveRecord::Migration[5.2]
  def change
		create_table :likes do |t|
			t.integer		:userlike_id, null: false
			t.integer		:track_id, null: false

			t.timestamps
			t.index			[:userlike_id, :track_id], unique: true
    end
  end
end
