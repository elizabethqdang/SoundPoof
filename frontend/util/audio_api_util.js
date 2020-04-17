
export const fetchAudio = trackIds => {
	return $.ajax({
		url: `api/tracks`,
		method: 'GET',
		data: { trackIds }
	});
};