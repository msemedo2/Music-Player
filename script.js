const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
	{
		name: 'Born-To-Hula',
		artist: 'Queens of The Stone Age',
	},
	{
		name: 'Positiva',
		artist: 'Queens of The Stone Age',
	},
	{
		name: 'Pilot-The-Dune',
		artist: 'Queens of The Stone Age',
	},
	{
		name: 'Muezli',
		artist: 'Queens of The Stone Age',
	},
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
	isPlaying = true;
	playBtn.classList.replace('fa-play', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
	music.play();
}

// Pause
function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.setAttribute('title', 'Play');
	music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => {
	isPlaying ? pauseSong() : playSong();
});

// Update DOM
function loadSong(song) {
	title.textContent = song.name;
	artist.textContent = song.artist;
	music.src = `./music/${song.name}.mp3`;
	img.src = `./img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// Next Song
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Event Listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
