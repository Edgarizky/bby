import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { config } from '../config';

export default function EnvelopePage({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Confetti burst
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0dc3', '#ffd700', '#ffffff', '#e10098']
    });

    // Wait for flap animation then switch page
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="page-screen">
      <h1 className="envelope-title">{config.envelope.title}</h1>

      <div 
        className={`envelope-wrapper ${isOpening ? 'opened shake' : ''}`}
        onClick={handleClick}
        title="Klik untuk membuka amplop"
      >
        <div className="envelope-base">
          {/* Folds */}
          <div className="envelope-fold-left"></div>
          <div className="envelope-fold-right"></div>
          <div className="envelope-fold-bottom"></div>
          <div className="envelope-flap"></div>

          {/* Purple Wax Seal */}
          <div className="wax-seal" style={{ background: `radial-gradient(circle at 35% 35%, #ca00a5 0%, ${config.envelope.waxSealColor} 50%, #4c003d 100%)` }}>
            <Heart className="wax-seal-icon" fill="#ffd8f5" size={32} />
          </div>
        </div>
      </div>

      <p className="envelope-subtitle">{config.envelope.subtitle}</p>
    </div>
  );
}
