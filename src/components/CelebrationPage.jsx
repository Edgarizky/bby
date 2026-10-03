import React from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';
import { config } from '../config';

export default function CelebrationPage({ onNext, onBack }) {
  const handleNext = () => {
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#ff0dc3', '#ffd700', '#ffffff', '#e10098', '#ff4d6d']
    });
    onNext();
  };

  return (
    <div className="page-screen celebration-screen">
      {/* Top Nav with Back Button */}
      {onBack && (
        <div className="top-nav">
          <div></div>
          <button className="back-btn" onClick={onBack}>
            BACK ◀
          </button>
        </div>
      )}

      {/* SVG Definitions for Heart Mask */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="celebration-heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5, 0.85 C 0.1, 0.55, 0, 0.35, 0, 0.2 C 0, 0.08, 0.1, 0, 0.25, 0 C 0.35, 0, 0.45, 0.08, 0.5, 0.18 C 0.55, 0.08, 0.65, 0, 0.75, 0 C 0.9, 0, 1, 0.08, 1, 0.2 C 1, 0.35, 0.9, 0.55, 0.5, 0.85 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Collage Centerpiece */}
      <div className="celebration-collage-wrapper enlarged">
        
        {/* ========================================= */}
        {/* CENTER: ENLARGED OPEN ENVELOPE            */}
        {/* ========================================= */}
        <div className="collage-envelope">
          {/* Open Top Flap (pointing upward) */}
          <div className="envelope-top-flap-open"></div>

          {/* Torn White Paper Card emerging from envelope */}
          <div className="torn-paper-card">
            <div className="torn-edge-top"></div>
            <div className="torn-card-content">
              <h1 className="torn-title">{config.celebration.title}</h1>
              <div className="torn-date">{config.celebration.dateText}</div>
            </div>
          </div>

          {/* Envelope Pocket Body */}
          <div className="envelope-pocket">
            <div className="pocket-fold-left"></div>
            <div className="pocket-fold-right"></div>
            <div className="pocket-fold-bottom"></div>

            {/* Purple Wax Seal at bottom center */}
            <div className="collage-wax-seal">
              <div className="seal-inner-ring"></div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* LEFT SIDE: HEART PHOTO, POLAROID, BUTTERFLY */}
        {/* ========================================= */}
        
        {/* 1. Heart Photo with Glowing Neon Pink Aura */}
        <div className="collage-heart-photo-container">
          <div className="heart-pink-glow"></div>
          <div className="heart-photo-frame">
            <img 
              src={config.celebration.heartPhoto} 
              alt="Heart Memory" 
              className="heart-photo-img" 
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

        {/* 2. Soft Blooming Pink Rose beside heart */}
        <div className="flower-left-rose">
          <img 
            src="/images/pink_rose.webp" 
            alt="Pink Rose" 
            className="real-flower-img" 
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* 3. Tilted Polaroid Photo (bottom left) */}
        <div className="collage-polaroid-frame">
          <img 
            src={config.celebration.polaroidPhoto} 
            alt="Polaroid Memory" 
            className="collage-polaroid-img" 
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* 4. Beautiful 3D Pink Butterfly with open wings */}
        <div className="collage-butterfly">
          <img 
            src="/images/pink_butterfly.webp" 
            alt="Pink Butterfly" 
            className="real-butterfly-img" 
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: PHOTOSTRIP & FLOWER ACCENTS   */}
        {/* ========================================= */}

        {/* Vertical Photobooth Filmstrip (3 Photos) with Flower Accents */}
        <div className="collage-photostrip">
          {/* 1. Top-Left Big Blooming Pink Rose */}
          <div className="photostrip-flower-rose">
            <img 
              src="/images/pink_rose.webp" 
              alt="Pink Rose" 
              className="real-flower-img" 
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* 2. Pink Star Lily beside photostrip */}
          <div className="photostrip-flower-lily">
            <img 
              src="/images/pink_lily.webp" 
              alt="Pink Lily" 
              className="real-flower-img" 
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Photostrip Photo Cells */}
          {config.celebration.photostrip.map((imgUrl, i) => (
            <div key={i} className="photostrip-cell">
              <img 
                src={imgUrl} 
                alt={`Photostrip ${i + 1}`} 
                className="photostrip-img" 
                loading="eager"
                decoding="sync"
              />
            </div>
          ))}

          {/* 3. White Cherry/Jasmine Blossom Cluster bottom-right */}
          <div className="photostrip-flower-blossoms">
            <img 
              src="/images/white_blossoms.webp" 
              alt="White Blossoms" 
              className="real-flower-img" 
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>
      </div>

      {/* TAP FOR SURPRISE Link Button */}
      <button className="tap-surprise-link-btn" onClick={handleNext}>
        <span>{config.celebration.subtitle}</span>
      </button>
    </div>
  );
}
