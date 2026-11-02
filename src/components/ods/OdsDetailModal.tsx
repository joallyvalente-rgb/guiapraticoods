import React, { useState } from 'react';
import {
  Info,
  Target,
  Sofa,
  Home,
  Briefcase,
  CheckCircle2,
  Circle,
  BarChart3,
  Sparkles,
  ChevronRight,
  Share2,
  Check,
} from 'lucide-react';
import { ODS, ODSAction } from '../../models/odsModel';
import { Modal } from '../common/Modal';
import { OdsIcon } from '../../assets/icons/OdsIcons';
import { hexToRgba, CATEGORY_COLORS } from '../../styles/odsColors';

interface OdsDetailModalProps {
  ods: ODS | null;
  isOpen: boolean;
  onClose: () => void;
  pledgedActionIds: string[];
  onTogglePledge: (actionId: string) => void;
}

export const OdsDetailModal: React.FC<OdsDetailModalProps> = ({
  ods,
  isOpen,
  onClose,
  pledgedActionIds,
  onTogglePledge,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'targets' | 'actions'>('overview');
  const [actionLevelTab, setActionLevelTab] = useState<'sofa' | 'casa' | 'trabalhoRua'>('sofa');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!ods) return null;

  const categoryStyle = CATEGORY_COLORS[ods.category];

  const handleCopyShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}#ods-${ods.id}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentActions: ODSAction[] =
    actionLevelTab === 'sofa'
      ? ods.actions.sofa
      : actionLevelTab === 'casa'
      ? ods.actions.casa
      : ods.actions.trabalhoRua;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-4xl"
      headerBgColor={ods.color}
      title={
        <div className="flex items-center gap-3 text-white">
          <div className="p-1.5 bg-white/20 rounded-xl backdrop-blur-sm">
            <OdsIcon id={ods.id} className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold bg-black/20 px-2 py-0.5 rounded-full">
                {ods.code}
              </span>
              <span className="text-xs font-medium text-white/90">{categoryStyle.label}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black leading-tight">{ods.title}</h2>
          </div>
        </div>
      }
    >
      {/* Dynamic Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'overview'
              ? 'text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          style={activeTab === 'overview' ? { backgroundColor: ods.color } : undefined}
        >
          <Info className="w-4 h-4" />
          <span>Visão Geral & Fatos</span>
        </button>

        <button
          onClick={() => setActiveTab('targets')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'targets'
              ? 'text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          style={activeTab === 'targets' ? { backgroundColor: ods.color } : undefined}
        >
          <Target className="w-4 h-4" />
          <span>Metas Oficiais ({ods.targets.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('actions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'actions'
              ? 'text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          style={activeTab === 'actions' ? { backgroundColor: ods.color } : undefined}
        >
          <Sparkles className="w-4 h-4" />
          <span>Como Você Pode Contribuir (3 Níveis)</span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={handleCopyShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Copiar link deste ODS"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Key Fact Callout banner with official ODS color tint */}
          <div
            className="p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5"
            style={{
              backgroundColor: hexToRgba(ods.color, 0.08),
              borderColor: hexToRgba(ods.color, 0.25),
            }}
          >
            <div
              className="p-2 rounded-xl text-white shrink-0 mt-0.5"
              style={{ backgroundColor: ods.color }}
            >
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-1"
                style={{ color: ods.color }}
              >
                Dado de Impacto Global
              </span>
              <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                {ods.keyFact}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* O Que É */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ods.color }} />
                O que é?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {ods.whatIs}
              </p>
            </div>

            {/* Para Que Serve */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ods.color }} />
                Para que serve?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {ods.whyItMatters}
              </p>
            </div>
          </div>

          {/* Official Statistics Cards */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">
              Estatísticas e Indicadores Oficiais
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ods.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">
                      {stat.label}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      Fonte: {stat.source}
                    </span>
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-black shrink-0 pl-3"
                    style={{ color: ods.color }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords / Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Palavras-chave:</span>
            {ods.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Official Targets */}
      {activeTab === 'targets' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Abaixo estão as metas oficiais resumidas pactuadas pelos países-membros da ONU para serem alcançadas até 2030:
          </p>

          <div className="space-y-3">
            {ods.targets.map((target) => (
              <div
                key={target.code}
                className="bg-slate-50 dark:bg-slate-800/70 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-black text-white shrink-0 mt-0.5"
                    style={{ backgroundColor: ods.color }}
                  >
                    Meta {target.code}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {target.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {target.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Action Guide in 3 Levels */}
      {activeTab === 'actions' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <span>Inspirado no <strong>Guia da ONU para Salvar o Mundo</strong>: escolha seu nível e assuma um compromisso prático!</span>
          </div>

          {/* 3 Level Switcher */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActionLevelTab('sofa')}
              className={`flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                actionLevelTab === 'sofa'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sofa className="w-4 h-4 text-amber-500" />
              <span>1. No Sofá</span>
            </button>

            <button
              onClick={() => setActionLevelTab('casa')}
              className={`flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                actionLevelTab === 'casa'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Home className="w-4 h-4 text-emerald-500" />
              <span>2. Em Casa</span>
            </button>

            <button
              onClick={() => setActionLevelTab('trabalhoRua')}
              className={`flex items-center justify-center gap-2 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                actionLevelTab === 'trabalhoRua'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>3. Trabalho & Rua</span>
            </button>
          </div>

          {/* Action Cards List */}
          <div className="space-y-4">
            {currentActions.map((action) => {
              const isPledged = pledgedActionIds.includes(action.id);
              return (
                <div
                  key={action.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isPledged
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/80'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: ods.color }}
                      />
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {action.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {action.difficulty}
                      </span>

                      {/* Interactive Pledge Toggle */}
                      <button
                        onClick={() => onTogglePledge(action.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isPledged
                            ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        {isPledged ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Compromisso Assumido!</span>
                          </>
                        ) : (
                          <>
                            <Circle className="w-3.5 h-3.5 text-slate-400" />
                            <span>Assumir Compromisso</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    {action.description}
                  </p>

                  {action.tip && (
                    <div className="text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{action.tip}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Modal>
  );
};
