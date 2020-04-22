class Track < ApplicationRecord

    validates :title, :user_id, presence: true

    has_one_attached :audio
		has_one_attached :artwork

    belongs_to :user,
        foreign_key: :user_id,
				class_name: :User,
				primary_key: :id

		has_many	:likes, dependent: :destroy
			
		has_many	:comments, 
				dependent: :destroy,
				foreign_key: :track_id,
				class_name: :Comment,
				primary_key: :id
				
		# has_attached_file :artwork, 
		# 	validate_media_type: false, 
		# 	default_url: "https://soundpoof.s3-us-west-2.amazonaws.com/logo.jpg"
		# validates_attachment_content_type :artwork, :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/, :message => 'file type is not allowed (only jpeg/png/gif images)'
		
		# has_attached_file :audio, 
			# validate_media_type: false
		# validates_attachment_content_type :audio, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

		#  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\Z/
  	# validates_attachment_content_type :track, content_type: /\Aaudio\/.*\Z/

    
    
end
