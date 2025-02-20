import React from 'react';
import { Moon, Sun, Volume2, Mic, X } from 'lucide-react';
import { useThemeStore } from '../store/theme';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [fontSize, setFontSize] = React.useState('medium');
  const [volume, setVolume] = React.useState(75);
  const [micSensitivity, setMicSensitivity] = React.useState(50);
  const [autoSuggest, setAutoSuggest] = React.useState(true);
  const [showTyping, setShowTyping] = React.useState(true);

  if (!isOpen) return null;

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setFontSize('medium');
      setVolume(75);
      setMicSensitivity(50);
      setAutoSuggest(true);
      setShowTyping(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-[500px] max-h-[90vh] overflow-y-auto bg-[#25262B] rounded-lg shadow-xl">
        <div className="sticky top-0 bg-[#25262B] p-6 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Appearance Settings */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-[#2C2D33] text-gray-300 hover:text-white transition-colors"
                >
                  {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </div>
              <div className="space-y-2">
                <span className="text-gray-300">Font Size</span>
                <div className="flex gap-2">
                  {['small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-4 py-2 rounded-lg ${
                        fontSize === size
                          ? 'bg-[#4B5FE3] text-white'
                          : 'bg-[#2C2D33] text-gray-300 hover:bg-[#3A3B42]'
                      } transition-colors capitalize`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Chat Settings */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">Chat</h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between text-gray-300">
                <span>Enable Auto-Suggest</span>
                <input
                  type="checkbox"
                  checked={autoSuggest}
                  onChange={(e) => setAutoSuggest(e.target.checked)}
                  className="w-4 h-4 accent-[#4B5FE3]"
                />
              </label>
              <label className="flex items-center justify-between text-gray-300">
                <span>Show Typing Indicator</span>
                <input
                  type="checkbox"
                  checked={showTyping}
                  onChange={(e) => setShowTyping(e.target.checked)}
                  className="w-4 h-4 accent-[#4B5FE3]"
                />
              </label>
            </div>
          </section>

          {/* Audio Settings */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">Audio</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2">
                    <Volume2 size={20} />
                    Volume
                  </span>
                  <span>{volume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-[#4B5FE3]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-2">
                    <Mic size={20} />
                    Mic Sensitivity
                  </span>
                  <span>{micSensitivity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={micSensitivity}
                  onChange={(e) => setMicSensitivity(Number(e.target.value))}
                  className="w-full accent-[#4B5FE3]"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="sticky bottom-0 bg-[#25262B] p-6 border-t border-gray-700 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Reset to Defaults
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#4B5FE3] text-white hover:bg-[#3A4DB8] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};