import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Camera, Clock, Disc, Gift } from 'lucide-react';
import { config } from '../config';

export default function SurpriseMenu({ onSelect, onBack }) {
  const [activeTransitionId, setActiveTransitionId] = useState(null);

  const handleItemClick = (id) => {
    if (activeTransitionId) return; // Prevent duplicate clicks
    setActiveTransitionId(id);

    // Custom themed confetti explosion for each specific menu page
    const colors = id === 'journey' ? ['#ffd700', '#ffffff', '#ff69b4', '#ffe4e6']
                 : id === 'moment' ? ['#ff0dc3', '#ffd700', '#ff4d6d', '#ffffff']
                 : id === 'playlist' ? ['#00f5d4', '#7b2cbf', '#ff007f', '#ffffff']
                 : ['#ffd700', '#ff0dc3', '#25d366', '#ffffff', '#f72585'];

    confetti({
      particleCount: 55,
      spread: 90,
      origin: { y: 0.6 },
      colors
    });

    // Trigger page navigation after the icon bounce and shockwave pulse complete
    setTimeout(() => {
      onSelect(id);
    }, 420);
  };

  // Render sleek modern vector graphics with gradients, specular highlights & depth
  const renderIcon = (type) => {
    switch (type) {
      case 'camera':
        return (
          <svg className="icon-camera-img modern-svg-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="camBody" x1="12" y1="20" x2="68" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="camLensRing" x1="22" y1="22" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="camLensGlass" x1="26" y1="26" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="60%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#312e81" />
              </linearGradient>
              <filter id="camDrop" x="6" y="10" width="68" height="64" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)" />
              </filter>
            </defs>
            {/* Camera Viewfinder bump */}
            <path d="M26 23V17C26 15 27.5 13.5 29.5 13.5H38.5C40.5 13.5 42 15 42 17V23H26Z" fill="#94a3b8" />
            {/* Shutter button */}
            <rect x="47" y="19" width="9" height="4" rx="2" fill="#ff4d88" />
            {/* Camera Main Body */}
            <rect x="12" y="23" width="56" height="43" rx="13" fill="url(#camBody)" filter="url(#camDrop)" />
            {/* Top metallic bar */}
            <path d="M12 33C12 27.477 16.477 23 22 23H58C63.523 23 68 27.477 68 33V35H12V33Z" fill="#e2e8f0" opacity="0.8" />
            {/* Flash & sensor */}
            <circle cx="57" cy="30" r="3.5" fill="#ffd166" />
            <circle cx="57" cy="30" r="1.5" fill="#ffffff" />
            <circle cx="21" cy="30" r="2" fill="#38bdf8" />
            {/* Outer Lens with gold metallic ring */}
            <circle cx="40" cy="46" r="17" fill="url(#camLensRing)" />
            {/* Dark glass lens */}
            <circle cx="40" cy="46" r="13.5" fill="url(#camLensGlass)" />
            {/* Optical reflections */}
            <ellipse cx="36" cy="42" rx="4" ry="2.2" transform="rotate(-35 36 42)" fill="#ffffff" opacity="0.65" />
            <circle cx="44.5" cy="50" r="1.5" fill="#38bdf8" opacity="0.75" />
          </svg>
        );
      case 'watch':
        return (
          <svg className="icon-watch-img modern-svg-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="clockBezel" x1="12" y1="12" x2="68" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffd885" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="clockFace" x1="16" y1="16" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
              <filter id="clockDrop" x="6" y="8" width="68" height="68" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)" />
              </filter>
            </defs>
            {/* Top crown / winder */}
            <rect x="37" y="9" width="6" height="5" rx="2" fill="#d97706" />
            <rect x="36" y="13" width="8" height="3" rx="1.5" fill="#f59e0b" />
            {/* Gold Bezel Outer */}
            <circle cx="40" cy="43" r="28" fill="url(#clockBezel)" filter="url(#clockDrop)" />
            {/* Dial Face */}
            <circle cx="40" cy="43" r="23" fill="url(#clockFace)" />
            {/* Minimalist hour tick marks */}
            <circle cx="40" cy="25" r="1.8" fill="#475569" />
            <circle cx="58" cy="43" r="1.8" fill="#475569" />
            <circle cx="40" cy="61" r="1.8" fill="#475569" />
            <circle cx="22" cy="43" r="1.8" fill="#475569" />
            <circle cx="49" cy="27.4" r="1.2" fill="#94a3b8" />
            <circle cx="55.6" cy="34" r="1.2" fill="#94a3b8" />
            <circle cx="55.6" cy="52" r="1.2" fill="#94a3b8" />
            <circle cx="49" cy="58.6" r="1.2" fill="#94a3b8" />
            <circle cx="31" cy="58.6" r="1.2" fill="#94a3b8" />
            <circle cx="24.4" cy="52" r="1.2" fill="#94a3b8" />
            <circle cx="24.4" cy="34" r="1.2" fill="#94a3b8" />
            <circle cx="31" cy="27.4" r="1.2" fill="#94a3b8" />
            {/* Hour hand (pointing to ~10) */}
            <line x1="40" y1="43" x2="29" y2="31" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" />
            {/* Minute hand (pointing to ~2) */}
            <line x1="40" y1="43" x2="52" y2="32" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" />
            {/* Second hand (vibrant pink/red) */}
            <line x1="40" y1="46" x2="40" y2="24" stroke="#ff007f" strokeWidth="1.4" strokeLinecap="round" />
            {/* Center Axis Jewel */}
            <circle cx="40" cy="43" r="2.8" fill="#ff007f" />
            <circle cx="40" cy="43" r="1" fill="#ffffff" />
          </svg>
        );
      case 'disc':
        return (
          <svg className="icon-disc-img modern-svg-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="discGrad" x1="12" y1="12" x2="68" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="35%" stopColor="#1e293b" />
                <stop offset="70%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
              <linearGradient id="discCenter" x1="28" y1="28" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#99004d" />
              </linearGradient>
              <filter id="discDrop" x="6" y="6" width="68" height="68" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)" />
              </filter>
            </defs>
            {/* Vinyl Body */}
            <circle cx="40" cy="40" r="29" fill="url(#discGrad)" filter="url(#discDrop)" />
            {/* Fine Vinyl Grooves */}
            <circle cx="40" cy="40" r="25.5" stroke="rgba(255,255,255,0.09)" strokeWidth="1.2" fill="none" />
            <circle cx="40" cy="40" r="22" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" fill="none" />
            <circle cx="40" cy="40" r="18.5" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" fill="none" />
            {/* Specular sheen arcs */}
            <path d="M21 28 A 24 24 0 0 1 52 18" stroke="rgba(255,255,255,0.32)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M59 52 A 24 24 0 0 1 28 62" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Center Label */}
            <circle cx="40" cy="40" r="11" fill="url(#discCenter)" stroke="#ffd166" strokeWidth="1.5" />
            {/* Spindle hole */}
            <circle cx="40" cy="40" r="3.2" fill="#0f172a" />
            <circle cx="40" cy="40" r="4.2" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" fill="none" />
          </svg>
        );
      case 'gift':
        return (
          <svg className="icon-gift-img modern-svg-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="giftBox" x1="16" y1="33" x2="64" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff2a6d" />
                <stop offset="50%" stopColor="#db005b" />
                <stop offset="100%" stopColor="#800033" />
              </linearGradient>
              <linearGradient id="giftLidGrad" x1="12" y1="24" x2="68" y2="37" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff4d88" />
                <stop offset="100%" stopColor="#a30044" />
              </linearGradient>
              <linearGradient id="ribbonGold" x1="36" y1="12" x2="44" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff2b2" />
                <stop offset="40%" stopColor="#ffd166" />
                <stop offset="100%" stopColor="#e09f3e" />
              </linearGradient>
              <filter id="giftShadow" x="6" y="8" width="68" height="66" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)" />
              </filter>
            </defs>
            {/* Gift Box Body */}
            <rect x="18" y="34" width="44" height="34" rx="8" fill="url(#giftBox)" filter="url(#giftShadow)" />
            {/* Vertical Ribbon */}
            <rect x="36" y="34" width="8" height="34" fill="url(#ribbonGold)" />
            {/* Gift Box Lid */}
            <rect x="14" y="25" width="52" height="12" rx="4" fill="url(#giftLidGrad)" filter="url(#giftShadow)" />
            {/* Lid Ribbon */}
            <rect x="36" y="25" width="8" height="12" fill="url(#ribbonGold)" />
            {/* 3D Flowing Ribbon Bow loops */}
            <path d="M40 25C34 13 20 16 26 24C29 28 36 26 40 25Z" fill="url(#ribbonGold)" />
            <path d="M40 25C46 13 60 16 54 24C51 28 44 26 40 25Z" fill="url(#ribbonGold)" />
            {/* Center knot */}
            <circle cx="40" cy="25" r="3.5" fill="#fff2b2" />
            <circle cx="39" cy="24" r="1.2" fill="#ffffff" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-screen menu-screen">
      {/* Top Nav with Back Button */}
      {onBack && (
        <div className="top-nav">
          <div></div>
          <button className="back-btn" onClick={onBack}>
            BACK ◀
          </button>
        </div>
      )}

      <h1 className={`choose-title ${activeTransitionId ? 'title-fading' : ''}`}>{config.menu.title}</h1>

      <div className={`surprise-grid ${activeTransitionId ? 'is-transitioning' : ''}`}>
        {config.menu.items.map((item) => {
          const isSelected = activeTransitionId === item.id;
          const isOther = activeTransitionId && !isSelected;
          return (
            <button
              key={item.id}
              className={`surprise-item ${isSelected ? 'selected-pulse' : ''} ${isOther ? 'dimmed-out' : ''}`}
              onClick={() => handleItemClick(item.id)}
              title={item.desc}
              disabled={Boolean(activeTransitionId)}
            >
              <div className="icon-glow-container">
                <div className="golden-ray-burst"></div>
                {isSelected && <div className="transition-blast-ring"></div>}
                <div className="surprise-icon-wrapper">
                  {renderIcon(item.icon)}
                </div>
              </div>
              <div className="surprise-item-title">{item.title}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
