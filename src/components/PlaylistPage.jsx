import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { config } from '../config';

export default function PlaylistPage({ onBack }) {
  const frames = config.playlist.frames || [];

  return (
    <div className="page-screen playlist-screen">
      {/* Top Nav with Green Back Button */}
      {onBack && (
        <div className="top-nav">
          <div></div>
          <button className="back-btn" onClick={onBack}>
            BACK ◀
          </button>
        </div>
      )}

      {/* Main Playlist Showcase Container */}
      <div className="playlist-showcase-container">
        {/* 2-Column Content Body */}
        <div className="playlist-canvas-body">
          {/* ========================================= */}
          {/* LEFT COLUMN: YOUTUBE + BOOMBOX & RETRO TV */}
          {/* ========================================= */}
          <div className="playlist-left-column">
            {/* YouTube Video Player Embed (16:9) */}
            <div className="playlist-youtube-wrapper">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${config.playlist.youtubeId}?rel=0&autoplay=0`}
                title={config.playlist.songTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Under YouTube: Retro Boombox & Vintage TV */}
            <div className="playlist-retro-left-row">
              {/* Retro Boombox */}
              <div className="retro-boombox-item">
                <svg viewBox="0 0 140 90" width="118" height="76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="25" y1="22" x2="10" y2="4" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="10" cy="4" r="2.5" fill="#ccc" />
                  <path d="M 38 22 L 38 12 L 102 12 L 102 22" stroke="#888" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <rect x="12" y="22" width="116" height="64" rx="6" fill="#2d2d2d" stroke="#555" strokeWidth="2" />
                  <rect x="15" y="25" width="110" height="10" rx="3" fill="#1f1f1f" />
                  <rect x="42" y="27" width="56" height="6" rx="2" fill="#0d1b2a" />
                  <line x1="68" y1="27" x2="68" y2="33" stroke="#ff0dc3" strokeWidth="1.5" />
                  <circle cx="34" cy="56" r="20" fill="#181818" stroke="#444" strokeWidth="2" />
                  <circle cx="34" cy="56" r="14" fill="#252525" stroke="#333" strokeWidth="1.5" />
                  <circle cx="34" cy="56" r="7" fill="#111" />
                  <circle cx="106" cy="56" r="20" fill="#181818" stroke="#444" strokeWidth="2" />
                  <circle cx="106" cy="56" r="14" fill="#252525" stroke="#333" strokeWidth="1.5" />
                  <circle cx="106" cy="56" r="7" fill="#111" />
                  <rect x="60" y="42" width="20" height="28" rx="2" fill="#1a1a1a" stroke="#444" strokeWidth="1.5" />
                  <circle cx="66" cy="53" r="3" fill="#fff" opacity="0.8" />
                  <circle cx="74" cy="53" r="3" fill="#fff" opacity="0.8" />
                </svg>
              </div>

              {/* Vintage CRT TV */}
              <div className="retro-tv-item">
                <svg viewBox="0 0 130 95" width="110" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50" y1="20" x2="25" y2="4" stroke="#999" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="25" cy="4" r="2" fill="#bbb" />
                  <line x1="58" y1="20" x2="85" y2="4" stroke="#999" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="85" cy="4" r="2" fill="#bbb" />
                  <rect x="12" y="20" width="106" height="68" rx="7" fill="#432818" stroke="#6f4e37" strokeWidth="2.5" />
                  <rect x="18" y="26" width="76" height="56" rx="6" fill="#1c1c1c" stroke="#333" strokeWidth="2" />
                  <rect x="22" y="30" width="68" height="48" rx="5" fill="#495057" />
                  <path d="M 24 34 Q 50 32, 86 34" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
                  <circle cx="104" cy="38" r="4.5" fill="#999" stroke="#333" strokeWidth="1" />
                  <circle cx="104" cy="52" r="4.5" fill="#999" stroke="#333" strokeWidth="1" />
                  <rect x="100" y="64" width="8" height="14" rx="2" fill="#222" />
                </svg>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: 3 GOLD FRAMES + NEON STAFF  */}
          {/* ========================================= */}
          <div className="playlist-right-column">
            {/* 3 Gold Picture Frames Composition */}
            <div className="playlist-frames-composition">
              {/* Sub-column 1: Two stacked square frames on left */}
              <div className="frames-stacked-subcol">
                {/* Frame 1 (Top Left) */}
                <div className="playlist-frame-card frame-square">
                  <div className="playlist-frame-photo-inset square-inset">
                    <img 
                      src={frames[0]?.url} 
                      alt={frames[0]?.caption} 
                      className="playlist-photo-img" 
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <img 
                    src="/images/classic_gold_frame.webp" 
                    alt="Gold Frame" 
                    className="playlist-gold-frame-overlay" 
                    loading="eager"
                    decoding="sync"
                  />
                </div>

                {/* Frame 2 (Bottom Left) */}
                <div className="playlist-frame-card frame-square">
                  <div className="playlist-frame-photo-inset square-inset">
                    <img 
                      src={frames[1]?.url} 
                      alt={frames[1]?.caption} 
                      className="playlist-photo-img" 
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <img 
                    src="/images/classic_gold_frame.webp" 
                    alt="Gold Frame" 
                    className="playlist-gold-frame-overlay" 
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>

              {/* Sub-column 2: Larger Baroque Frame on right */}
              <div className="frames-large-subcol">
                <div className="playlist-frame-card large-right-frame">
                  <div className="playlist-frame-photo-inset baroque-inset">
                    <img 
                      src={frames[2]?.url} 
                      alt={frames[2]?.caption} 
                      className="playlist-photo-img" 
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <img 
                    src="/images/vintage_baroque_frame.webp" 
                    alt="Ornate Gold Frame" 
                    className="playlist-gold-frame-overlay" 
                    loading="eager"
                    decoding="sync"
                  />
                </div>

                {/* Pink Chat Bubble Sticker (As seen in screenshot) */}
                <div className="playlist-pink-chat-sticker">
                  <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
                    <circle cx="20" cy="20" r="18" fill="url(#pinkChatGrad)" stroke="#fff" strokeWidth="2"/>
                    <circle cx="15" cy="18" r="2.5" fill="#fff"/>
                    <circle cx="25" cy="18" r="2.5" fill="#fff"/>
                    <path d="M 14 24 Q 20 28 26 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <defs>
                      <radialGradient id="pinkChatGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ff4da6"/>
                        <stop offset="100%" stopColor="#c20078"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Under Frames: Glowing Neon Musical Wave Staff & Kado Virtual Badge */}
            <div className="playlist-music-staff-row">
              {/* Glowing Neon Musical Wave Staff */}
              <div className="neon-music-staff-container">
                <svg viewBox="0 0 260 70" width="230" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 5 Wavy Staff Lines */}
                  <path d="M 10 18 Q 70 5, 140 26 T 255 12" stroke="#00f0ff" strokeWidth="1.8" opacity="0.85" filter="drop-shadow(0 0 5px #00f0ff)" />
                  <path d="M 10 25 Q 70 12, 140 33 T 255 19" stroke="#00f0ff" strokeWidth="1.8" opacity="0.85" filter="drop-shadow(0 0 5px #00f0ff)" />
                  <path d="M 10 32 Q 70 19, 140 40 T 255 26" stroke="#00f0ff" strokeWidth="1.8" opacity="0.85" filter="drop-shadow(0 0 5px #00f0ff)" />
                  <path d="M 10 39 Q 70 26, 140 47 T 255 33" stroke="#00f0ff" strokeWidth="1.8" opacity="0.85" filter="drop-shadow(0 0 5px #00f0ff)" />
                  <path d="M 10 46 Q 70 33, 140 54 T 255 40" stroke="#00f0ff" strokeWidth="1.8" opacity="0.85" filter="drop-shadow(0 0 5px #00f0ff)" />
                  
                  {/* Treble Clef 𝄞 */}
                  <text x="20" y="52" fill="#00f0ff" fontSize="38" fontFamily="serif" filter="drop-shadow(0 0 8px #00f0ff)">𝄞</text>
                  
                  {/* Floating Neon Notes */}
                  <text x="75" y="28" fill="#00f0ff" fontSize="24" filter="drop-shadow(0 0 8px #00f0ff)">♫</text>
                  <text x="130" y="42" fill="#00f0ff" fontSize="20" filter="drop-shadow(0 0 8px #00f0ff)">♪</text>
                  <text x="180" y="32" fill="#00f0ff" fontSize="24" filter="drop-shadow(0 0 8px #00f0ff)">♬</text>
                  <text x="225" y="38" fill="#00f0ff" fontSize="20" filter="drop-shadow(0 0 8px #00f0ff)">♩</text>
                </svg>
              </div>

              {/* Photo Icon Badge (Substituted for Kado Virtual badge) */}
              <div className="photo-icon-badge-wrapper">
                <div className="photo-icon-badge" title="Galeri Foto">
                  <Camera size={26} color="#ffd8f5" strokeWidth={2.2} />
                </div>
                <div className="badge-plus-dot">
                  <Sparkles size={11} color="#ffffff" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Bottom-Right Soft White Heart (From reference screenshot) */}
      <div className="playlist-bottom-heart">
        <svg viewBox="0 0 40 36" width="38" height="34" fill="#ffffff" opacity="0.9" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))">
          <path d="M 20 34 C 4 22, 0 14, 0 8 C 0 3, 4 0, 9 0 C 14 0, 18 3, 20 7 C 22 3, 26 0, 31 0 C 36 0, 40 3, 40 8 C 40 14, 36 22, 20 34 Z"/>
        </svg>
      </div>

    </div>
  );
}
