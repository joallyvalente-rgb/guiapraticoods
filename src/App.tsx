import React from 'react';
import {
  Globe2,
  Calendar,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  Target,
  Users,
} from 'lucide-react';
import { useThemeController } from './controllers/useThemeController';
import { useOdsController } from './controllers/useOdsController';
import { useGeminiChatController } from './controllers/useGeminiChatController';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { OdsFilter } from './components/ods/OdsFilter';
import { OdsGrid } from './components/ods/OdsGrid';
import { OdsDetailModal } from './components/ods/OdsDetailModal';
import { DownloadCenter } from './components/resources/DownloadCenter';
import { SustainabilityChatbot } from './components/ai/SustainabilityChatbot';
import { ActionGenerator } from './components/ai/ActionGenerator';

export default function App() {
  const themeController = useThemeController();
  const odsController = useOdsController();
  const chatController = useGeminiChatController();

  const {
    odsList,
    loading,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    resetFilters,
    selectedOds,
    openDetailModal,
    closeDetailModal,
    pledgedActionIds,
    togglePledge,
    activeTab,
    setActiveTab,
  } = odsController;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        themeController={themeController}
        pledgedCount={pledgedActionIds.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Tab 1: Guia Interativo dos 17 ODS */}
        {activeTab === 'guide' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Plataforma Oficial Interativa • Agenda 2030</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  Os 17 Objetivos de Desenvolvimento Sustentável
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Explore o mapa completo dos 17 ODS da ONU, conheça suas metas oficiais e descubra como você pode contribuir na prática em 3 níveis: <span className="font-semibold text-slate-800 dark:text-slate-200">no sofá, em casa ou no trabalho</span>.
                </p>

                {/* Quick Interactive Statistics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block">
                      17
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Objetivos Globais
                    </span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 block">
                      169
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Metas Pactuadas
                    </span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-amber-500 block">
                      193
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Países Signatários
                    </span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                    <span className="text-xl sm:text-2xl font-black text-rose-500 block">
                      {pledgedActionIds.length}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Compromissos Seus
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <OdsFilter
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
              resetFilters={resetFilters}
              totalFiltered={odsList.length}
            />

            {/* 17 Cards Responsive Grid */}
            <OdsGrid
              odsList={odsList}
              onSelectOds={openDetailModal}
              pledgedActionIds={pledgedActionIds}
              resetFilters={resetFilters}
              loading={loading}
            />
          </div>
        )}

        {/* Tab 2: Central de Downloads e Recursos */}
        {activeTab === 'resources' && (
          <DownloadCenter onSelectOds={openDetailModal} />
        )}

        {/* Tab 3: Assistente IA de Sustentabilidade */}
        {activeTab === 'ai-chat' && (
          <SustainabilityChatbot
            chatController={chatController}
            onSelectOds={openDetailModal}
          />
        )}

        {/* Tab 4: Desafio 7 Dias / Gerador de Ações */}
        {activeTab === 'action-generator' && (
          <ActionGenerator
            chatController={chatController}
            onSelectOds={openDetailModal}
            pledgedActionIds={pledgedActionIds}
            onTogglePledge={togglePledge}
          />
        )}
      </main>

      {/* Selected ODS Detail Modal */}
      <OdsDetailModal
        ods={selectedOds}
        isOpen={selectedOds !== null}
        onClose={closeDetailModal}
        pledgedActionIds={pledgedActionIds}
        onTogglePledge={togglePledge}
      />

      {/* Global Footer */}
      <Footer onSelectOds={openDetailModal} />
    </div>
  );
}