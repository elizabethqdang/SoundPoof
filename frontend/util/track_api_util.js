export const fetchAllTracks = () =>
  $.ajax({
    method: 'GET',
    url: '/api/tracks'
  });

export const fetchTrack = trackId =>
  $.ajax({
    method: 'GET',
		url: `/api/tracks/${trackId}`
  });

export const createTrack = track =>
  $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: track,
    contentType: false,
		processData: false,
		dataType: 'json'
  });

export const updateTrack = (track, id) => (
	$.ajax({
		method: 'PATCH',
		url: `api/tracks/${id}`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: track
	})
);

export const deleteTrack = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/tracks/${id}`
	})
);