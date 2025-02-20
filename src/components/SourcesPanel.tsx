import React from 'react';
import { Upload, Search, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { usePanelsStore } from '../store/panels';

export const SourcesPanel: React.FC = () => {
  const { isSourcesPanelOpen, toggleSourcesPanel } = usePanelsStore();

  return (
    <div className={`${isSourcesPanelOpen ? 'w-1/5' : 'w-12'} transition-all duration-300 flex`}>
      <div className={`${isSourcesPanelOpen ? 'flex-1' : 'hidden'} p-4 rounded-lg bg-[#25262B] flex flex-col h-full`}>
        <h2 className="text-lg font-medium text-white mb-4 flex items-center justify-between">
          Sources
          <button className="text-gray-400 hover:text-white transition-colors">
            <Upload size={20} />
          </button>
        </h2>

        <button className="w-full py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors mb-4">
          + Add source
        </button>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 text-gray-400">
          <FileText className="w-12 h-12 mb-4 opacity-50" />
          <p className="mb-2">Saved sources will appear here</p>
          <p className="text-sm">
            Click Add source above to add PDFs, websites, text, videos, or audio files. Or import a file directly from Google Drive.
          </p>
        </div>
      </div>
      
      <button
        onClick={toggleSourcesPanel}
        className="p-2 h-12 self-start mt-4 rounded-r-lg bg-[#25262B] text-white shadow-md hover:shadow-lg transition-all duration-200"
      >
        {isSourcesPanelOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
};