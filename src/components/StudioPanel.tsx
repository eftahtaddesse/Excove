import React from 'react';
import { ChevronLeft, ChevronRight, FileText, HelpCircle } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { usePanelsStore } from '../store/panels';

export const StudioPanel: React.FC = () => {
  const { isStudioPanelOpen, toggleStudioPanel } = usePanelsStore();

  return (
    <div className={`${isStudioPanelOpen ? 'w-[30%]' : 'w-12'} transition-all duration-300 flex`}>
      <button
        onClick={toggleStudioPanel}
        className="p-2 h-12 self-start mt-4 rounded-l-lg order-1 bg-[#25262B] text-white shadow-md hover:shadow-lg transition-all duration-200"
      >
        {isStudioPanelOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <div className={`${isStudioPanelOpen ? 'flex-1' : 'hidden'} p-4 rounded-lg bg-[#25262B] flex flex-col h-full`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-white">Audio Overview</h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>

        <div className="bg-[#2C2D33] rounded-lg p-4 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
              <FileText className="text-gray-400" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium">Deep Dive conversation</h3>
              <p className="text-sm text-gray-400">Two hosts (English only)</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors">
              Customize
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-[#4B5FE3] text-white hover:bg-[#3A4DB8] transition-colors">
              Generate
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-white">Notes</h2>
            <button className="text-gray-400 hover:text-white transition-colors">⋮</button>
          </div>

          <button className="w-full py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors mb-4">
            + Add note
          </button>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button className="py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span className="text-[#4B5FE3]">📚</span> Study guide
            </button>
            <button className="py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span className="text-[#4B5FE3]">📄</span> Briefing doc
            </button>
            <button className="py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span className="text-[#4B5FE3]">❓</span> FAQ
            </button>
            <button className="py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span className="text-[#4B5FE3]">📅</span> Timeline
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 text-gray-400">
            <FileText className="w-12 h-12 mb-4 opacity-50" />
            <p className="mb-2">Saved notes will appear here</p>
            <p className="text-sm">
              Save a chat message to create a new note, or click Add note above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};