class Like < ApplicationRecord
    validates :user_id, uniqueness: { scope: :track_id, message: "already liked" }

    belongs_to :user
    belongs_to :track 
end