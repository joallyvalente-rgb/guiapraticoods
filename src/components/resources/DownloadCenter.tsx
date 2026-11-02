import React, { useState } from 'react';
import {
  Download,
  FileText,
  Search,
  BookOpen,
  Calendar,
  Eye,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { ODSResource } from '../../models/resourceModel';
import { RESOURCES_DATA } from '../../models/resourceData';
import { DocumentViewer } from './DocumentViewer';

interface DownloadCenterProps {
  onSelectOds?: (id: number) => void;
}

const RESOURCE_CATEGORIES = [
  'Todos',
  'Guia Oficial',
  'Agenda Global',
  'Relatório',
  'Cartilha Educativa',
  'Kit de Comunicação',
];

export const DownloadCenter: React.FC<DownloadCenterProps> = ({ onSelectOds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreviewDoc, setActivePreviewDoc] = useState<ODSResource | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredResources = RESOURCES_DATA.filter((res) => {
    const matchesCategory =
      selectedCategory === 'Todos' || res.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery =
      searchQuery.trim() === '' ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Função para abrir a janela de impressão nativa (onde o usuário clica em "Salvar como PDF")
  const handleDownload = (doc: ODSResource) => {
    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Por favor, permita pop-ups no navegador para gerar o PDF.');
        return;
      }

      const htmlContent = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <title>${doc.title}</title>
          <style>
            body { font-family: Arial, sans-serif; color: #1e293b; padding: 30px; line-height: 1.6; max-width: 800px; margin: 0 auto; }
            .header { background: #059669; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            h1 { font-size: 20px; margin: 0 0 8px 0; }
            .meta { font-size: 12px; color: #e2e8f0; }
            .section-title { font-size: 15px; font-weight: bold; color: #0f172a; border-bottom: 2px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; }
            p { font-size: 13px; color: #334155; margin-bottom: 12px; }
            ul { padding-left: 20px; font-size: 13px; color: #334155; }
            li { margin-bottom: 6px; }
            .footer { margin-top: 40px; font-size: 10px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${doc.title}</h1>
            <div class="meta">
              <strong>Autor:</strong> ${doc.author} (${doc.year}) &nbsp;|&nbsp; 
              <strong>Categoria:</strong> ${doc.category} &nbsp;|&nbsp; 
              <strong>Páginas:</strong> ${doc.pages}
            </div>
          </div>

          <div class="section-title">Resumo Executivo</div>
          <p>${doc.previewContent.summary}</p>

          <div class="section-title">Principais Destaques</div>
          <ul>
            ${doc.previewContent.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>

          <div class="section-title">Sumário do Documento</div>
          <ul>
            ${doc.previewContent.tableOfContents.map((item) => `<li>${item}</li>`).join('')}
          </ul>

          <div class="footer">
            Documento gerado pela Plataforma ODS 2030 Brasil • Fonte Oficial: Organização das Nações Unidas (ONU)
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
        </html>
      `;

      printWindow.document.write(htmlContent);
      printWindow.document.close();

      setToastMessage(`Preparando PDF de: "${doc.title}"`);
      setTimeout(() => setToastMessage(null), 3500);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      setToastMessage('Erro ao gerar o arquivo PDF.');
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Toast feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-sm font-semibold animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-5 h-5 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Featured Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-6 sm:p-10 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biblioteca Oficial da Agenda 2030</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Central de Recursos, Guias e Documentos da ONU
          </h2>
          <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
            Acesse materiais educativos, relatórios de monitoramento das 169 metas e o célebre <em>Guia dos Preguiçosos para Salvar o Mundo</em> com visualização interativa e download em PDF.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título, autor ou palavra-chave..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {RESOURCE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Resources Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {doc.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {doc.fileSize} PDF
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                {doc.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                {doc.description}
              </p>

              {/* Author & Pages */}
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="font-medium truncate">{doc.author}</span>
                <span>•</span>
                <span>{doc.pages} pág.</span>
                <span>•</span>
                <span>{doc.year}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActivePreviewDoc(doc)}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visualizar</span>
              </button>

              <button
                onClick={() => handleDownload(doc)}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Document Reader Modal */}
      <DocumentViewer
        resource={activePreviewDoc}
        isOpen={activePreviewDoc !== null}
        onClose={() => setActivePreviewDoc(null)}
        onDownload={handleDownload}
      />
    </div>
  );
};