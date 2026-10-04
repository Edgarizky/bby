import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Heart, Sparkles } from 'lucide-react';
import { config } from '../config';

export default function GiftPage({ onBack }) {
  const [selectedGift, setSelectedGift] = useState(null);
  const [clickedIconId, setClickedIconId] = useState(null);

  const handleSelectCategory = (cat) => {
    setClickedIconId(cat.id);
    setTimeout(() => setClickedIconId(null), 400);

    // Trigger specialized celebratory sparkles on icon click
    const colors = cat.id === 'cincin' ? ['#ffd700', '#ffffff', '#d4af37', '#ff69b4']
                 : cat.id === 'tas' ? ['#ff85a1', '#fbb1bd', '#ffd700', '#ffffff']
                 : cat.id === 'bunga' ? ['#ff4d6d', '#57cc99', '#ffd166', '#ffffff']
                 : ['#ff99c8', '#ffd700', '#fbcfe8', '#60a5fa', '#ffffff'];

    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.65 },
      colors
    });

    setSelectedGift(cat);
  };

  // Helper rendering SVG icon pod for each category (cincin, tas, bunga, kue)
  const renderCategoryIcon = (id) => {
    switch (id) {
      case 'cincin':
        return (
          <svg viewBox="0 0 48 48" className="cat-svg-icon" fill="none">
            <ellipse cx="24" cy="30" rx="14" ry="12" stroke="url(#goldRingGrad)" strokeWidth="3.6" />
            <polygon points="24,6 29,14 19,14" fill="#a7f3d0" stroke="#ffffff" strokeWidth="1.2" />
            <polygon points="24,6 19,14 15,10" fill="#6ee7b7" />
            <polygon points="24,6 29,14 33,10" fill="#34d399" />
            <path d="M 24 6 L 24 14" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
            <circle cx="24" cy="10" r="1.5" fill="#ffffff" />
            <defs>
              <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3bf" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'tas':
        return (
          <svg viewBox="0 0 48 48" className="cat-svg-icon" fill="none">
            <path d="M 18 17 C 18 10, 30 10, 30 17" stroke="#ffd166" strokeWidth="3" strokeLinecap="round" />
            <path d="M 10 18 L 38 18 C 40 18, 41 20, 40 22 L 36 38 C 35.5 40, 34 41, 32 41 L 16 41 C 14 41, 12.5 40, 12 38 L 8 22 C 7 20, 8 18, 10 18 Z" fill="url(#bagGrad)" stroke="#ffb703" strokeWidth="1.5" />
            <path d="M 10 18 L 24 28 L 38 18" stroke="#ffb703" strokeWidth="1.2" />
            <circle cx="24" cy="28" r="2.8" fill="#ffd700" />
            <defs>
              <linearGradient id="bagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'bunga':
        return (
          <svg viewBox="0 0 48 48" className="cat-svg-icon" fill="none">
            {/* Flower Wrapper */}
            <polygon points="16,24 24,42 32,24" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1" />
            {/* Center Rose */}
            <circle cx="24" cy="18" r="7.5" fill="url(#roseGrad)" />
            <path d="M 21 16 C 23 13, 26 13, 27 16 C 26 19, 22 19, 21 16 Z" fill="#ffe4e6" opacity="0.6" />
            {/* Left Blossom */}
            <circle cx="17" cy="20" r="5.5" fill="#f43f5e" />
            {/* Right Blossom */}
            <circle cx="31" cy="20" r="5.5" fill="#fb7185" />
            {/* Green Leaves */}
            <path d="M 13 22 C 11 18, 15 17, 16 20 Z" fill="#4ade80" />
            <path d="M 35 22 C 37 18, 33 17, 32 20 Z" fill="#4ade80" />
            <defs>
              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'kue':
      default:
        return (
          <svg viewBox="0 0 48 48" className="cat-svg-icon" fill="none">
            {/* Cake Plate */}
            <ellipse cx="24" cy="42" rx="18" ry="3.5" fill="#e2e8f0" />
            {/* Bottom Layer */}
            <path d="M 10 32 C 10 30, 38 30, 38 32 L 38 39 C 38 41, 10 41, 10 39 Z" fill="url(#cakeBaseGrad)" />
            <path d="M 10 32 C 10 34, 38 34, 38 32" stroke="#ff80b0" strokeWidth="2.5" strokeLinecap="round" />
            {/* Top Layer */}
            <path d="M 14 23 C 14 21, 34 21, 34 23 L 34 30 C 34 32, 14 32, 14 30 Z" fill="url(#cakeTopGrad)" />
            <path d="M 14 23 C 14 25, 34 25, 34 23" stroke="#ffd166" strokeWidth="2" strokeLinecap="round" />
            {/* Cream Drips */}
            <path d="M 14 24 Q 19 28, 24 24 Q 29 28, 34 24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            {/* Candles */}
            <line x1="20" y1="21" x2="20" y2="14" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="21" x2="28" y2="14" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
            {/* Candle Flames */}
            <ellipse cx="20" cy="11" rx="1.8" ry="3" fill="#f59e0b" />
            <ellipse cx="20" cy="11.5" rx="1" ry="1.8" fill="#fef08a" />
            <ellipse cx="28" cy="11" rx="1.8" ry="3" fill="#f59e0b" />
            <ellipse cx="28" cy="11.5" rx="1" ry="1.8" fill="#fef08a" />
            {/* Sparkles */}
            <circle cx="11" cy="14" r="1.2" fill="#ffd700" />
            <circle cx="37" cy="14" r="1.2" fill="#ffd700" />
            <defs>
              <linearGradient id="cakeBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff4d88" />
                <stop offset="100%" stopColor="#c9184a" />
              </linearGradient>
              <linearGradient id="cakeTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff3bf" />
                <stop offset="100%" stopColor="#ffc078" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="page-screen gift-screen">
      {/* Top Nav with Back Button */}
      {onBack && (
        <div className="top-nav">
          <div></div>
          <button className="back-btn" onClick={onBack}>
            BACK ◀
          </button>
        </div>
      )}

      {/* DIRECT COUPLE HERO CARD (Compact, romantic, & direct) */}
      <div className="gift-couple-hero-container">
        <div className="gift-couple-hero-card">
          
          {/* Background Couple Photo with Warm Romantic Vignette */}
          <div className="gift-couple-photo-wrap">
            <img 
              src={config.gift.couplePhoto || "/images/couple_kiss_cheek.jpg"} 
              alt="Love of my life" 
              className="gift-couple-img" 
            />
            <div className="gift-couple-warm-overlay"></div>
            <div className="gift-couple-vignette"></div>
          </div>

          {/* Top Date Header (15.10.26 • 23rd Birthday) */}
          <div className="gift-couple-date-header">
            <span className="gift-couple-date-text">
              {config.gift.dateText || "15.10.26 • 23rd Birthday"}
            </span>
          </div>

          {/* Center Romantic Headlines */}
          <div className="gift-couple-content-overlay">
            
            <h2 className="gift-couple-headline-main">
              {config.gift.heroTitle || "I love you, Love!"}
            </h2>
            
            <p className="gift-couple-headline-sub">
              {config.gift.heroSubtitle || "Always proud of you, always here with you."}
            </p>

            {/* 4 Interactive Gift Categories: Cincin, Tas, Bunga, Kue Ultah */}
            <div className="gift-categories-bar">
              {config.gift.categories?.map((cat, index) => {
                const isClicked = clickedIconId === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`gift-category-btn cat-${cat.id} ${isClicked ? 'clicked' : ''}`}
                    onClick={() => handleSelectCategory(cat)}
                    title={`Lihat Kado ${cat.name}`}
                    style={{ animationDelay: `${0.1 + index * 0.12}s` }}
                  >
                    <div className="gift-cat-icon-pod">
                      {renderCategoryIcon(cat.id)}
                      <span className="cat-ripple-ring"></span>
                    </div>
                    <span className="gift-cat-label">{cat.name}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* ===================================================== */}
      {/* GIFT DETAIL MODAL (Opens when clicking an icon)      */}
      {/* ===================================================== */}
      {selectedGift && (
        <div className="gift-category-modal-backdrop" onClick={() => setSelectedGift(null)}>
          <div 
            className="gift-category-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedGift(null)}
              title="Tutup"
            >
              <X size={18} />
            </button>

            {/* Sparkling Icon Center Pod */}
            <div className="modal-icon-pod-center">
              <div className="modal-icon-aura"></div>
              {renderCategoryIcon(selectedGift.id)}
            </div>

            <div className="modal-gift-tag">SPECIAL 23RD BIRTHDAY FOR YOU SAYAANG</div>
            <h3 className="modal-gift-title">{selectedGift.title}</h3>
            
            <p className="modal-gift-desc">{selectedGift.desc}</p>

            {selectedGift.perk && (
              <div className="modal-gift-perk-box">
                <Sparkles size={14} className="modal-perk-heart" />
                <span>{selectedGift.perk}</span>
              </div>
            )}

            {selectedGift.sweetNote && (
              <div className="modal-sweet-note-box">
                <Heart size={14} className="modal-perk-heart" style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                <span>"{selectedGift.sweetNote}"</span>
              </div>
            )}

            {/* Dismiss button */}
            <button 
              className="modal-secondary-btn"
              onClick={() => setSelectedGift(null)}
            >
              Tutup ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
