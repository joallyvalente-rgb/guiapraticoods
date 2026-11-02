import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ODS } from '../../models/odsModel';
import { OdsIcon } from '../../assets/icons/OdsIcons';
import { CATEGORY_COLORS, hexToRgba } from '../../styles/odsColors';

interface OdsCardProps {
  ods: ODS;
  onSelect: (id: number) => void;
  pledgedActionsCount: number;
}

export const OdsCard: React.FC<OdsCardProps> = ({ ods, onSelect, pledgedActionsCount }) => {
  const categoryStyle = CATEGORY_COLORS[ods.category];

  return (
    <div
      onClick={() => onSelect(ods.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(ods.id);
        }
      }}
      style={{
        borderTopColor: ods.color,
      }}
      className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-5 border-t-4 border-x border-b border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <div>
        {/* Top bar: ID number badge & Category badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-white shadow-sm"
            style={{ backgroundColor: ods.color }}
          >
            {ods.id < 10 ? `0${ods.id}` : ods.id}
          </div>

          <div className="flex items-center gap-2">
            {pledgedActionsCount > 0 && (
              <span
                title={`${pledgedActionsCount} ações assumidas`}
                className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
              >
                <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                {pledgedActionsCount}
              </span>
            )}
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}
            >
              {ods.category}
            </span>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-3.5 mb-3">
          <div
            className="p-2.5 rounded-xl shrink-0 transition-transform group-hover:scale-110"
            style={{
              backgroundColor: hexToRgba(ods.color, 0.12),
              color: ods.color,
            }}
          >
            <OdsIcon id={ods.id} className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {ods.title}
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {ods.code}
            </span>
          </div>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
          {ods.summary}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold">
        <span
          className="transition-colors font-bold"
          style={{ color: ods.color }}
        >
          {ods.targets.length} Metas principais
        </span>
        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 dark:group-hover:text-white transition-all">
          <span>Ver guia</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
