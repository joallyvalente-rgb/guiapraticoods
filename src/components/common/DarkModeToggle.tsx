import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeController } from '../../controllers/useThemeController';

interface DarkModeToggleProps {
  themeController: ReturnType<typeof useThemeController>;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ themeController }) => {
  const { isDark, toggleTheme } = themeController;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={isDark ? 'Mudar para tema Claro' : 'Mudar para tema Escuro'}
      className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transform transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 transform transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
};
