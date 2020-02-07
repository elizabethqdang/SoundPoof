export const fetchAllTracks = () =>
  $.ajax({
    method: 'GET',
    url: 'api/tracks'
  });

export const fetchTrack = trackId =>
  $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  });

export const createTrack = formData =>
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data: formData,
    contentType: false,
    processData: false,
    dataType: "json",
  });

export const updateTrack = (formData) =>
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: formData,
    contentType: false,
    processData: false
  });

export const deleteTrack = trackId =>
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
