import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { config } from '../config';

const AudioController = forwardRef(({ autoPlayTrigger }, ref) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio autoplay prevented by browser policy until interaction:", err);
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio play error:", err);
      });
    }
  };

  useImperativeHandle(ref, () => ({
    togglePlay,
    play: () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Handled quietly if browser autoplay policy restricts before interaction
        });
      }
    },
    pause: () => {
      audioRef.current?.pause();
      setIsPlaying(false);
    },
    isPlaying
  }));

  return (
    <>
      <audio 
        ref={audioRef} 
        src={config.audio.src} 
        loop 
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button 
        className={`floating-music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        title={isPlaying ? "Mute Musik Latar" : "Putar Musik Latar"}
      >
        {isPlaying ? <Disc size={24} color="#ffd166" /> : <VolumeX size={24} color="#aaa" />}
      </button>
    </>
  );
});

export default AudioController;
