class Like < ApplicationRecord
    validates :user, :track, presence: true
    validates :userlike_id, uniqueness: {scope: :track_id}

    belongs_to :user
    belongs_to :track 
end