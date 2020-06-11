class Reposts < ActiveRecord::Migration[5.2]
	def change
		create_table :reposts do |t|
			t.integer		:user_id, null: false
			t.integer		:track_id, null: false

			t.timestamps
			t.index			[:user_id, :track_id], unique: true
			t.index			[:user_id]
		end
  end
end
