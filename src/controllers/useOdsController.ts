import { useState, useEffect, useMemo, useCallback } from 'react';
import { ODS, ODSFilterCriteria } from '../models/odsModel';
import { ApiService } from '../services/apiService';

export function useOdsController() {
  const [allOds, setAllOds] = useState<ODS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filters state
  const [categoryFilter, setCategoryFilter] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'id' | 'title' | 'category'>('id');

  // Detail Modal selection state
  const [selectedOdsId, setSelectedOdsId] = useState<number | null>(null);

  // Pledged / completed actions state
  const [pledgedActionIds, setPledgedActionIds] = useState<string[]>(() => {
    return ApiService.getPledgedActionIds();
  });

  // Active main tab/view in app
  const [activeTab, setActiveTab] = useState<'guide' | 'resources' | 'ai-chat' | 'action-generator'>('guide');

  // Initial load
  const loadODS = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ApiService.getODSList();
      setAllOds(data);
    } catch (err: any) {
      setError(err?.message || 'Falha ao carregar a lista de ODS.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadODS();
  }, [loadODS]);

  // Filtered & sorted list
  const filteredOdsList = useMemo(() => {
    let result = [...allOds];

    if (categoryFilter !== 'Todos') {
      result = result.filter(
        (ods) => ods.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (ods) =>
          ods.title.toLowerCase().includes(q) ||
          ods.code.toLowerCase().includes(q) ||
          ods.shortTitle.toLowerCase().includes(q) ||
          ods.summary.toLowerCase().includes(q) ||
          ods.whatIs.toLowerCase().includes(q) ||
          ods.whyItMatters.toLowerCase().includes(q) ||
          ods.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [allOds, categoryFilter, searchQuery, sortBy]);

  // Selected ODS object
  const selectedOds = useMemo(() => {
    if (selectedOdsId === null) return null;
    return allOds.find((o) => o.id === selectedOdsId) || null;
  }, [allOds, selectedOdsId]);

  const openDetailModal = useCallback((id: number) => {
    setSelectedOdsId(id);
  }, []);

  const closeDetailModal = useCallback(() => {
    setSelectedOdsId(null);
  }, []);

  const togglePledge = useCallback((actionId: string) => {
    const updated = ApiService.togglePledgedAction(actionId);
    setPledgedActionIds(updated);
  }, []);

  const resetFilters = useCallback(() => {
    setCategoryFilter('Todos');
    setSearchQuery('');
    setSortBy('id');
  }, []);

  return {
    odsList: filteredOdsList,
    allOdsCount: allOds.length,
    loading,
    error,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    resetFilters,
    selectedOdsId,
    selectedOds,
    openDetailModal,
    closeDetailModal,
    pledgedActionIds,
    togglePledge,
    activeTab,
    setActiveTab,
  };
}
