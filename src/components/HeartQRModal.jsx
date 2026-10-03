import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Download, Share2, Heart, Copy, Check, RotateCcw } from 'lucide-react';
import { config } from '../config';

export default function HeartQRModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const defaultTargetUrl = config.productionUrl || 'https://bbyokta.biz.id';
  const [currentUrl, setCurrentUrl] = useState(defaultTargetUrl);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

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
        errorCorrectionLevel: 'H', // High error correction so it scans even inside shapes
        color: {
          dark: '#ff0dc3', // Hot Pink / Magenta as seen in video
          light: '#0b141a', // WhatsApp dark background
        },
      },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, [isOpen, currentUrl, defaultTargetUrl]);

  if (!isOpen) return null;

  // Generate and download the full viral WhatsApp Chat Card (Gambar 2 mockup)
  const handleDownloadCard = async () => {
    try {
      setDownloading(true);
      const cardCanvas = document.createElement('canvas');
      cardCanvas.width = 720;
      cardCanvas.height = 920;
      const ctx = cardCanvas.getContext('2d');
      if (!ctx) return;

      // Background WhatsApp Dark
      ctx.fillStyle = '#0b141a';
      ctx.fillRect(0, 0, cardCanvas.width, cardCanvas.height);

      // Subtle ambient glow
      const grad = ctx.createRadialGradient(360, 420, 50, 360, 420, 380);
      grad.addColorStop(0, 'rgba(255, 13, 195, 0.16)');
      grad.addColorStop(1, 'rgba(11, 20, 26, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cardCanvas.width, cardCanvas.height);

      // Card frame
      ctx.strokeStyle = 'rgba(255, 13, 195, 0.35)';
      ctx.lineWidth = 3;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(24, 24, 672, 872, 28);
        ctx.stroke();
      }

      // Top WhatsApp bubble (#005c4b)
      const topText = config.whatsappShare?.chatPreviewSender || "HAPPY 23RD BIRTHDAY BUBUBBB 🥳💖💖💖";
      ctx.font = 'bold 23px system-ui, -apple-system, sans-serif';
      const topMetrics = ctx.measureText(topText);
      const bubbleWidth = Math.min(topMetrics.width + 48, 640);
      const bubbleX = (720 - bubbleWidth) / 2;
      
      ctx.fillStyle = '#005c4b';
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(bubbleX, 55, bubbleWidth, 52, 16);
        ctx.fill();
      } else {
        ctx.fillRect(bubbleX, 55, bubbleWidth, 52);
      }
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(topText, 360, 81);

      // Generate high-res QR code
      const qrDataUrl = await QRCode.toDataURL(currentUrl || defaultTargetUrl, {
        width: 420,
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

      // Heart clipping path scaled from 240x240 to 420x420 (scale = 1.75)
      const heartPath = new Path2D("M 210 402.5 C 17.5 245, 0 105, 87.5 35 C 157.5 -17.5, 210 35, 210 70 C 210 35, 262.5 -17.5, 332.5 35 C 420 105, 402.5 245, 210 402.5 Z");

      // Draw Heart Clipped QR
      ctx.save();
      ctx.translate(360 - 210, 150);
      ctx.clip(heartPath);
      ctx.drawImage(qrImg, 0, 0, 420, 420);
      ctx.restore();

      // Heart Glow & Border
      ctx.save();
      ctx.translate(360 - 210, 150);
      ctx.strokeStyle = '#ff0dc3';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#ff0dc3';
      ctx.shadowBlur = 18;
      ctx.stroke(heartPath);
      ctx.restore();

      // Bottom Bubble (#005c4b)
      const bottomText = config.whatsappShare?.chatPreviewBubble || "COBA BUKA INI, ADA SURPRISE SPESIAL BUAT KAMU SAYANG 👇❤️";
      ctx.font = 'bold 21px system-ui, -apple-system, sans-serif';
      const bMetrics = ctx.measureText(bottomText);
      const bBubbleWidth = Math.min(bMetrics.width + 48, 640);
      const bBubbleX = (720 - bBubbleWidth) / 2;
      
      ctx.fillStyle = '#005c4b';
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(bBubbleX, 630, bBubbleWidth, 52, 16);
        ctx.fill();
      } else {
        ctx.fillRect(bBubbleX, 630, bBubbleWidth, 52);
      }
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(bottomText, 360, 656);

      // URL Footer (Clean and readable)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '600 17px system-ui, -apple-system, sans-serif';
      ctx.fillText(currentUrl || defaultTargetUrl, 360, 740);

      // Romantic Signature
      ctx.fillStyle = '#ff80bf';
      ctx.font = 'italic 15px system-ui, -apple-system, sans-serif';
      ctx.fillText("Special 23rd Birthday Surprise for Dewi • Created with Love by Edgar ❤️", 360, 775);

      const link = document.createElement('a');
      link.href = cardCanvas.toDataURL('image/png');
      link.download = `kartu-qr-kado-dewi.png`;
      link.click();
    } catch (err) {
      console.error("Error generating card:", err);
    } finally {
      setDownloading(false);
    }
  };

  const handleDownloadSquare = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(currentUrl || defaultTargetUrl, {
        width: 500,
        margin: 2,
        errorCorrectionLevel: 'H',
        color: {
          dark: '#ff0dc3',
          light: '#0b141a',
        },
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `qr-code-kado-dewi.png`;
      a.click();
    } catch (err) {
      console.error(err);
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

        <h3 style={{ fontFamily: 'var(--font-cursive)', fontSize: '2.5rem', color: '#ff0dc3', marginBottom: '8px' }}>
          Heart QR Code Generator 💕
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#f0d9e8', marginBottom: '16px', lineHeight: '1.4' }}>
          Scan kode hati ini untuk membuka kado website ultah ke-23 Dewi di <strong>bbyokta.biz.id</strong>. Simpan gambarnya dan kirimkan ke chat WhatsApp pasanganmu! ✨
        </p>

        {/* WhatsApp Chat Preview Mockup (matches Gambar 2) */}
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

        {/* Target URL Input (default: https://bbyokta.biz.id) */}
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
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
                <RotateCcw size={12} /> Reset ke default
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

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button 
            onClick={handleDownloadCard}
            disabled={downloading}
            style={{
              background: 'linear-gradient(135deg, #ff0dc3, #8e0078)',
              color: '#fff',
              border: 'none',
              padding: '11px 20px',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(255, 13, 195, 0.45)',
              opacity: downloading ? 0.7 : 1
            }}
          >
            <Download size={18} />
            {downloading ? 'Membuat Gambar...' : 'Download Kartu WhatsApp (Siap Kirim) 📲'}
          </button>

          <button 
            onClick={handleDownloadSquare}
            style={{
              background: 'transparent',
              color: '#f0d9e8',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontWeight: 500,
              fontSize: '0.78rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Heart size={13} fill="#ff0dc3" stroke="none" />
            Download QR Code Saja
          </button>
        </div>
      </div>
    </div>
  );
}
