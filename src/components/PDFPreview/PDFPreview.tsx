import React, { useState, useRef } from 'react';
import { X, DownloadSimple, MagnifyingGlassPlus, MagnifyingGlassMinus, ArrowClockwise, ArrowsOut, ArrowsIn } from 'phosphor-react';

interface PDFPreviewProps {
  url: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFPreview({ url, title, isOpen, onClose }: PDFPreviewProps) {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    link.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleClose = () => {
    // Reset alle Einstellungen beim Schließen
    setZoom(100);
    setRotation(0);
    setIsFullscreen(false);
    setIsLoading(true);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed w-full h-full inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className={`bg-white rounded-lg shadow-2xl ${
          isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-full max-h-[90vh]'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900 truncate max-w-md">
              {title}
            </h3>
            {isLoading && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-greenDefault"></div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-white rounded-lg border border-gray-300">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Verkleinern"
              >
                <MagnifyingGlassMinus size={16} />
              </button>
              <span className="px-2 py-1 text-sm font-medium min-w-[3rem] text-center">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 300}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Vergrößern"
              >
                <MagnifyingGlassPlus size={16} />
              </button>
            </div>

            {/* Rotate Button */}
            <button
              onClick={handleRotate}
              className="p-2 hover:bg-gray-100 rounded-lg border border-gray-300"
              title="Drehen"
            >
              <ArrowClockwise size={16} />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={handleFullscreen}
              className="p-2 hover:bg-gray-100 rounded-lg border border-gray-300"
              title={isFullscreen ? "Vollbild beenden" : "Vollbild"}
            >
              {isFullscreen ? <ArrowsIn size={16} /> : <ArrowsOut size={16} />}
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="p-2 hover:bg-gray-100 rounded-lg border border-gray-300"
              title="Herunterladen"
            >
              <DownloadSimple size={16} />
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="p-2 hover:bg-red-100 text-red-600 rounded-lg border border-red-300"
              title="Schließen"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-hidden">
          <div 
            className="w-full h-full overflow-auto bg-gray-100"
            style={{ 
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'top left'
            }}
          >
            <iframe
              ref={iframeRef}
              src={`${url}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              title={title}
            />
          </div>
        </div>

        {/* Footer with additional info */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <span>PDF-Vorschau • Zoom: {zoom}% • Rotation: {rotation}°</span>
            <div className="flex space-x-4">
              <span>ESC zum Schließen</span>
              <span>Strg + Mausrad zum Zoomen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
