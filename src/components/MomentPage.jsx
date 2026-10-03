import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Crown } from 'lucide-react';
import { config } from '../config';

export default function MomentPage({ onBack, isAudioPlaying, onToggleAudio }) {
  return (
    <div className="page-screen moment-screen">
      {/* Top Nav with Green Back Button */}
      <div className="top-nav">
        <div></div>
        <button className="back-btn" onClick={onBack}>
          BACK ◀
        </button>
      </div>

      {/* Main Moment Showcase Canvas */}
      <div className="moment-canvas-wrapper">

        {/* ========================================= */}
        {/* LEFT CLUSTER: NAME, ROSES, LETTER, VINYL  */}
        {/* ========================================= */}
        <div className="moment-letter-group">
          {/* Cursive Name Title (Compact with Centered Mulyono & Queen Crown) */}
          <div className="moment-name-title-container">
            <h1 className="moment-name-title">
              <span className="name-part-first">{config.moment.firstName || "Dewi Tri Octariani"}</span>
              <span className="name-part-centered">
                <Crown size={24} className="queen-crown-icon" fill="#ffd700" color="#ffd700" />
                <span>{config.moment.lastName || "Mulyono"}</span>
              </span>
            </h1>
          </div>

          {/* Letter Container */}
          <div className="letter-wrapper-relative">

            {/* Crumpled White Paper Letter Card (z-index: 3, sits on top of vinyl disc) */}
            <div className="crumpled-paper-letter">
              <div className="paper-wrinkle-overlay"></div>
              
              <p className="crumpled-letter-text">
                {config.moment.letter}
              </p>

              {/* Signature under greeting card */}
              <div className="crumpled-letter-signature">
                {config.moment.signature || "— Edgar ❤️"}
              </div>
            </div>

            {/* Realistic 3-Roses Cluster (User Screenshot Match) */}
            <div className="roses-left-bouquet-img-wrapper">
              <img 
                src="/images/moment_rose_cluster.webp" 
                alt="Red Roses Cluster" 
                className="roses-bouquet-img"
                loading="eager"
                decoding="sync"
              />
            </div>

            {/* Interactive Vinyl Player Disc (BEHIND PAPER: z-index 2) */}
            <div 
              className="moment-vinyl-disc-container" 
              onClick={onToggleAudio} 
              title={isAudioPlaying ? "Jeda Musik" : "Putar Musik"}
            >
              {/* Spinning Vinyl Disc Plate (Tucked behind paper) */}
              <div className={`moment-vinyl-disc ${isAudioPlaying ? 'spinning' : ''}`}>
                <div className="vinyl-groove g1"></div>
                <div className="vinyl-groove g2"></div>
                <div className="vinyl-groove g3"></div>
              </div>

              {/* Surface Controls on visible peeking bottom half (Like User Image 2) */}
              <div className="vinyl-surface-controls" onClick={(e) => e.stopPropagation()}>
                <div className="vinyl-track-controls">
                  <Shuffle size={12} color="#ffffff" className="vinyl-icon-btn" onClick={onToggleAudio} />
                  <SkipBack size={13} color="#ffffff" className="vinyl-icon-btn" onClick={onToggleAudio} />
                  
                  {/* Center Red Button with Play/Pause */}
                  <button 
                    className="vinyl-center-red-btn" 
                    onClick={onToggleAudio}
                    title={isAudioPlaying ? "Pause" : "Play"}
                  >
                    <div className="vinyl-play-circle">
                      {isAudioPlaying ? (
                        <Pause size={14} color="#d90429" fill="#d90429" />
                      ) : (
                        <Play size={14} color="#d90429" fill="#d90429" style={{ marginLeft: '2px' }} />
                      )}
                    </div>
                  </button>

                  <SkipForward size={13} color="#ffffff" className="vinyl-icon-btn" onClick={onToggleAudio} />
                  <Repeat size={12} color="#ffffff" className="vinyl-icon-btn" onClick={onToggleAudio} />
                </div>

                {/* "Play Musik" label directly on vinyl */}
                <span className="vinyl-bottom-text" onClick={onToggleAudio}>Play Musik</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT CLUSTER: BAROQUE GOLD FRAME & CAMERA*/}
        {/* ========================================= */}
        <div className="moment-right-cluster">
          
          {/* Authentic Baroque Antique Gold Frame */}
          <div className="moment-baroque-frame-container">
            {/* Partner's Portrait Photo underneath frame opening */}
            <div className="frame-photo-inset">
              <img 
                src={config.moment.photo} 
                alt={config.moment.name} 
                className="moment-portrait-img"
                loading="eager"
                decoding="sync"
              />
            </div>

            {/* Classic Elegant Gold Frame Overlay */}
            <img 
              src="/images/classic_gold_frame.webp" 
              alt="Classic Gold Picture Frame" 
              className="baroque-frame-overlay-img"
              loading="eager"
              decoding="sync"
            />

            {/* Exquisite Blooming Red Rose on Top-Right Corner */}
            <div className="frame-corner-single-rose">
              <img 
                src="/images/corner_red_rose.webp" 
                alt="Blooming Rose" 
                className="corner-rose-img"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

          {/* Vintage Leica 35mm Rangefinder Camera (Bottom of frame) */}
          <div className="moment-vintage-camera">
            <img 
              src="/images/vintage_camera.webp" 
              alt="Vintage 35mm Camera" 
              className="vintage-camera-img"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
