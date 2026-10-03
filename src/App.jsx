import React, { useState, useRef } from 'react';
import EnvelopePage from './components/EnvelopePage';
import CelebrationPage from './components/CelebrationPage';
import SurpriseMenu from './components/SurpriseMenu';
import JourneyPage from './components/JourneyPage';
import MomentPage from './components/MomentPage';
import PlaylistPage from './components/PlaylistPage';
import GiftPage from './components/GiftPage';
import HeartQRModal from './components/HeartQRModal';
import AudioController from './components/AudioController';
import { QrCode, Sparkles, RotateCw } from 'lucide-react';

export default function App() {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const [currentPage, setCurrentPage] = useState(urlParams?.get('page') || 'envelope'); // 'envelope', 'celebration', 'menu', 'journey', 'moment', 'playlist', 'gift'
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [audioTrigger, setAudioTrigger] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isLandscapeMode, setIsLandscapeMode] = useState(true); // Default true: full widescreen on all pages for mobile
  const audioControllerRef = useRef(null);

  // When envelope is opened, trigger music and go to celebration
  const handleOpenEnvelope = () => {
    setAudioTrigger(true);
    setCurrentPage('celebration');
    // Start audio
    if (audioControllerRef.current) {
      audioControllerRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  const handleToggleAudio = () => {
    if (audioControllerRef.current) {
      audioControllerRef.current.togglePlay();
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  return (
    <div className={`app-container ${isLandscapeMode ? 'force-landscape' : 'standard-portrait'}`}>
      <div className="app-viewport-frame">
        {/* Ambient Sparkles Drift */}
        <div className="ambient-glow"></div>

        {/* Global Landscape Mode Switcher for Mobile */}
        <button 
          className="global-landscape-toggle-btn"
          onClick={() => setIsLandscapeMode(!isLandscapeMode)}
          title="Ubah Mode Tampilan (Landscape / Portrait)"
        >
          <RotateCw size={13} />
          <span>{isLandscapeMode ? "Landscape 90°" : "Portrait"}</span>
        </button>

        {/* Floating Audio Controller */}
        <AudioController 
          ref={audioControllerRef} 
          autoPlayTrigger={audioTrigger} 
        />

        {/* Heart QR Generator Trigger Button */}
        <button 
          className="qr-modal-btn" 
          onClick={() => setIsQrModalOpen(true)}
          title="Buka Generator QR Code WhatsApp"
        >
          <QrCode size={18} color="#ff0dc3" />
          <span>Kado WhatsApp QR</span>
        </button>

        {/* QR Code Modal */}
        <HeartQRModal 
          isOpen={isQrModalOpen} 
          onClose={() => setIsQrModalOpen(false)} 
        />

        {/* Page Content Switching with Animated Page Transition Wrapper */}
        <div className="page-transition-wrapper" key={currentPage}>
          {currentPage === 'envelope' && (
            <EnvelopePage onOpen={handleOpenEnvelope} />
          )}

          {currentPage === 'celebration' && (
            <CelebrationPage 
              onNext={() => setCurrentPage('menu')} 
              onBack={() => setCurrentPage('envelope')} 
            />
          )}

          {currentPage === 'menu' && (
            <SurpriseMenu 
              onSelect={(id) => setCurrentPage(id)} 
              onBack={() => setCurrentPage('celebration')} 
            />
          )}

          {currentPage === 'journey' && (
            <JourneyPage onBack={() => setCurrentPage('menu')} />
          )}

          {currentPage === 'moment' && (
            <MomentPage 
              onBack={() => setCurrentPage('menu')} 
              isAudioPlaying={isAudioPlaying}
              onToggleAudio={handleToggleAudio}
            />
          )}

          {currentPage === 'playlist' && (
            <PlaylistPage onBack={() => setCurrentPage('menu')} />
          )}

          {currentPage === 'gift' && (
            <GiftPage onBack={() => setCurrentPage('menu')} />
          )}
        </div>

        {/* Global Footer on All Pages (Centered at very bottom) */}
        <footer className="global-footer-credit">
          <span>Made with ❤️ by Edgar</span>
        </footer>
      </div>
    </div>
  );
}
