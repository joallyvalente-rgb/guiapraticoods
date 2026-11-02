export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: Date;
  suggestedODS?: number[];
}

export interface UserPersonaProfile {
  role: 'estudante' | 'morador' | 'empresa' | 'professor' | 'comunidade';
  interests: string[];
  intensity: 'iniciante' | 'moderado' | 'avancado';
  specificGoal?: string;
}

export interface ActionPlanItem {
  day: number;
  odsId: number;
  title: string;
  action: string;
  impactLevel: 'Alto' | 'Médio' | 'Fácil';
  difficultyTime: string;
}

export interface ActionPlanResponse {
  profileTitle: string;
  summary: string;
  weeklyPlan: ActionPlanItem[];
  motto: string;
}

export class GeminiService {
  /**
   * Sends a conversational query about ODS to the backend server
   */
  static async sendChatMessage(prompt: string, history: ChatMessage[] = []): Promise<ChatMessage> {
    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          history: history.slice(-6).map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            text: msg.text,
          })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return {
          id: `msg-${Date.now()}`,
          sender: 'assistant',
          text: data.text || 'Aqui está a resposta para sua pergunta sobre os ODS.',
          timestamp: new Date(),
          suggestedODS: data.suggestedODS || [],
        };
      }
    } catch {
      // Fallback below
    }

    // Graceful offline/fallback response generator
    return this.generateFallbackChatResponse(prompt);
  }

  /**
   * Generates a tailored 7-day sustainable habit action plan based on user persona
   */
  static async generateActionPlan(profile: UserPersonaProfile): Promise<ActionPlanResponse> {
    try {
      const response = await fetch('/api/gemini/action-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.plan) {
          return data.plan;
        }
      }
    } catch {
      // Fallback below
    }

    return this.generateFallbackActionPlan(profile);
  }

  private static generateFallbackChatResponse(prompt: string): ChatMessage {
    const p = prompt.toLowerCase();
    let text = '';
    let suggestedODS: number[] = [];

    if (p.includes('oceano') || p.includes('mar') || p.includes('peixe') || p.includes('praia')) {
      text = `O **ODS 14 (Vida na Água)** é o objetivo dedicado a conservar e usar de forma sustentável os oceanos, mares e recursos marinhos. Ele aborda diretamente a poluição plástica marinha, a sobrepesca predatória e a proteção de corais e manguezais. Uma ação imediata é recusar canudos e plásticos descartáveis e nunca deixar detritos em praias!`;
      suggestedODS = [14, 12];
    } else if (p.includes('energia') || p.includes('luz') || p.includes('solar') || p.includes('eletricidade')) {
      text = `O **ODS 7 (Energia Limpa e Acessível)** foca na transição para fontes renováveis (solar, eólica, biomassa) e na melhoria da eficiência energética. Em casa, desligar aparelhos em stand-by, trocar lâmpadas por LED e regular o ar-condicionado em 23°C poupa energia imediatamente!`;
      suggestedODS = [7, 13];
    } else if (p.includes('empresa') || p.includes('negócio') || p.includes('esg') || p.includes('trabalho')) {
      text = `Para empresas e organizações, o **ODS 8 (Trabalho Decente)** e o **ODS 12 (Consumo e Produção Responsáveis)** são prioritários. Recomenda-se auditar equidade salarial, banir descartáveis no escritório, contratar cooperativas de reciclagem e incentivar fornecedores locais sustentáveis.`;
      suggestedODS = [8, 9, 12];
    } else if (p.includes('escola') || p.includes('estudante') || p.includes('educação') || p.includes('professor')) {
      text = `O **ODS 4 (Educação de Qualidade)** promove oportunidades de aprendizagem ao longo da vida e cidadania global. Alunos e professores podem implantar hortas pedagógicas (ODS 2), projetos de coleta seletiva na escola (ODS 12) e debates sobre direitos humanos (ODS 16).`;
      suggestedODS = [4, 10, 16];
    } else if (p.includes('fome') || p.includes('comida') || p.includes('desperdício') || p.includes('alimentação')) {
      text = `O **ODS 2 (Fome Zero e Agricultura Sustentável)** busca garantir comida segura e nutritiva para todos. O Guia dos Preguiçosos da ONU ensina a aproveitar talos e cascas, planejar cardápios semanais para evitar perdas e comprar de feirantes da agricultura familiar.`;
      suggestedODS = [2, 12];
    } else if (p.includes('agenda 2030') || p.includes('o que é') || p.includes('história') || p.includes('onu')) {
      text = `A **Agenda 2030** é um plano de ação global adotado em 2015 pelos 193 países-membros da ONU. Ela reúne 17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas integradas e indivisíveis, cobrindo as dimensões social, ambiental e econômica com a promessa de "Não Deixar Ninguém Para Trás".`;
      suggestedODS = [1, 13, 17];
    } else {
      text = `Excelente reflexão sobre sustentabilidade! Os 17 ODS da ONU funcionam como uma engrenagem integrada: cuidar do clima (ODS 13) protege as comunidades mais pobres (ODS 1), e o consumo consciente (ODS 12) preserva tanto as florestas (ODS 15) quanto as águas (ODS 6 e 14). Em qual aspecto do seu cotidiano você gostaria de começar hoje?`;
      suggestedODS = [11, 12, 13];
    }

    return {
      id: `fallback-${Date.now()}`,
      sender: 'assistant',
      text,
      timestamp: new Date(),
      suggestedODS,
    };
  }

  private static generateFallbackActionPlan(profile: UserPersonaProfile): ActionPlanResponse {
    const roleTitles: Record<string, string> = {
      estudante: 'Estudante Eco-Líder & Inovador Jovem',
      morador: 'Guardião do Lar Sustentável & Família Consciente',
      empresa: 'Liderança ESG & Gestão Corporativa Responsável',
      professor: 'Educador Transformador & Cidadania Ativa',
      comunidade: 'Mobilizador Comunitário & Bairro Resiliente',
    };

    return {
      profileTitle: roleTitles[profile.role] || 'Embaixador da Sustentabilidade 2030',
      summary: `Plano customizado de 7 dias com foco em hábitos práticos de alto impacto para seu perfil de ${profile.role}, acelerando a conquista dos ODS.`,
      motto: 'Pequenas ações consistentes geram transformações globais mensuráveis.',
      weeklyPlan: [
        {
          day: 1,
          odsId: 12,
          title: 'Auditoria de Desperdício e Plásticos',
          action: 'Faça um inventário dos plásticos de uso único consumidos na semana e adote uma garrafa e ecobag permanentes.',
          impactLevel: 'Fácil',
          difficultyTime: '15 minutos',
        },
        {
          day: 2,
          odsId: 7,
          title: 'Eficiência Elétrica e Stand-by Zero',
          action: 'Desconecte da tomada réguas e carregadores sem uso e configure modo de economia em telas e computadores.',
          impactLevel: 'Fácil',
          difficultyTime: '10 minutos',
        },
        {
          day: 3,
          odsId: 6,
          title: 'Conservação Hídrica Consciente',
          action: 'Monitore o tempo de banho (máximo 5 minutos) e cheque torneiras ou vazamentos na sua rotina.',
          impactLevel: 'Fácil',
          difficultyTime: '5 minutos',
        },
        {
          day: 4,
          odsId: 2,
          title: 'Alimentação Consciente & Sem Desperdício',
          action: 'Experimente preparar uma receita reaproveitando talos ou cascas, e priorize um prato 100% à base de plantas.',
          impactLevel: 'Médio',
          difficultyTime: '30 minutos',
        },
        {
          day: 5,
          odsId: 11,
          title: 'Mobilidade Limpa & Espaço Urbano',
          action: 'Substitua ao menos um trajeto de carro individual por caminhada, bicicleta ou transporte coletivo.',
          impactLevel: 'Médio',
          difficultyTime: '40 minutos',
        },
        {
          day: 6,
          odsId: 10,
          title: 'Inclusão & Consumo Local Justo',
          action: 'Compre de um pequeno produtor, artesão do bairro ou negócio gerido por mulheres/populações minorizadas.',
          impactLevel: 'Médio',
          difficultyTime: '20 minutos',
        },
        {
          day: 7,
          odsId: 17,
          title: 'Multiplicação e Parceria Comunitária',
          action: 'Compartilhe suas 3 principais aprendizagens com amigos, vizinhos ou colegas e convide alguém a adotar o compromisso.',
          impactLevel: 'Alto',
          difficultyTime: '15 minutos',
        },
      ],
    };
  }
}
