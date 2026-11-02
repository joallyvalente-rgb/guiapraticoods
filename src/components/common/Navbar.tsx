import React, { useState } from 'react';
import { BookOpen, Download, Bot, Sparkles, CheckCircle2, Menu, X } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import { useThemeController } from '../../controllers/useThemeController';

interface NavbarProps {
  activeTab: 'guide' | 'resources' | 'ai-chat' | 'action-generator';
  setActiveTab: (tab: 'guide' | 'resources' | 'ai-chat' | 'action-generator') => void;
  themeController: ReturnType<typeof useThemeController>;
  pledgedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  themeController,
  pledgedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'guide', label: 'Guia dos 17 ODS', icon: BookOpen },
    { id: 'resources', label: 'Central de Downloads', icon: Download },
    { id: 'ai-chat', label: 'Assistente IA', icon: Bot },
    { id: 'action-generator', label: 'Desafio 7 Dias', icon: Sparkles },
  ] as const;

  const handleTabClick = (tabId: typeof activeTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleTabClick('guide')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* The 17 SDG color wheel ring representation */}
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center p-0.5 bg-conic-gradient from-red-500 via-amber-400 via-emerald-500 via-blue-500 to-red-500 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center font-extrabold text-sm tracking-tight text-slate-900 dark:text-white">
                ODS
              </div>
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Agenda 2030 <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">ONU Brasil</span>
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                17 Objetivos de Desenvolvimento Sustentável
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions: Pledge Badge + Dark Mode Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Pledged Count Badge */}
            <div
              title={`${pledgedCount} compromissos assumidos`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Compromissos:</span>
              <span className="font-bold text-emerald-800 dark:text-emerald-200">{pledgedCount}</span>
            </div>

            {/* Dark Mode Toggle */}
            <DarkModeToggle themeController={themeController} />

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
