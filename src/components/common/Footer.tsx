import React from 'react';
import { ExternalLink, Heart, Globe2 } from 'lucide-react';
import { ODS_DATA } from '../../models/odsData';

interface FooterProps {
  onSelectOds?: (id: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectOds }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      {/* 17 ODS mini color strip */}
      <div className="grid grid-cols-17 h-2 w-full">
        {ODS_DATA.map((ods) => (
          <div
            key={ods.id}
            style={{ backgroundColor: ods.color }}
            title={`${ods.code}: ${ods.title}`}
            className="h-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                ODS
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Plataforma ODS 2030 Brasil
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Guia interativo e central de conhecimento sobre os 17 Objetivos de Desenvolvimento Sustentável da Organização das Nações Unidas. Projetado para transformar metas globais em ações simples e mensuráveis para cidadãos, escolas e organizações.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Globe2 className="w-4 h-4 text-emerald-500" />
              <span>Baseado na Agenda 2030 e no Guia da ONU para Salvar o Mundo.</span>
            </div>
          </div>

          {/* Col 2: The 5 P's */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Os 5 Ps da Sustentabilidade
            </h4>
            <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-400">
              <li><strong className="text-slate-800 dark:text-slate-200">Pessoas:</strong> Erradicar a fome e a pobreza</li>
              <li><strong className="text-slate-800 dark:text-slate-200">Planeta:</strong> Proteger os recursos naturais</li>
              <li><strong className="text-slate-800 dark:text-slate-200">Prosperidade:</strong> Vidas prósperas e plenas</li>
              <li><strong className="text-slate-800 dark:text-slate-200">Paz:</strong> Sociedades justas e inclusivas</li>
              <li><strong className="text-slate-800 dark:text-slate-200">Parcerias:</strong> Solidariedade global</li>
            </ul>
          </div>

          {/* Col 3: Official Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Fontes Oficiais
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://brasil.un.org/pt-br/sdgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>ONU Brasil (ODS)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://sdgs.un.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>UN Sustainable Development</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ipea.gov.br/ods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>IPEA - Metas ODS Brasil</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://pactoglobal.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Rede Brasil do Pacto Global</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 ODS 2030 - Plataforma Educativa e Interativa. Não deixar ninguém para trás.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para um futuro sustentável</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
