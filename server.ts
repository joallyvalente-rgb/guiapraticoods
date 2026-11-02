import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// Initialize Google GenAI client if GEMINI_API_KEY is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

/**
 * Healthcheck route
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!ai,
  });
});

/**
 * Helper to produce high quality domain fallback if Gemini API is unavailable or quota is exceeded
 */
function getDomainFallbackAnswer(prompt: string): { text: string; suggestedODS: number[] } {
  const p = prompt.toLowerCase();
  if (p.includes('oceano') || p.includes('mar') || p.includes('peixe') || p.includes('praia') || p.includes('plástico')) {
    return {
      text: `O **ODS 14 (Vida na Água)** é o objetivo dedicado a conservar e usar de forma sustentável os oceanos, mares e recursos marinhos. Ele aborda diretamente a poluição plástica marinha, a sobrepesca predatória e a proteção de corais e manguezais. Uma ação imediata recomendada pela ONU é recusar sacolas plásticas, evitar cosméticos com microesferas e nunca descartar resíduos em praias ou rios!`,
      suggestedODS: [14, 12],
    };
  }
  if (p.includes('energia') || p.includes('luz') || p.includes('solar') || p.includes('eletricidade')) {
    return {
      text: `O **ODS 7 (Energia Limpa e Acessível)** foca na transição para fontes renováveis (solar, eólica, biomassa) e na melhoria contínua da eficiência energética. Medidas domésticas simples, como trocar lâmpadas por LED e eliminar aparelhos em modo stand-by na tomada, reduzem drasticamente as emissões de carbono!`,
      suggestedODS: [7, 13],
    };
  }
  if (p.includes('empresa') || p.includes('esg') || p.includes('trabalho') || p.includes('negócio')) {
    return {
      text: `Para organizações e empresas, o **ODS 8 (Trabalho Decente e Crescimento Econômico)** e o **ODS 12 (Consumo e Produção Responsáveis)** formam os pilares essenciais. Ações recomendadas: auditoria de paridade salarial de gênero, banimento de descartáveis no refeitório e contratação de cooperativas locais de catadores.`,
      suggestedODS: [8, 12, 9],
    };
  }
  if (p.includes('água') || p.includes('saneamento') || p.includes('esgoto')) {
    return {
      text: `O **ODS 6 (Água Potável e Saneamento)** visa garantir água segura e saneamento básico universal. Você pode contribuir reduzindo o tempo de banho para menos de 5 minutos, consertando vazamentos imediatamente e jamais despejando óleo de cozinha na pia (1 litro contamina até 25.000 litros de água).`,
      suggestedODS: [6, 14],
    };
  }
  return {
    text: `Os 17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU constituem uma visão integrada: ações em prol do clima (ODS 13) protegem a agricultura e combatem a fome (ODS 2), enquanto a igualdade e o trabalho digno (ODS 8 e 10) sustentam a erradicação da pobreza (ODS 1). Cada pequeno hábito praticado diariamente fortalece a Agenda 2030.`,
    suggestedODS: [12, 13, 17],
  };
}

function getDomainActionPlan(profile: any) {
  const roleTitles: Record<string, string> = {
    estudante: 'Estudante Eco-Líder & Inovador Jovem',
    morador: 'Guardião do Lar Sustentável & Família Consciente',
    empresa: 'Liderança ESG & Gestão Corporativa Responsável',
    professor: 'Educador Transformador & Cidadania Ativa',
    comunidade: 'Mobilizador Comunitário & Bairro Resiliente',
  };

  return {
    profileTitle: roleTitles[profile?.role] || 'Embaixador da Sustentabilidade 2030',
    summary: `Plano customizado de 7 dias com foco em hábitos práticos de alto impacto para o perfil de ${profile?.role || 'cidadão'}, acelerando a conquista dos ODS.`,
    motto: 'Pequenas ações consistentes geram transformações globais mensuráveis.',
    weeklyPlan: [
      {
        day: 1,
        odsId: 12,
        title: 'Auditoria de Desperdício e Plásticos',
        action: 'Faça um inventário dos plásticos descartáveis utilizados na semana e substitua por ecobags e garrafas reutilizáveis.',
        impactLevel: 'Fácil',
        difficultyTime: '15 minutos',
      },
      {
        day: 2,
        odsId: 7,
        title: 'Eficiência Elétrica e Stand-by Zero',
        action: 'Desconecte da tomada aparelhos em modo de espera e ajuste o brilho de telas e monitores.',
        impactLevel: 'Fácil',
        difficultyTime: '10 minutos',
      },
      {
        day: 3,
        odsId: 6,
        title: 'Conservação Hídrica Consciente',
        action: 'Cronometre seu banho em até 5 minutos e feche a torneira ao escovar os dentes ou ensaboar a louça.',
        impactLevel: 'Fácil',
        difficultyTime: '5 minutos',
      },
      {
        day: 4,
        odsId: 2,
        title: 'Alimentação Consciente & Sem Desperdício',
        action: 'Aproveite cascas e talos em uma nova receita nutritiva e priorize um almoço à base de vegetais.',
        impactLevel: 'Médio',
        difficultyTime: '30 minutos',
      },
      {
        day: 5,
        odsId: 11,
        title: 'Mobilidade Limpa & Espaço Urbano',
        action: 'Troque o uso de transporte individual por caminhada, bicicleta ou transporte público em ao menos um percurso.',
        impactLevel: 'Médio',
        difficultyTime: '40 minutos',
      },
      {
        day: 6,
        odsId: 10,
        title: 'Inclusão & Consumo Local Justo',
        action: 'Adquira produtos de pequenos produtores rurais, feiras agroecológicas ou empreendedores locais.',
        impactLevel: 'Médio',
        difficultyTime: '20 minutos',
      },
      {
        day: 7,
        odsId: 17,
        title: 'Multiplicação e Parceria Comunitária',
        action: 'Compartilhe suas conquistas desta semana com amigos ou vizinhos e convide-os para assumir um compromisso com os ODS.',
        impactLevel: 'Alto',
        difficultyTime: '15 minutos',
      },
    ],
  };
}

