
import React, { useState } from 'react';

const ImageConverter: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [url, setUrl] = useState('');
  const [base64, setBase64] = useState('');
  const [status, setStatus] = useState('');

  const convertFromUrl = async () => {
    if (!url) return;
    setStatus('FETCHING...');
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64(reader.result as string);
        setStatus('CONVERTED! COPY BELOW:');
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      setStatus('ERROR: Link might be blocked by CORS. Try a local file below.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus('READING FILE...');
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result as string);
      setStatus('FILE CONVERTED! COPY BELOW:');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="bg-zinc-900 border-2 border-purple-600 rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 bg-purple-950/30 border-b border-purple-900/50 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-heading text-white">PUCK'S BASE64 MACHINE</h2>
            <p className="text-xs text-purple-400 font-space tracking-widest mt-1">CONVERT ASSETS INTO PERMANENT CODE</p>
          </div>
          <button onClick={onClose} className="text-zinc-300 hover:text-white font-heading text-xl bg-zinc-900/40 px-3 py-1 rounded-md">X</button>
        </div>

        <div className="p-8 space-y-6 overflow-y-auto">
          {/* URL Method */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Option 1: From Link</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Paste Image URL here..." 
                className="flex-grow bg-black border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:border-purple-500 outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button onClick={convertFromUrl} className="bg-purple-600 px-4 py-2 rounded-lg font-bold text-xs hover:bg-purple-700">CONVERT</button>
            </div>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-zinc-800"></div>
            <span className="flex-shrink mx-4 text-zinc-700 text-[10px] font-bold">OR</span>
            <div className="flex-grow border-t border-zinc-800"></div>
          </div>

          {/* File Method */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Option 2: From Local File</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 cursor-pointer"
            />
          </div>

          {/* Output */}
          {base64 && (
            <div className="mt-8 space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-purple-500 uppercase">{status}</label>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(base64);
                    setStatus('COPIED TO CLIPBOARD!');
                  }}
                  className="text-[10px] font-bold bg-white text-black px-2 py-1 rounded hover:bg-purple-400 transition-colors"
                >
                  COPY STRING
                </button>
              </div>
              <textarea 
                readOnly
                className="w-full h-32 bg-black border border-zinc-800 rounded-lg p-3 text-[10px] font-mono text-zinc-500 break-all resize-none"
                value={base64}
              />
              <p className="text-[10px] text-zinc-600 font-space italic mt-2">
                * Paste this entire string into <b>constants/images.ts</b> in the relevant <b>base64</b> property.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageConverter;
