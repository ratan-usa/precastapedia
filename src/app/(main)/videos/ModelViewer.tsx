'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Rotate3d, ZoomIn, ZoomOut, RotateCcw, Play, Pause } from 'lucide-react';

interface ModelViewerProps {
  src: string;
  poster?: string;
  alt?: string;
}

export default function ModelViewer({ src, poster, alt = "3D Product Model" }: ModelViewerProps) {
  const viewerRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  useEffect(() => {
    // Dynamic import to guarantee client-side custom element registration
    import('@google/model-viewer')
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load @google/model-viewer:", err);
      });
  }, []);

  const handleResetCamera = () => {
    if (viewerRef.current) {
      viewerRef.current.cameraOrbit = '0deg 75deg 105%';
      viewerRef.current.cameraTarget = 'auto auto auto';
      viewerRef.current.fieldOfView = 'auto';
    }
  };

  const handleZoomIn = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(1);
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      viewerRef.current.zoom(-1);
    }
  };

  const toggleAutoRotate = () => {
    if (viewerRef.current) {
      const nextState = !isAutoRotate;
      setIsAutoRotate(nextState);
      viewerRef.current.autoRotate = nextState;
    }
  };

  return (
    <div className="w-full h-full min-h-[320px] sm:min-h-[360px] bg-[#0a0a0a] rounded-none overflow-hidden relative group flex flex-col items-center justify-center">
      {/* 3D Model Viewer Custom Element */}
      {/* @ts-ignore */}
      <model-viewer
        ref={viewerRef}
        src={src}
        poster={poster}
        alt={alt}
        auto-rotate={isAutoRotate ? "" : undefined}
        camera-controls=""
        touch-action="pan-y"
        shadow-intensity="1.5"
        exposure="1.2"
        loading="eager"
        reveal="auto"
        interaction-prompt="none"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '320px',
          display: 'block',
          backgroundColor: '#0a0a0a',
          cursor: 'grab'
        }}
      />

      {/* Floating Interactive 3D Control Bar */}
      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md border border-zinc-800 p-1">
        <button
          onClick={toggleAutoRotate}
          title={isAutoRotate ? "Pause Auto Rotation" : "Start Auto Rotation"}
          className={`p-1.5 transition-colors ${isAutoRotate ? 'text-[#CC0000] bg-zinc-900' : 'text-zinc-400 hover:text-white'}`}
        >
          {isAutoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleResetCamera}
          title="Reset 3D Viewpoint"
          className="p-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Hint Indicator */}
      <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-[#0a0a0a]/90 border border-zinc-800 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-zinc-300 pointer-events-none">
        <Rotate3d className="w-3 h-3 text-[#CC0000]" />
        <span>360° Drag / Scroll to Zoom</span>
      </div>
    </div>
  );
}