class Follow < ApplicationRecord
    validates :user_id, uniqueness: { scope: :following_id, message: "already followed" }

		belongs_to :user,
			class_name: :User,
			foreign_key: :user_id
	
		belongs_to :user,
			class_name: :User,
			foreign_key: :following_id
end