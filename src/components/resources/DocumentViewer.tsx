import React, { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  BookOpen,
  User,
  HardDrive,
  CheckCircle,
  ExternalLink,
  Printer,
} from 'lucide-react';
import { ODSResource } from '../../models/resourceModel';
import { Modal } from '../common/Modal';

interface DocumentViewerProps {
  resource: ODSResource | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (res: ODSResource) => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  resource,
  isOpen,
  onClose,
  onDownload,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!resource) return null;

  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      onDownload(resource);
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    }, 600);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-3xl"
      title={
        <div className="flex items-center gap-2.5">
          <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span className="truncate">{resource.title}</span>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Document Header Metadata */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-500" />
              {resource.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-500" />
              Ano: {resource.year}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              {resource.pages} páginas
            </span>
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-emerald-500" />
              {resource.fileSize} ({resource.fileType})
            </span>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Key Quote banner if present */}
        {resource.previewContent.keyQuote && (
          <blockquote className="p-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-sm italic">
            {resource.previewContent.keyQuote}
          </blockquote>
        )}

        {/* Executive Summary */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">
            Resumo Executivo
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            {resource.previewContent.summary}
          </p>
        </div>

        {/* Key Highlights */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">
            Destaques e Aprendizados
          </h4>
          <ul className="space-y-2">
            {resource.previewContent.highlights.map((hl, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Table of Contents */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">
            Sumário do Documento
          </h4>
          <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
            {resource.previewContent.tableOfContents.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Resumo</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadClick}
              disabled={downloading}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer ${
                downloadSuccess
                  ? 'bg-emerald-600'
                  : 'bg-emerald-600 hover:bg-emerald-700 active:scale-95'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Download Iniciado!</span>
                </>
              ) : downloading ? (
                <span>Preparando {resource.fileType}...</span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Baixar Arquivo ({resource.fileSize})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
