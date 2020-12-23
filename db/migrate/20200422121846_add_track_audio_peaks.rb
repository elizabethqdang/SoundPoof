class AddTrackAudioPeaks < ActiveRecord::Migration[5.2]
	def change
		add_column	:tracks, :audioPeaks, :text
  end
end
