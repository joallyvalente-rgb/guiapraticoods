import { ODSResource } from './resourceModel';

export const RESOURCES_DATA: ODSResource[] = [
  {
    id: 'res-1',
    title: 'Guia dos Preguiçosos para Salvar o Mundo',
    description: 'O famoso guia bem-humorado da ONU dividido em 4 níveis práticos: do sofá, de casa, do trabalho e da rua, provando que qualquer pessoa pode transformar o planeta.',
    category: 'Guia Oficial',
    author: 'Organização das Nações Unidas (ONU)',
    year: 2024,
    pages: 32,
    fileSize: '2.4 MB',
    fileType: 'PDF',
    relatedODS: [1, 2, 7, 12, 13, 14, 15],
    downloadUrl: '#download-guia-preguicosos',
    featured: true,
    previewContent: {
      summary: 'A mudança começa com você. Cada ser humano na Terra — até mesmo o mais indiferente e preguiçoso — faz parte da solução. Felizmente, existem coisas superfáceis que todos nós podemos incorporar em nossas rotinas diárias e que farão uma diferença tremenda se todos fizermos juntos.',
      highlights: [
        'Nível 1: Coisas que você pode fazer do sofá (desligar aparelhos, pagar contas online, pesquisar antes de comprar)',
        'Nível 2: Coisas que você pode fazer de casa (secar roupas no varal, banhos mais curtos, congelar sobras)',
        'Nível 3: Coisas que você pode fazer fora de casa (comprar de produtores locais, andar de bicicleta, usar sacolas reutilizáveis)',
        'Nível 4: Coisas que você pode fazer no trabalho (mentorar estagiários, banir copos plásticos, apagar luzes após reuniões)'
      ],
      tableOfContents: [
        '1. Introdução: Por que você importa',
        '2. Nível 1: Estrela do Sofá',
        '3. Nível 2: Campeão Doméstico',
        '4. Nível 3: Cidadão Exemplar do Bairro',
        '5. Nível 4: Líder no Local de Trabalho',
        '6. Checklist de Ação Rápida dos 17 ODS'
      ],
      keyQuote: '"Se você acha que é muito pequeno para fazer a diferença, tente dormir com um mosquito no quarto."'
    }
  },
  {
    id: 'res-2',
    title: 'Transformando Nosso Mundo: A Agenda 2030 para o Desenvolvimento Sustentável',
    description: 'O documento oficial adotado por aclamação pelos 193 Estados-Membros da ONU com a íntegra das 169 metas globais e princípios orientadores.',
    category: 'Agenda Global',
    author: 'ONU Brasil & PNUD',
    year: 2023,
    pages: 48,
    fileSize: '3.8 MB',
    fileType: 'PDF',
    relatedODS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    downloadUrl: '#download-agenda-2030',
    featured: true,
    previewContent: {
      summary: 'Esta Agenda é um plano de ação para as pessoas, para o planeta e para a prosperidade. Ela também busca fortalecer a paz universal com mais liberdade. Reconhecemos que a erradicação da pobreza em todas as suas formas e dimensões, incluindo a pobreza extrema, é o maior desafio global e um requisito indispensável para o desenvolvimento sustentável.',
      highlights: [
        'Declaração dos Chefes de Estado e Governo',
        'Os 5 Ps da Sustentabilidade: Pessoas, Planeta, Prosperidade, Paz e Parcerias',
        'Quadro de acompanhamento e indicadores globais',
        'Princípio central: Não Deixar Ninguém Para Trás (Leave No One Behind)'
      ],
      tableOfContents: [
        'Preâmbulo',
        'Declaração Oficial',
        'Objetivos de Desenvolvimento Sustentável e Metas',
        'Meios de Implementação e Parceria Global',
        'Acompanhamento e Avaliação'
      ],
      keyQuote: '"Estamos decididos a libertar a raça humana da tirania da pobreza e da privação e a curar e proteger o nosso planeta."'
    }
  },
  {
    id: 'res-3',
    title: 'Relatório Luz da Sociedade Civil da Agenda 2030 no Brasil',
    description: 'Avaliação independente e detalhada do cumprimento das 169 metas dos ODS no Brasil, elaborada por coalizão de ONGs e especialistas.',
    category: 'Relatório',
    author: 'GT Agenda 2030 (Grupo de Trabalho da Sociedade Civil)',
    year: 2024,
    pages: 112,
    fileSize: '5.6 MB',
    fileType: 'PDF',
    relatedODS: [1, 3, 5, 8, 10, 13, 16],
    downloadUrl: '#download-relatorio-luz',
    featured: false,
    previewContent: {
      summary: 'O Relatório Luz analisa o estado de implementação de cada uma das 169 metas da Agenda 2030 no Brasil a partir de fontes oficiais e dados consolidados, categorizando as metas entre em progresso satisfatório, estagnadas, ameaçadas ou em retrocesso.',
      highlights: [
        'Diagnóstico aprofundado dos impactos socioeconômicos e ambientais recentes',
        'Recomendações técnicas de políticas públicas para o Congresso e Executivo',
        'Análise interseccional de raça, gênero, povos originários e vulnerabilidade territorial',
        'Indicadores de transição energética justa e mitigação climática'
      ],
      tableOfContents: [
        'Metodologia e Painel de Cores',
        'Eixo Social: ODS 1 a 5',
        'Eixo Biosfera: ODS 6, 13, 14 e 15',
        'Eixo Econômico: ODS 7, 8, 9, 10, 11 e 12',
        'Eixo Governança: ODS 16 e 17',
        'Recomendações Emergenciais para o Brasil'
      ]
    }
  },
  {
    id: 'res-4',
    title: 'Cartilha Educativa: ODS nas Escolas e Comunidades',
    description: 'Guia pedagógico e dinâmico para professores do Ensino Fundamental e Médio, educadores sociais e lideranças comunitárias com planos de aula prontos.',
    category: 'Cartilha Educativa',
    author: 'UNESCO & Ministério da Educação',
    year: 2024,
    pages: 64,
    fileSize: '4.1 MB',
    fileType: 'PDF',
    relatedODS: [4, 6, 11, 12, 14, 15],
    downloadUrl: '#download-cartilha-escolas',
    featured: false,
    previewContent: {
      summary: 'Esta cartilha foi desenhada para transformar salas de aula em espaços vivos de cidadania e investigação socioambiental. Contém atividades práticas, jogos de tabuleiro recortáveis e projetos de intervenção local alinhados à Base Nacional Comum Curricular (BNCC).',
      highlights: [
        '17 oficinas práticas interdisciplinares',
        'Orientações para criação de grêmios sustentáveis escolares',
        'Guia para construção de hortas pedagógicas e composteiras',
        'Modelos de feiras de ciências com foco nos ODS'
      ],
      tableOfContents: [
        '1. O que são os ODS na linguagem das crianças e jovens',
        '2. Alinhamento com as competências gerais da BNCC',
        '3. Atividades por faixa etária (Infantil, Fundamental I, II e Médio)',
        '4. Avaliação participativa e projetos comunitários'
      ]
    }
  },
  {
    id: 'res-5',
    title: 'Manual de Aplicação dos ODS para Pequenas e Médias Empresas (PMEs)',
    description: 'Metodologia prática passo a passo para pequenas e médias empresas integrarem metas ESG e dos ODS em seus modelos de negócio e cadeias de suprimento.',
    category: 'Guia Oficial',
    author: 'Rede Brasil do Pacto Global & SEBRAE',
    year: 2024,
    pages: 56,
    fileSize: '3.2 MB',
    fileType: 'PDF',
    relatedODS: [8, 9, 12, 17],
    downloadUrl: '#download-manual-pmes',
    featured: false,
    previewContent: {
      summary: 'A sustentabilidade não é exclusividade de corporações multinacionais com grandes orçamentos. Micro e pequenas empresas que alinham suas operações aos ODS conseguem reduzir custos de eletricidade e água, atrair talentos qualificados e se credenciar para fornecer a grandes compradores comprometidos com critérios ESG.',
      highlights: [
        'Matriz de materialidade rápida para pequenas empresas',
        'Passo a passo para auditoria de desperdício em 48 horas',
        'Casos reais de sucesso no varejo, serviços e manufatura',
        'Acesso a linhas de crédito verde e financiamentos sustentáveis'
      ],
      tableOfContents: [
        '1. Oportunidades de Negócio na Agenda 2030',
        '2. Mapeando os ODS prioritários para o seu setor',
        '3. Plano de Ação em 5 Passos sem burocracia',
        '4. Como comunicar suas conquistas sem greenwashing'
      ]
    }
  },
  {
    id: 'res-6',
    title: 'Kit de Comunicação e Identidade Visual ODS 2030',
    description: 'Arquivos vetoriais oficiais, paletas de cores CMYK/RGB/HEX, guia de uso da marca ODS e diretrizes para eventos e campanhas institucionais.',
    category: 'Kit de Comunicação',
    author: 'Departamento de Comunicações Globais da ONU',
    year: 2024,
    pages: 28,
    fileSize: '12.8 MB',
    fileType: 'ZIP',
    relatedODS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    downloadUrl: '#download-kit-comunicacao',
    featured: false,
    previewContent: {
      summary: 'Diretrizes oficiais de aplicação da marca dos Objetivos de Desenvolvimento Sustentável. Este manual destina-se a parceiros, governos, escolas, ONGs e empresas que desejam promover a conscientização sobre a Agenda 2030 mantendo a fidelidade visual dos 17 ícones e da roda de cores.',
      highlights: [
        'Regras de uso não comercial dos ícones e logotipos',
        'Tabela oficial de códigos de cores RGB, HEX e Pantone',
        'Área de respiro, versões em preto e branco e em fundos contrastantes',
        'Templates prontos para apresentações e mídias sociais'
      ],
      tableOfContents: [
        '1. O Logotipo dos ODS e a Roda de Cores',
        '2. O Sistema dos 17 Ícones Individuais',
        '3. Paleta Oficial de Cores',
        '4. Usos Permitidos e Proibições de Modificação'
      ]
    }
  }
];