/**
 * POST /api/gemini/chat - Sustainability AI assistant
 */
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  const { prompt, history } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt é obrigatório.' });
  }

  // If AI client is configured with key, attempt live Gemini call
  if (ai) {
    try {
      const conversationContents = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          conversationContents.push({
            role: item.role === 'model' ? 'model' : 'user',
            parts: [{ text: item.text }],
          });
        }
      }
      conversationContents.push({
        role: 'user',
        parts: [{ text: prompt }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: conversationContents,
        config: {
          systemInstruction: `Você é o "EcoGuia 2030", o assistente inteligente oficial dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
Sua missão é responder dúvidas com empatia, rigor técnico baseado nas metas oficiais da ONU e do Guia dos Preguiçosos para Salvar o Mundo.
Instruções:
1. Responda sempre em português claro, acessível e inspirador.
2. Sempre que oportuno, mencione explicitamente quais ODS estão relacionados à dúvida do usuário (ex: "ODS 12 - Consumo e Produção Responsáveis", "ODS 6 - Água Potável e Saneamento").
3. Forneça dicas práticas e acionáveis divididas em níveis de facilidade (ex: coisas simples de fazer agora, hábitos em casa ou iniciativas no trabalho).
4. No final da resposta, inclua uma tag no formato "[ODS_SUGERIDOS: 12, 13]" indicando os números dos ODS relevantes para que a interface possa destacá-los.`,
        },
      });

      const text = response.text || '';
      const odsMatch = text.match(/\[ODS_SUGERIDOS:\s*([0-9,\s]+)\]/i);
      let suggestedODS: number[] = [];
      let cleanText = text;

      if (odsMatch) {
        suggestedODS = odsMatch[1]
          .split(',')
          .map((n) => parseInt(n.trim(), 10))
          .filter((n) => !isNaN(n) && n >= 1 && n <= 17);
        cleanText = text.replace(/\[ODS_SUGERIDOS:\s*([0-9,\s]+)\]/i, '').trim();
      }

      return res.json({
        text: cleanText,
        suggestedODS,
      });
    } catch (err) {
      console.warn('Gemini API call failed, using high-quality domain fallback:', err);
    }
  }

  // Graceful fallback
  const fallback = getDomainFallbackAnswer(prompt);
  return res.json(fallback);
});

/**
 * POST /api/gemini/action-plan - Generates tailored 7-day sustainable action habit challenge
 */
app.post('/api/gemini/action-plan', async (req: Request, res: Response) => {
  const { profile } = req.body;

  if (ai) {
    try {
      const promptText = `Crie um desafio e plano de ação sustentável de 7 dias sob medida para este perfil:
Papel: ${profile?.role || 'cidadão'}
Áreas de interesse: ${(profile?.interests || []).join(', ') || 'Geral (Clima, Energia, Resíduos)'}
Intensidade: ${profile?.intensity || 'moderado'}
Meta específica do usuário: ${profile?.specificGoal || 'Adotar hábitos mais conscientes no dia a dia'}

Gere um JSON válido estritamente com esta estrutura:
{
  "profileTitle": "Título criativo e motivador do perfil (ex: Campeão do Lar Consciente)",
  "summary": "Resumo em 2 frases do foco do plano",
  "motto": "Lema inspirador curto",
  "weeklyPlan": [
    {
      "day": 1,
      "odsId": 12,
      "title": "Nome da Ação do Dia 1",
      "action": "Descrição prática e detalhada do que fazer",
      "impactLevel": "Fácil",
      "difficultyTime": "15 minutos"
    }
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptText,
        config: {
          responseMimeType: 'application/json',
        },
      });

      const rawJson = (response.text || '{}').trim();
      const plan = JSON.parse(rawJson);
      return res.json({ plan });
    } catch (err) {
      console.warn('Gemini API action plan call failed, using fallback plan:', err);
    }
  }

  // Graceful fallback
  const plan = getDomainActionPlan(profile);
  return res.json({ plan });
});

/**
 * Configure Vite or Static files depending on environment
 */
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
