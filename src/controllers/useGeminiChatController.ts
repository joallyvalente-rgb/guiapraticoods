import { useState, useCallback } from 'react';
import {
  ChatMessage,
  GeminiService,
  UserPersonaProfile,
  ActionPlanResponse,
} from '../services/geminiService';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: `Olá! Sou o **EcoGuia 2030**, seu assistente especializado nos 17 Objetivos de Desenvolvimento Sustentável da ONU. 
    
Você pode me perguntar sobre metas específicas, boas práticas para sua casa ou trabalho, ou como pequenas ações do cotidiano contribuem para a Agenda 2030. Como posso te apoiar hoje?`,
    timestamp: new Date(),
    suggestedODS: [12, 13, 17],
  },
];

export const PRESET_QUESTIONS = [
  'Qual ODS trata da poluição por plásticos nos oceanos?',
  'Dicas práticas do "Guia dos Preguiçosos" para economizar energia',
  'Como pequenas e médias empresas podem adotar práticas ESG?',
  'Quais metas tratam de erradicação da fome e agricultura sustentável?',
  'Como combater o desperdício de água no dia a dia?',
];

export function useGeminiChatController() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Action Generator state
  const [actionProfile, setActionProfile] = useState<UserPersonaProfile>({
    role: 'morador',
    interests: ['Clima & Energia', 'Consumo & Resíduos'],
    intensity: 'moderado',
    specificGoal: '',
  });
  const [actionPlan, setActionPlan] = useState<ActionPlanResponse | null>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState<boolean>(false);

  const sendMessage = useCallback(
    async (textToSend?: string) => {
      const content = (textToSend || inputText).trim();
      if (!content || isSending) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputText('');
      setIsSending(true);
      setError(null);

      try {
        const botReply = await GeminiService.sendChatMessage(content, messages);
        setMessages((prev) => [...prev, botReply]);
      } catch (err: any) {
        setError('Ocorreu uma instabilidade na resposta. Tente novamente.');
      } finally {
        setIsSending(false);
      }
    },
    [inputText, isSending, messages]
  );

  const clearChat = useCallback(() => {
    setMessages(INITIAL_MESSAGES);
    setError(null);
  }, []);

  const generatePlan = useCallback(async () => {
    setIsGeneratingPlan(true);
    setError(null);
    try {
      const plan = await GeminiService.generateActionPlan(actionProfile);
      setActionPlan(plan);
    } catch (err: any) {
      setError('Falha ao gerar o plano de ação personalizado.');
    } finally {
      setIsGeneratingPlan(false);
    }
  }, [actionProfile]);

  return {
    messages,
    inputText,
    setInputText,
    isSending,
    error,
    sendMessage,
    clearChat,
    actionProfile,
    setActionProfile,
    actionPlan,
    isGeneratingPlan,
    generatePlan,
    presetQuestions: PRESET_QUESTIONS,
  };
}
