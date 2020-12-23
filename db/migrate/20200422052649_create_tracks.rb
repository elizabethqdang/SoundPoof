class CreateTracks < ActiveRecord::Migration[5.2]
  def change
		create_table :tracks do |t|
			t.string	:title, null: false
			t.string 	:description
			t.integer	:user_id, null: false

			t.index		:user_id
			t.timestamps
    end
  end
end
