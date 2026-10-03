import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Download, Share2, Heart, Copy, Check } from 'lucide-react';
import { config } from '../config';

export default function HeartQRModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState(window.location.href);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const urlToEncode = currentUrl || window.location.href;
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toCanvas(
      canvas,
      urlToEncode,
      {
        width: 240,
        margin: 2,
        color: {
          dark: '#ff0dc3', // Hot Pink / Magenta as seen in video
          light: '#0b141a', // WhatsApp dark background
        },
      },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, [isOpen, currentUrl]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = image;
    a.download = `kado-qr-${config.partnerName.toLowerCase().replace(/\s+/g, '-')}.png`;
    a.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-cursive)', fontSize: '2.5rem', color: '#ff0dc3', marginBottom: '8px' }}>
          Heart QR Code Generator
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#ccc', marginBottom: '16px' }}>
          Scan ini yang ada di awal video TikTok! Simpan gambarnya lalu kirimkan ke chat WhatsApp pasanganmu.
        </p>

        {/* WhatsApp Chat Preview Mockup */}
        <div className="whatsapp-mockup">
          <div className="whatsapp-bubble">
            <strong>{config.whatsappShare.chatPreviewSender}</strong>
          </div>

          {/* Heart Framed QR Code */}
          <div className="heart-qr-frame">
            <div style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              clipPath: 'path("M 120 230 C 10 140, 0 60, 50 20 C 90 -10, 120 20, 120 40 C 120 20, 150 -10, 190 20 C 240 60, 230 140, 120 230 Z")',
              background: '#0b141a',
              boxShadow: '0 0 25px rgba(255, 13, 195, 0.6)'
            }}>
              <canvas ref={canvasRef} style={{ display: 'block' }} />
            </div>
          </div>

          <div className="whatsapp-bubble" style={{ marginTop: '12px', marginBottom: 0 }}>
            {config.whatsappShare.chatPreviewBubble}
          </div>
        </div>

        {/* Custom URL Input (e.g. after deploying to Vercel) */}
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label style={{ fontSize: '0.8rem', color: '#aaa', display: 'block', marginBottom: '4px' }}>
            Link Website (Otomatis atau ganti link Vercel Anda):
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              value={currentUrl} 
              onChange={(e) => setCurrentUrl(e.target.value)}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            />
            <button 
              onClick={handleCopyLink}
              style={{
                background: 'rgba(255, 13, 195, 0.3)',
                border: '1px solid #ff0dc3',
                color: '#fff',
                padding: '0 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            onClick={handleDownload}
            style={{
              background: 'linear-gradient(135deg, #ff0dc3, #8e0078)',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Download size={18} />
            Download QR Hati
          </button>
        </div>
      </div>
    </div>
  );
}
