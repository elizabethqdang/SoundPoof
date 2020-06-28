export const fetchAllTracks = () => (
  $.ajax({
    method: 'GET',
		url: '/api/tracks',
		dataType: 'json'
	})
);

export const fetchTrack = trackId => (
  $.ajax({
    method: 'GET',
		url: `/api/tracks/${trackId}`
	})
);
	
export const fetchTracks = (query) => (
	$.ajax({
		method: 'GET',
		url: `/api/tracks`,
		data: {
			query: query.data,
			trackTitle: query.trackTitle,
			trackArtist: query.trackArtist
		}
	})
);

export const createTrack = track => (
  $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: track,
    contentType: false,
		processData: false,
		dataType: 'json'
	})
);

export const updateTrack = (track, trackId) => (
	$.ajax({
		method: 'PATCH',
		url: `api/tracks/${trackId}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: track
	})
);

export const deleteTrack = trackId => (
	$.ajax({
		method: 'DELETE',
		url: `api/tracks/${trackId}`
	})
);