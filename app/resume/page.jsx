"use client"
import { useState, useEffect } from 'react';
import { FaDownload, FaExpand, FaCompress, FaEye, FaFilePdf } from 'react-icons/fa';

export default function ResumePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const resumeUrl = '/shreyaschandolkar/resume.pdf';

  // Ensure component is mounted before rendering dynamic content
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Shreyas-Chandolkar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setPdfError(true);
  };

  // Handle escape key for fullscreen exit
  useEffect(() => {
    if (!isMounted) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreen, isMounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <main className="w-full mx-auto px-1 sm:px-2 mt-0 flex-grow">
        <div className="relative bg-white light:bg-gray-50 rounded-lg shadow-xl overflow-hidden border border-gray-200 light:border-gray-300 mt-2">
          <div className="bg-light-blue border-b border-medium-blue px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaFilePdf className="w-5 h-5 text-primary-blue" />
                <span className="heading-tertiary text-primary-blue">Loading...</span>
              </div>
            </div>
          </div>
          <div className="h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
          </div>
        </div>
      </main>
    );
  }

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900 light:bg-white">
        <div className="h-full relative overflow-hidden">
          {/* Loading Spinner for Fullscreen */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 light:bg-white">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
                <p className="text-blue-gray body-text">Loading resume...</p>
              </div>
            </div>
          )}

          {/* PDF Iframe for Fullscreen */}
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=Fit`}
            className="w-full h-full border-0"
            title="Resume - Shreyas Chandolkar"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ display: isLoading ? 'none' : 'block' }}
          />

          {/* Fullscreen Controls */}
          <div className="fixed top-4 right-4 z-60">
            <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
              <button
                onClick={handleDownload}
                className="p-2 bg-primary-blue hover:bg-opacity-90 text-white rounded-md transition-all duration-200"
                title="Download Resume"
              >
                <FaDownload className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-all duration-200"
                title="Exit Fullscreen (ESC)"
              >
                <FaCompress className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full mx-auto px-1 sm:px-2 mt-0 flex-grow">
      {/* PDF Viewer Container */}
      <div className="relative bg-white light:bg-gray-50 rounded-lg shadow-xl overflow-hidden border border-gray-200 light:border-gray-300 mt-2">
        {/* Viewer Header */}
        <div className="bg-light-blue border-b border-medium-blue px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaFilePdf className="w-5 h-5 text-primary-blue" />
              <span className="heading-tertiary text-primary-blue">Shreyas-Chandolkar-Resume.pdf</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownload}
                className="p-2 text-blue-gray hover:text-primary-blue hover:bg-primary-blue hover:bg-opacity-10 rounded-md transition-all duration-200"
                title="Download"
              >
                <FaDownload className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-blue-gray hover:text-primary-blue hover:bg-primary-blue hover:bg-opacity-10 rounded-md transition-all duration-200"
                title="Fullscreen"
              >
                <FaExpand className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative" style={{ height: 'calc(100vh - 16rem)', minHeight: '600px' }}>
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white light:bg-gray-50">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
                <p className="text-blue-gray body-text">Loading your resume...</p>
                <div className="w-48 bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary-blue h-1.5 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* PDF Iframe */}
          {!pdfError && (
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=125&view=FitH`}
              className="w-full h-full border-0"
              title="Resume - Shreyas Chandolkar"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ display: isLoading ? 'none' : 'block' }}
            />
          )}

          {/* Error Fallback */}
          {pdfError && (
            <div className="absolute inset-0 flex items-center justify-center bg-light-blue">
              <div className="text-center space-y-6 p-8 max-w-md">
                <div className="text-6xl text-primary-blue">
                  <FaFilePdf />
                </div>
                <div>
                  <h3 className="text-xl heading-secondary text-primary-blue mb-2">
                    PDF Viewer Unavailable
                  </h3>
                  <p className="text-blue-gray body-text mb-4">
                    Your browser doesn&apos;t support inline PDF viewing or the file couldn&apos;t be loaded.
                    Download the resume to view it in your default PDF reader.
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-opacity-90 text-white rounded-lg transition-all duration-200 shadow-lg ui-text font-medium"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}