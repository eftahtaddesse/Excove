import { create } from 'zustand';

type ThemeStore = {
  isDarkMode: boolean;
  notebookName: string;
  setNotebookName: (name: string) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: true,
  notebookName: 'Untitled notebook',
  setNotebookName: (name: string) => set({ notebookName: name }),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));