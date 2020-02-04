class Track < ApplicationRecord

    validates :title, :uploader_id, presence: true

    belongs_to :user,
        foreign_key: :uploader_id,
        class_name: :User

    
end
