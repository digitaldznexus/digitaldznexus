import React from 'react';

interface PopupInfoProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export const PopupInfo: React.FC<PopupInfoProps> = ({ open, onClose, message }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6 sm:p-8 max-w-md w-[90vw] text-center relative transition-all duration-300">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-md mb-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="none"/><path d="M12 8v4m0 4h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"/></svg>
          </span>
          <p className="text-base sm:text-lg text-gray-800 font-medium" style={{textShadow:'0 1px 2px #fff8'}}> {message} </p>
        </div>
        <button
          onClick={onClose}
          className="mt-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow transition-all"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}; 