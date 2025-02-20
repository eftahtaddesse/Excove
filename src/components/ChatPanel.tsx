import React from 'react';
import { Send, Upload } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { usePanelsStore } from '../store/panels';

export const ChatPanel: React.FC = () => {
  const { isSourcesPanelOpen, isStudioPanelOpen } = usePanelsStore();

  const chatWidth = !isSourcesPanelOpen && !isStudioPanelOpen
    ? 'w-full'
    : !isSourcesPanelOpen || !isStudioPanelOpen
    ? 'w-[70%]'
    : 'w-1/2';

  return (
    <div className={`${chatWidth} p-4 rounded-lg bg-[#25262B] flex flex-col h-full transition-all duration-300`}>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <Upload className="w-12 h-12 text-[#4B5FE3] mb-4" />
        <h2 className="text-2xl font-medium text-white mb-2">Add a source to get started</h2>
        <button className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors">
          Upload a source
        </button>
      </div>

      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Upload a source to get started"
            disabled
            className="w-full px-4 py-3 pr-12 rounded-lg bg-[#1A1B1E] text-gray-400 focus:outline-none"
          />
          <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#4B5FE3] opacity-50 cursor-not-allowed">
            <Send size={18} className="text-white" />
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          NotebookLM can be inaccurate; please double check its responses.
        </p>
      </div>
    </div>
  );
};