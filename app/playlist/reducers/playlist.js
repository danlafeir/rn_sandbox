const testInitialState = [
	{	title: "song1", artist: "artist1", uri: "uri1", votes: 0 },
	{	title: "song2", artist: "artist2", uri: "uri2", votes: 0 },
	{	title: "song3", artist: "artist3", uri: "uri3", votes: 0 },
	{	title: "song4", artist: "artist4", uri: "uri4", votes: 0 },
]

module.exports = (state = testInitialState, action = {}) => {
  if(action.type === '@playlist/add'){
    return state.push(action.song);
  }

  return state;
}
