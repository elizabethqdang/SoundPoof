class Comment < ApplicationRecord
  validates :body, :user, :track, presence: true

	belongs_to :user
			foreign_key: :user_id,
			class_name: :User,
			primary_key: :id
  belongs_to :track
  		foreign_key: :track_id,
			class_name: :Track,
			primary_key: :id
end