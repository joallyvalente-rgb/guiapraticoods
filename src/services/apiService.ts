import { ODS, ODSFilterCriteria } from '../models/odsModel';
import { ODS_DATA } from '../models/odsData';
import { ODSResource } from '../models/resourceModel';
import { RESOURCES_DATA } from '../models/resourceData';

/**
 * Service to simulate REST API endpoints and data persistence
 */
export class ApiService {
  /**
   * GET /api/ods - Retrieves all ODS with optional filtering
   */
  static async getODSList(filter?: Partial<ODSFilterCriteria>): Promise<ODS[]> {
    // Simulate brief network latency for authentic REST behavior
    await new Promise((resolve) => setTimeout(resolve, 50));

    let results = [...ODS_DATA];

    if (filter?.category && filter.category !== 'Todos') {
      results = results.filter((ods) => ods.category.toLowerCase() === filter.category?.toLowerCase());
    }

    if (filter?.searchQuery) {
      const q = filter.searchQuery.toLowerCase().trim();
      results = results.filter(
        (ods) =>
          ods.title.toLowerCase().includes(q) ||
          ods.code.toLowerCase().includes(q) ||
          ods.summary.toLowerCase().includes(q) ||
          ods.whatIs.toLowerCase().includes(q) ||
          ods.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    if (filter?.sortBy === 'title') {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter?.sortBy === 'category') {
      results.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      results.sort((a, b) => a.id - b.id);
    }

    return results;
  }

  /**
   * GET /api/ods/:id - Retrieves a single ODS by ID
   */
  static async getODSById(id: number): Promise<ODS | null> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    const ods = ODS_DATA.find((item) => item.id === id);
    return ods || null;
  }

  /**
   * GET /api/resources - Retrieves official UN documents & guides
   */
  static async getResources(category?: string, query?: string): Promise<ODSResource[]> {
    await new Promise((resolve) => setTimeout(resolve, 60));
    let resources = [...RESOURCES_DATA];

    if (category && category !== 'Todos') {
      resources = resources.filter((res) => res.category.toLowerCase() === category.toLowerCase());
    }

    if (query) {
      const q = query.toLowerCase().trim();
      resources = resources.filter(
        (res) =>
          res.title.toLowerCase().includes(q) ||
          res.description.toLowerCase().includes(q) ||
          res.author.toLowerCase().includes(q)
      );
    }

    return resources;
  }

  /**
   * Local storage helpers for user pledges and completed sustainable actions
   */
  static getPledgedActionIds(): string[] {
    try {
      const stored = localStorage.getItem('ods_pledged_actions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  static togglePledgedAction(actionId: string): string[] {
    try {
      const current = this.getPledgedActionIds();
      const updated = current.includes(actionId)
        ? current.filter((id) => id !== actionId)
        : [...current, actionId];
      localStorage.setItem('ods_pledged_actions', JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  }

  static isActionPledged(actionId: string): boolean {
    return this.getPledgedActionIds().includes(actionId);
  }
}
