import React from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { ODSCategory } from '../../models/odsModel';

interface OdsFilterProps {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'id' | 'title' | 'category';
  setSortBy: (sortBy: 'id' | 'title' | 'category') => void;
  resetFilters: () => void;
  totalFiltered: number;
}

const CATEGORIES: { label: string; value: string; desc: string }[] = [
  { label: 'Todos os 17 ODS', value: 'Todos', desc: 'Visão completa' },
  { label: 'Social', value: 'Social', desc: 'Dignidade e Pessoas' },
  { label: 'Ambiental', value: 'Ambiental', desc: 'Planeta e Clima' },
  { label: 'Econômico', value: 'Economico', desc: 'Inovação e Trabalho' },
  { label: 'Governança', value: 'Governanca', desc: 'Paz e Instituições' },
];

export const OdsFilter: React.FC<OdsFilterProps> = ({
  categoryFilter,
  setCategoryFilter,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  resetFilters,
  totalFiltered,
}) => {
  const isFiltered = categoryFilter !== 'Todos' || searchQuery.trim().length > 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 transition-colors">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por ODS, palavra-chave (ex: água, energia, fome, reciclagem)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort & Reset Actions */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-slate-800 dark:text-slate-200 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="id" className="dark:bg-slate-800">Número oficial (1 a 17)</option>
              <option value="title" className="dark:bg-slate-800">Alfabética</option>
              <option value="category" className="dark:bg-slate-800">Categoria</option>
            </select>
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
              title="Restaurar todos os filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = categoryFilter.toLowerCase() === cat.value.toLowerCase();
          return (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}

        <div className="ml-auto text-xs font-medium text-slate-500 dark:text-slate-400 pl-2 whitespace-nowrap">
          Exibindo <strong>{totalFiltered}</strong> de 17 ODS
        </div>
      </div>
    </div>
  );
};
