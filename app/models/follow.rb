class Follow < ApplicationRecord
		validates :following_id, presence: true, uniqueness: { scope: :user_id, message: "already followed" }
		validate :exclude_following_self

		belongs_to :follower,
			class_name: :User,
			foreign_key: :user_id,
			primary_key: :id

		belongs_to :following,
			class_name: :User,
			foreign_key: :following_id,
			primary_key: :id

	  def exclude_following_self
			if user_id == following_id
				errors.add(:user_id, "oops, you can't follow yourself")
			end
  	end
	
end