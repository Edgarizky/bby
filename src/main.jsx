import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { config } from './config';

// Pre-load and pre-decode all critical frames, flowers, textures & user photos immediately into GPU memory
const assetImages = [
  '/images/classic_gold_frame.webp',
  '/images/vintage_baroque_frame.webp',
  '/images/corner_red_rose.webp',
  '/images/vintage_camera.webp',
  '/images/moment_rose_cluster.webp',
  '/images/white_daisy.webp',
  '/images/pink_rose.webp',
  '/images/pink_lily.webp',
  '/images/pink_butterfly.webp',
  '/images/white_blossoms.webp',
  '/images/couple_kiss_cheek.jpg',
  '/images/crumpled_paper_texture.jpg'
];

const configPhotos = [
  config.celebration?.heartPhoto,
  config.celebration?.polaroidPhoto,
  ...(config.celebration?.photostrip || []),
  config.moment?.photo,
  ...(config.playlist?.frames?.map(f => f.url) || []),
  ...(config.journey?.photos?.map(p => p.url) || [])
].filter(Boolean);

const allImagesToPreload = [...new Set([...assetImages, ...configPhotos])];

if (typeof window !== 'undefined') {
  allImagesToPreload.forEach((src) => {
    const img = new Image();
    img.loading = 'eager';
    img.decoding = 'sync';
    img.src = src;
    if (img.decode) {
      img.decode().catch(() => {});
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

