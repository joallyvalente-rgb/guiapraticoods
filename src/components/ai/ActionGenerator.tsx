import React from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Flame,
  CheckCircle2,
  Circle,
  RotateCcw,
  UserCheck,
  Target,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { useGeminiChatController } from '../../controllers/useGeminiChatController';
import { ODS_DATA } from '../../models/odsData';
import { OdsIcon } from '../../assets/icons/OdsIcons';

interface ActionGeneratorProps {
  chatController: ReturnType<typeof useGeminiChatController>;
  onSelectOds: (id: number) => void;
  pledgedActionIds: string[];
  onTogglePledge: (actionId: string) => void;
}

const ROLES = [
  { id: 'morador', label: 'Morador & Família', desc: 'Em casa e condomínio' },
  { id: 'estudante', label: 'Estudante', desc: 'Escola e universidade' },
  { id: 'empresa', label: 'Pequena Empresa', desc: 'Comércio e escritórios' },
  { id: 'professor', label: 'Educador & Professor', desc: 'Sala de aula e projetos' },
  { id: 'comunidade', label: 'Líder Comunitário', desc: 'Bairro e coletivos' },
] as const;

const INTEREST_AREAS = [
  'Clima & Descarbonização',
  'Energia Solar & Eficiência',
  'Água & Saneamento',
  'Plástico Zero & Resíduos',
  'Alimentação Saudável & Horta',
  'Inclusão & Igualdade',
  'Consumo Consciente',
];

export const ActionGenerator: React.FC<ActionGeneratorProps> = ({
  chatController,
  onSelectOds,
  pledgedActionIds,
  onTogglePledge,
}) => {
  const {
    actionProfile,
    setActionProfile,
    actionPlan,
    isGeneratingPlan,
    generatePlan,
  } = chatController;

  const toggleInterest = (interest: string) => {
    const current = actionProfile.interests || [];
    const updated = current.includes(interest)
      ? current.filter((i) => i !== interest)
      : [...current, interest];
    setActionProfile({ ...actionProfile, interests: updated });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 sm:p-10 text-white shadow-lg">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inteligência Artificial Personalizada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Gerador de Hábitos Sustentáveis: Desafio 7 Dias
          </h2>
          <p className="text-sm sm:text-base text-amber-50 leading-relaxed">
            Selecione seu perfil e interesses para que o modelo de IA crie uma jornada progressiva de uma semana com metas práticas, inspiradas no Guia da ONU.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-500" />
            <span>Configurar seu Perfil</span>
          </h3>

          {/* Role selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              1. Qual é o seu papel principal?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ROLES.map((r) => {
                const isSelected = actionProfile.role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActionProfile({ ...actionProfile, role: r.id as any })}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{r.label}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{r.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interests tags */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              2. Áreas de maior interesse:
            </label>
            <div className="flex flex-wrap gap-2">
              {INTEREST_AREAS.map((interest) => {
                const isSelected = (actionProfile.interests || []).includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Intensity */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              3. Intensidade do desafio:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['iniciante', 'moderado', 'avancado'] as const).map((lvl) => {
                const isSelected = actionProfile.intensity === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setActionProfile({ ...actionProfile, intensity: lvl })}
                    className={`py-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional specific goal */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              4. Desejo específico (opcional):
            </label>
            <input
              type="text"
              value={actionProfile.specificGoal || ''}
              onChange={(e) => setActionProfile({ ...actionProfile, specificGoal: e.target.value })}
              placeholder="Ex: Quero diminuir o lixo gerado em 50%..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            onClick={generatePlan}
            disabled={isGeneratingPlan}
            className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPlan ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Personalizando desafio com Gemini...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Gerar Desafio de 7 Dias</span>
              </>
            )}
          </button>
        </div>

        {/* Plan Output Column */}
        <div className="lg:col-span-7 space-y-4">
          {!actionPlan && !isGeneratingPlan && (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Pronto para iniciar sua jornada?
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                Personalize seu perfil ao lado e clique em "Gerar Desafio de 7 Dias" para receber hábitos práticos diários.
              </p>
              <button
                onClick={generatePlan}
                className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Gerar com perfil padrão
              </button>
            </div>
          )}

          {actionPlan && (
            <div className="space-y-4">
              {/* Plan Header Card */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    {actionPlan.profileTitle}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">Jornada 7 Dias</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {actionPlan.summary}
                </p>
                <div className="text-xs italic text-emerald-700 dark:text-emerald-400 pt-1">
                  "{actionPlan.motto}"
                </div>
              </div>

              {/* Day-by-day Timeline */}
              <div className="space-y-3">
                {actionPlan.weeklyPlan.map((step) => {
                  const ods = ODS_DATA.find((o) => o.id === step.odsId) || ODS_DATA[11];
                  const pledgeKey = `plan-day-${step.day}-${ods.id}`;
                  const isPledged = pledgedActionIds.includes(pledgeKey);

                  return (
                    <div
                      key={step.day}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        isPledged
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-black text-xs shrink-0">
                            D{step.day}
                          </span>
                          <div>
                            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                              {step.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {step.difficultyTime}
                              </span>
                              <span>•</span>
                              <span className="font-medium">{step.impactLevel}</span>
                            </div>
                          </div>
                        </div>

                        {/* ODS Badge button */}
                        <button
                          onClick={() => onSelectOds(ods.id)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-white shrink-0 shadow-sm hover:scale-105 transition-transform cursor-pointer"
                          style={{ backgroundColor: ods.color }}
                          title={`Ver detalhes do ${ods.code}`}
                        >
                          <OdsIcon id={ods.id} className="w-3.5 h-3.5" />
                          <span>{ods.code}</span>
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 pl-10">
                        {step.action}
                      </p>

                      <div className="flex justify-end pl-10">
                        <button
                          onClick={() => onTogglePledge(pledgeKey)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isPledged
                              ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {isPledged ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Meta Cumprida!</span>
                            </>
                          ) : (
                            <>
                              <Circle className="w-3.5 h-3.5 text-slate-400" />
                              <span>Marcar como Cumprida</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
