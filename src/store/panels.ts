import { create } from 'zustand';

type PanelsStore = {
  isSourcesPanelOpen: boolean;
  isStudioPanelOpen: boolean;
  toggleSourcesPanel: () => void;
  toggleStudioPanel: () => void;
};

export const usePanelsStore = create<PanelsStore>((set) => ({
  isSourcesPanelOpen: true,
  isStudioPanelOpen: true,
  toggleSourcesPanel: () => set((state) => ({ isSourcesPanelOpen: !state.isSourcesPanelOpen })),
  toggleStudioPanel: () => set((state) => ({ isStudioPanelOpen: !state.isStudioPanelOpen })),
}));