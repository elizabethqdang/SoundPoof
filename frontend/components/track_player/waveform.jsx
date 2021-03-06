import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { prevSeek: 0 };
	}

	componentDidMount() {
		this.wavesurfer = WaveSurfer.create({
			container: `#track-${this.props.track.id}-waveform`,
			progressColor: '#f50',
			// barHeight: 3,
			barWidth: 2,
			// barMinHeight: 10, 
			cursorWidth: 0,
			height: this.props.height,
			responsive: true,
			normalize: true,
			backend: 'MediaElement',
			barGap: 1,
			maxCanvasWidth: 820,
			hideScrollbar: true,
			mediaControls: false,
			controls: true,
			interact: false,
			waveColor: this.props.color,
		});

		//will set audio peaks if not stored yet. 
		// if (this.props.track.audioPeaks === null ) {
		// 	let peaks = JSON.parse(this.props.track.audioPeaks);
		// 	this.wavesurfer.load(this.props.track.audioUrl, peaks);
		// } else {
			this.wavesurfer.load(this.props.track.audioUrl);
		// }

		this.wavesurfer.setMute(true);

		let start = this.props.prevProg ? this.props.prevProg : 0;

		this.wavesurfer.on('ready', () => {
			this.wavesurfer.seekTo(start);

			// this.forceUpdate();
			this.wavesurfer.on("seek", progress => {
				this.props.seekWaveForm(progress);
				if (!this.props.playing) {
					this.props.setPlayPause(!this.props.playing, this.props.track.id, progress);
				}
			});

		});

		// if (!this.props.track.audioPeaks) {
		// 	this.wavesurfer.on('waveform-ready', () => {
		// 		let string = JSON.stringify(this.wavesurfer.backend.getPeaks(40));
		// 		const formData = new FormData();
		// 		formData.append("track[audioPeaks]", string);
		// 		this.props.updateTrack(formData, this.props.track.id);
		// 	});
		// }
	}

	componentDidUpdate(prevProps) {
		if (!this.wavesurfer) return;
		// if (this.props.playing !== this.wavesurfer.isPlaying()) {
		// 	this.wavesurfer.playPause();
		// }
		if (!this.props.playing) return;
		if (this.props.prevSeek !== prevProps.prevSeek) {
			this.wavesurfer.seekTo(this.props.prevSeek);
		}

	}

	render() {
		return (
			<div>
				<div id={`track-${this.props.track.id}-waveform`}></div>
			</div>
		);
	}

}

export default (WaveForm);