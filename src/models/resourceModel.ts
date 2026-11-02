export type ResourceCategory = 
  | 'Guia Oficial' 
  | 'Relatório' 
  | 'Cartilha Educativa' 
  | 'Kit de Comunicação' 
  | 'Agenda Global';

export interface DocumentPreviewContent {
  summary: string;
  highlights: string[];
  tableOfContents: string[];
  keyQuote?: string;
}

export interface ODSResource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  author: string;
  year: number;
  pages: number;
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  relatedODS: number[];
  downloadUrl: string;
  previewContent: DocumentPreviewContent;
  featured?: boolean;
}
