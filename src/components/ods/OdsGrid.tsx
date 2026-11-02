import React from 'react';
import { ODS } from '../../models/odsModel';
import { OdsCard } from './OdsCard';
import { SearchX, RotateCcw } from 'lucide-react';

interface OdsGridProps {
  odsList: ODS[];
  onSelectOds: (id: number) => void;
  pledgedActionIds: string[];
  resetFilters: () => void;
  loading: boolean;
}

export const OdsGrid: React.FC<OdsGridProps> = ({
  odsList,
  onSelectOds,
  pledgedActionIds,
  resetFilters,
  loading,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl h-64 p-5"
          />
        ))}
      </div>
    );
  }

  if (odsList.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800 max-w-md mx-auto my-8">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
          <SearchX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Nenhum ODS encontrado
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Não encontramos nenhum objetivo correspondente aos critérios de busca ou filtros selecionados.
        </p>
        <button
          onClick={resetFilters}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Restaurar todos os ODS</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {odsList.map((ods) => {
        // Count actions pledged for this specific ODS
        const pledgedInThisOds = pledgedActionIds.filter((id) =>
          id.startsWith(`${ods.id}-`)
        ).length;

        return (
          <OdsCard
            key={ods.id}
            ods={ods}
            onSelect={onSelectOds}
            pledgedActionsCount={pledgedInThisOds}
          />
        );
      })}
    </div>
  );
};
