import React from 'react';
import { Share2, Settings } from 'lucide-react';
import { SourcesPanel } from './components/SourcesPanel';
import { ChatPanel } from './components/ChatPanel';
import { StudioPanel } from './components/StudioPanel';
import { SettingsModal } from './components/SettingsModal';
import { useThemeStore } from './store/theme';

function App() {
  const { notebookName } = useThemeStore();
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#1A1B1E] p-4">
      <header className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#4B5FE3] flex items-center justify-center">
            <span className="text-white text-sm">AI</span>
          </div>
          <input
            type="text"
            value={notebookName}
            onChange={(e) => useThemeStore.getState().setNotebookName(e.target.value)}
            className="bg-transparent text-white text-lg font-medium focus:outline-none focus:border-b border-[#4B5FE3]"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Share2 size={20} />
          </button>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Settings size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
        </div>
      </header>
      
      <div className="flex gap-4 h-[calc(100vh-5rem)]">
        <SourcesPanel />
        <ChatPanel />
        <StudioPanel />
      </div>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;