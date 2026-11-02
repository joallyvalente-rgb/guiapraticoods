import React, { useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Trash2,
  HelpCircle,
  ExternalLink,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { useGeminiChatController } from '../../controllers/useGeminiChatController';
import { ODS_DATA } from '../../models/odsData';
import { OdsIcon } from '../../assets/icons/OdsIcons';

interface SustainabilityChatbotProps {
  chatController: ReturnType<typeof useGeminiChatController>;
  onSelectOds: (id: number) => void;
}

export const SustainabilityChatbot: React.FC<SustainabilityChatbotProps> = ({
  chatController,
  onSelectOds,
}) => {
  const {
    messages,
    inputText,
    setInputText,
    isSending,
    sendMessage,
    clearChat,
    presetQuestions,
  } = chatController;

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const copyMessageText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-[700px] max-h-[82vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in duration-200">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
          </div>
          <div>
            <h3 className="font-bold text-base flex items-center gap-2">
              EcoGuia 2030 <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">Gemini IA</span>
            </h3>
            <p className="text-xs text-slate-400">
              Especialista oficial em metas, hábitos e indicadores da Agenda 2030
            </p>
          </div>
        </div>

        <button
          onClick={clearChat}
          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          title="Limpar histórico de conversa"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold ${
                  isUser
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Bubble */}
              <div
                className={`group relative max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/80 dark:border-slate-700/80'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Suggested ODS Badges */}
                {msg.suggestedODS && msg.suggestedODS.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      ODS Relacionados:
                    </span>
                    {msg.suggestedODS.map((id) => {
                      const ods = ODS_DATA.find((o) => o.id === id);
                      if (!ods) return null;
                      return (
                        <button
                          key={id}
                          onClick={() => onSelectOds(id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-white transition-transform hover:scale-105 cursor-pointer shadow-sm"
                          style={{ backgroundColor: ods.color }}
                        >
                          <OdsIcon id={ods.id} className="w-3.5 h-3.5" />
                          <span>{ods.code}</span>
                          <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-80" />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Copy button */}
                {!isUser && (
                  <button
                    onClick={() => copyMessageText(msg.id, msg.text)}
                    className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Copiar texto"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {isSending && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2 border border-slate-200/80 dark:border-slate-700">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span>Consultando base de conhecimento da Agenda 2030...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Pills */}
      <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <HelpCircle className="w-3 h-3 text-emerald-500" />
          Sugestões:
        </span>
        {presetQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(q)}
            disabled={isSending}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Pergunte sobre qualquer um dos 17 ODS, metas ou hábitos sustentáveis..."
          disabled={isSending}
          className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
        />
        <button
          type="submit"
          disabled={isSending || !inputText.trim()}
          className="p-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl font-bold shadow-md transition-all cursor-pointer"
          title="Enviar pergunta"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
