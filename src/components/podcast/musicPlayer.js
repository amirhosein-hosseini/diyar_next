import React, { useState, useRef, useEffect } from 'react';
import styles from "./styles.module.scss";
import { domain } from "../../api/domain";


function MusicPlayer({ data }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    const updateTime = () => setCurrentTime(audioElement.currentTime);
    const updateDuration = () => setDuration(audioElement.duration);

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
        <div className={styles.musicplayer}>
            <div className={styles.musicplayer__header}>
                <div className={styles.info}>
                    <div className={styles.image}>
                        <img src={domain + data?.image.substring(1)} alt='image' />
                    </div>
                    <div className={styles.desc}>
                        <p className={styles.title}>
                          {data?.title}
                        </p>
                        <p className={styles.name}>
                            {data?.sub_title}
                        </p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={togglePlay}>{isPlaying == false ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM14.9707 14.23L12.0707 15.9C11.7107 16.11 11.3107 16.21 10.9207 16.21C10.5207 16.21 10.1307 16.11 9.7707 15.9C9.0507 15.48 8.6207 14.74 8.6207 13.9V10.55C8.6207 9.72 9.0507 8.97 9.7707 8.55C10.4907 8.13 11.3507 8.13 12.0807 8.55L14.9807 10.22C15.7007 10.64 16.1307 11.38 16.1307 12.22C16.1307 13.06 15.7007 13.81 14.9707 14.23Z" fill="#292D32"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.9707 2C6.4507 2 1.9707 6.48 1.9707 12C1.9707 17.52 6.4507 22 11.9707 22C17.4907 22 21.9707 17.52 21.9707 12C21.9707 6.48 17.5007 2 11.9707 2ZM10.7207 15.03C10.7207 15.51 10.5207 15.7 10.0107 15.7H8.7107C8.2007 15.7 8.0007 15.51 8.0007 15.03V8.97C8.0007 8.49 8.2007 8.3 8.7107 8.3H10.0007C10.5107 8.3 10.7107 8.49 10.7107 8.97V15.03H10.7207ZM16.0007 15.03C16.0007 15.51 15.8007 15.7 15.2907 15.7H14.0007C13.4907 15.7 13.2907 15.51 13.2907 15.03V8.97C13.2907 8.49 13.4907 8.3 14.0007 8.3H15.2907C15.8007 8.3 16.0007 8.49 16.0007 8.97V15.03Z" fill="#292D32"/></svg>}</button>
                </div>
            </div>
            <div className={styles.musicplayer__audio}>
                <audio ref={audioRef} src={domain + data?.voice?.substring(1)}></audio>
                <input
                    className={styles.volume}
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <input
                    className={styles.duration}
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                />
            </div>
        </div>
  );
}

export default MusicPlayer;