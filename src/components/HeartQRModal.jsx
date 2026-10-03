import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Download, Copy, Check, RotateCcw } from 'lucide-react';
import { config } from '../config';

export default function HeartQRModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const defaultTargetUrl = config.productionUrl || 'https://bbyokta.biz.id';
  const [currentUrl, setCurrentUrl] = useState(defaultTargetUrl);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const urlToEncode = currentUrl || defaultTargetUrl;
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toCanvas(
      canvas,
      urlToEncode,
      {
        width: 240,
        margin: 2,
        errorCorrectionLevel: 'H', // High error correction so it scans reliably
        color: {
          dark: '#ff0dc3', // Hot Pink / Magenta
          light: '#0b141a', // WhatsApp dark background
        },
      },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, [isOpen, currentUrl, defaultTargetUrl]);

  if (!isOpen) return null;

  // Download ONLY the Heart QR Code
  const handleDownload = async () => {
    try {
      const qrCanvas = document.createElement('canvas');
      const size = 500;
      qrCanvas.width = size;
      qrCanvas.height = size;
      const ctx = qrCanvas.getContext('2d');
      if (!ctx) return;

      // Dark background
      ctx.fillStyle = '#0b141a';
      ctx.fillRect(0, 0, size, size);

      // Generate high-res QR code
      const qrDataUrl = await QRCode.toDataURL(currentUrl || defaultTargetUrl, {
        width: 440,
        margin: 2,
        errorCorrectionLevel: 'H',
        color: {
          dark: '#ff0dc3',
          light: '#0b141a',
        },
      });

      const qrImg = new Image();
      qrImg.src = qrDataUrl;
      await new Promise((resolve) => {
        qrImg.onload = resolve;
      });

      // Heart Path scaled to 440x440
      const heartPath = new Path2D("M 220 420 C 18 256, 0 110, 92 36 C 165 -18, 220 36, 220 73 C 220 36, 275 -18, 348 36 C 440 110, 422 256, 220 420 Z");

      ctx.save();
      ctx.translate(30, 25);
      ctx.clip(heartPath);
      ctx.drawImage(qrImg, 0, 0, 440, 440);
      ctx.restore();

      // Glowing pink heart outline
      ctx.save();
      ctx.translate(30, 25);
      ctx.strokeStyle = '#ff0dc3';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#ff0dc3';
      ctx.shadowBlur = 18;
      ctx.stroke(heartPath);
      ctx.restore();

      const link = document.createElement('a');
      link.href = qrCanvas.toDataURL('image/png');
      link.download = `qr-hati-bbyokta.png`;
      link.click();
    } catch (err) {
      console.error("Error downloading QR:", err);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetUrl = () => {
    setCurrentUrl(defaultTargetUrl);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-cursive)', fontSize: '2.5rem', color: '#ff0dc3', marginBottom: '20px' }}>
          Heart QR Code 💕
        </h3>

        {/* QR Code Hati (Hanya QR Code, tanpa teks preview chat WhatsApp) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            clipPath: 'path("M 120 230 C 10 140, 0 60, 50 20 C 90 -10, 120 20, 120 40 C 120 20, 150 -10, 190 20 C 240 60, 230 140, 120 230 Z")',
            background: '#0b141a',
            boxShadow: '0 0 30px rgba(255, 13, 195, 0.65)'
          }}>
            <canvas ref={canvasRef} style={{ display: 'block' }} />
          </div>
        </div>

        {/* Target URL Input (default: https://bbyokta.biz.id) */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <label style={{ fontSize: '0.8rem', color: '#aaa' }}>
              Alamat Website (Tujuan Scan):
            </label>
            {currentUrl !== defaultTargetUrl && (
              <button 
                onClick={handleResetUrl}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ff80bf',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}
              >
                <RotateCcw size={12} /> Reset ke bbyokta.biz.id
              </button>
            )}
          </div>
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
              title="Salin Link"
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

        {/* Action Button: Download QR Hati */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={handleDownload}
            style={{
              background: 'linear-gradient(135deg, #ff0dc3, #8e0078)',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(255, 13, 195, 0.5)'
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
