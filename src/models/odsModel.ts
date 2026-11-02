export type ODSCategory = 'Social' | 'Ambiental' | 'Economico' | 'Governanca';

export type ActionLevel = 'sofa' | 'casa' | 'trabalho_rua';

export interface ODSAction {
  id: string;
  level: ActionLevel;
  title: string;
  description: string;
  difficulty: 'Fácil' | 'Médio' | 'Alto Impacto';
  tip?: string;
}

export interface ODSTarget {
  code: string;
  title: string;
  description: string;
}

export interface ODSStat {
  label: string;
  value: string;
  source: string;
}

export interface ODS {
  id: number;
  code: string;
  title: string;
  shortTitle: string;
  color: string;
  secondaryColor: string;
  category: ODSCategory;
  summary: string;
  whatIs: string;
  whyItMatters: string;
  keyFact: string;
  targets: ODSTarget[];
  actions: {
    sofa: ODSAction[];
    casa: ODSAction[];
    trabalhoRua: ODSAction[];
  };
  stats: ODSStat[];
  keywords: string[];
}

export interface ODSFilterCriteria {
  category: string;
  searchQuery: string;
  actionLevel?: string;
  sortBy: 'id' | 'title' | 'category';
}
