import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helvetica from '../../audio/Helvetica Aqua Aero.mp3';
import Amplitude from '../../audio/sanodg - Amplitude.mp3';
import Sava from '../../audio/Sava Data.mp3';
import aquatic from '../../audio/scizzie - aquatic ambience.mp3';
import Setup from '../../audio/System Setup.mp3';
import Tropical from '../../audio/Tropical Groove.mp3';
import WhoIsUsingThisComputer from '../../audio/WhoIsUsingThisComputer_.mp3';
import Future from '../../audio/Your Future.mp3';

const playlist = [
  { src: Helvetica, title: 'Helvetica Aqua Aero' },
  { src: Amplitude, title: 'Amplitude' },
  { src: Sava, title: 'Sava Data' },
  { src: aquatic, title: 'aquatic ambience' },
  { src: Setup, title: 'Setup' },
  { src: Tropical , title: 'Tropical Groove' },
  { src: WhoIsUsingThisComputer, title: 'WhoIsUsingThisComputer' },
  { src: Future, title: 'Your Future' }
];


function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying,  setIsPlaying]  = useState(false);
  const [title,      setTitle]      = useState(playlist[0].title);
  const audioRef = useRef(new Audio(playlist[0].src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = playlist[currentIndex].src;
    setTitle(playlist[currentIndex].title);
    audio.volume = 0.1;
    isPlaying ? audio.play() : audio.pause();

    const onEnded = () => handleNext();
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [currentIndex, isPlaying]);

  const togglePlay = () => setIsPlaying(p => !p);
  const handleNext = () => setCurrentIndex(i => (i + 1) % playlist.length);
  const handlePrev = () => setCurrentIndex(i => (i - 1 + playlist.length) % playlist.length);

  return (
    <header className="header">
      <div className="left-controls">
        <div className="music-player">
          <span className="track-title">Title: {title}</span>
          <button className="prev-btn" onClick={handlePrev}> ◁◁ </button>
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button className="next-btn" onClick={handleNext}> ▷▷ </button>
        </div>
      </div>
      <div className="right-controls">
        <Link to="/" className="home-button">Home</Link>
      </div>
    </header>
  );
}

export default Header;