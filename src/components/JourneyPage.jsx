import React, { useState } from 'react';
import { X, Heart, Sparkles } from 'lucide-react';
import { config } from '../config';

export default function JourneyPage({ onBack }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = config.journey.photos || [];

  // Group into 2 vertical photostrips (3 photos each, matching reference Image 3)
  const stripLeft = photos.slice(0, 3);
  const stripRight = photos.slice(3, 6);

  return (
    <div className="page-screen journey-screen memory-of-us-screen">
      {/* Top Nav with Green Back Button */}
      {onBack && (
        <div className="top-nav">
          <div></div>
          <button className="back-btn" onClick={onBack}>
            BACK ◀
          </button>
        </div>
      )}

      {/* Main "Our Memories" Aesthetic Showcase Board */}
      <div className="memory-board-container">
        
        {/* Header: Title & Cursive Subtitle matching Image 3 */}
        <div className="memory-header-box">
          <h1 className="memory-main-title">{config.journey.title || "Our Memories"}</h1>
          <p className="memory-subtitle">
            {config.journey.subtitle || "Here's to all the memories we've made... and all the ones we're yet to create."}
          </p>
        </div>

        {/* Photostrip Composition (2 tilted vertical strips with Daisy Flowers) */}
        <div className="memory-photostrips-composition">

          {/* ==================================================== */}
          {/* STRIP 1: LEFT PHOTOSTRIP (Tilted Left, 3 Photos)     */}
          {/* ==================================================== */}
          <div className="photostrip-film-wrapper strip-left">
            
            {/* Top-Left White Daisy Flower Accent (matching Image 3) */}
            <div className="daisy-flower-accent daisy-top-left">
              <img 
                src="/images/white_daisy.webp" 
                alt="White Daisy Flower" 
                className="daisy-img" 
                loading="eager"
                decoding="sync"
              />
            </div>

            <div className="photostrip-white-card">
              {stripLeft.map((photo, idx) => (
                <div 
                  key={photo.id || idx} 
                  className="photostrip-slot"
                  onClick={() => setSelectedPhoto(photo)}
                  title="Klik untuk memperbesar foto"
                >
                  <img 
                    src={photo.url} 
                    alt={`Memory ${idx + 1}`} 
                    className="photostrip-img" 
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* STRIP 2: RIGHT PHOTOSTRIP (Tilted Right, 3 Photos)   */}
          {/* ==================================================== */}
          <div className="photostrip-film-wrapper strip-right">
            
            <div className="photostrip-white-card">
              {stripRight.map((photo, idx) => (
                <div 
                  key={photo.id || idx + 3} 
                  className="photostrip-slot"
                  onClick={() => setSelectedPhoto(photo)}
                  title="Klik untuk memperbesar foto"
                >
                  <img 
                    src={photo.url} 
                    alt={`Memory ${idx + 4}`} 
                    className="photostrip-img" 
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              ))}
            </div>

            {/* Bottom-Right White Daisy Flower Accent (matching Image 3) */}
            <div className="daisy-flower-accent daisy-bottom-right">
              <img 
                src="/images/white_daisy.webp" 
                alt="White Daisy Flower" 
                className="daisy-img" 
                loading="eager"
                decoding="sync"
              />
            </div>

            {/* Lower-Left White Daisy Flower Accent (matching Image 3) */}
            <div className="daisy-flower-accent daisy-lower-left">
              <img 
                src="/images/white_daisy.webp" 
                alt="White Daisy Flower" 
                className="daisy-img small-daisy" 
                loading="eager"
                decoding="sync"
              />
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal on Photo Click */}
      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content memory-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedPhoto(null)}>
              <X size={20} />
            </button>
            <div className="memory-lightbox-card">
              <img 
                src={selectedPhoto.url} 
                alt="Selected Memory" 
                className="memory-lightbox-img" 
              />
              <p className="memory-lightbox-caption">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
