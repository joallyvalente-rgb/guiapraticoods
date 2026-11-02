import { ODS } from './odsModel';

export const ODS_DATA: ODS[] = [
  {
    id: 1,
    code: 'ODS 1',
    title: 'Erradicação da Pobreza',
    shortTitle: 'Pobreza Zero',
    color: '#E5243B',
    secondaryColor: '#B0182B',
    category: 'Social',
    summary: 'Acabar com a pobreza em todas as suas formas, em todos os lugares até 2030.',
    whatIs: 'O ODS 1 visa erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas que vivem com menos de US$ 2,15 por dia, além de reduzir pelo menos pela metade a proporção de pessoas que vivem na pobreza em todas as suas dimensões.',
    whyItMatters: 'A pobreza não é apenas a falta de renda e recursos para garantir meios de subsistência sustentáveis. É uma manifestação que inclui fome, desnutrição, acesso limitado à educação e a outros serviços básicos, discriminação e exclusão social, bem como a falta de participação na tomada de decisões.',
    keyFact: 'Mais de 700 milhões de pessoas no mundo ainda vivem em extrema pobreza, a maioria no Sul da Ásia e na África Subsaariana.',
    targets: [
      { code: '1.1', title: 'Erradicar a pobreza extrema', description: 'Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares.' },
      { code: '1.2', title: 'Reduzir a pobreza em todas as dimensões', description: 'Reduzir pelo menos à metade a proporção de homens, mulheres e crianças de todas as idades que vivem na pobreza.' },
      { code: '1.3', title: 'Sistemas de proteção social', description: 'Implementar medidas e sistemas de proteção social apropriados em nível nacional para todos.' },
      { code: '1.4', title: 'Acesso igualitário a recursos econômicos', description: 'Garantir que todos tenham direitos iguais aos recursos econômicos, serviços básicos, propriedade e tecnologia.' },
      { code: '1.5', title: 'Resiliência a desastres', description: 'Construir a resiliência dos pobres e em situação de vulnerabilidade e reduzir sua exposição a eventos climáticos extremos e choques econômicos.' }
    ],
    actions: {
      sofa: [
        { id: '1-s1', level: 'sofa', title: 'Apoiar campanhas digitais de arrecadação', description: 'Compartilhe em suas redes sociais campanhas confiáveis de bancos de alimentos e ONGs de combate à vulnerabilidade.', difficulty: 'Fácil', tip: 'Verifique a transparência da instituição antes de doar.' },
        { id: '1-s2', level: 'sofa', title: 'Consumir de negócios de impacto social', description: 'Priorize marcas que reinvestem parte dos lucros em comunidades vulneráveis ou contratam populações marginalizadas.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '1-c1', level: 'casa', title: 'Doação sistemática de roupas e itens úteis', description: 'Faça triagens sazonais em seu guarda-roupa e doe itens em perfeito estado para abrigos e cooperativas locais.', difficulty: 'Fácil' },
        { id: '1-c2', level: 'casa', title: 'Evitar o desperdício alimentar', description: 'Otimize compras domésticas para canalizar o orçamento economizado para fundos sociais comunitários.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '1-t1', level: 'trabalho_rua', title: 'Mentoria para jovens de baixa renda', description: 'Dedique 1 hora por semana para orientar jovens em vulnerabilidade na elaboração de currículo e preparação profissional.', difficulty: 'Alto Impacto', tip: 'Inscreva-se em programas de mentoria voluntária como o CIEE ou Gerando Falcões.' },
        { id: '1-t2', level: 'trabalho_rua', title: 'Compras com fornecedores locais vulneráveis', description: 'Defenda em sua empresa a contratação de fornecedores periféricos e cooperativas comunitárias.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'População global em pobreza extrema', value: '8.4%', source: 'Relatório ONU 2024' },
      { label: 'Crianças desproporcionalmente afetadas', value: '1 em cada 5', source: 'UNICEF' }
    ],
    keywords: ['renda', 'desigualdade', 'proteção social', 'vulnerabilidade', 'auxílio']
  },
  {
    id: 2,
    code: 'ODS 2',
    title: 'Fome Zero e Agricultura Sustentável',
    shortTitle: 'Fome Zero',
    color: '#DDA63A',
    secondaryColor: '#A87D25',
    category: 'Social',
    summary: 'Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.',
    whatIs: 'O ODS 2 propõe acabar com a fome e todas as formas de desnutrição até 2030, dobrando a produtividade agrícola e a renda dos pequenos produtores de alimentos, garantindo sistemas sustentáveis de produção.',
    whyItMatters: 'Um terço de todos os alimentos produzidos globalmente é perdido ou desperdiçado, enquanto cerca de 735 milhões de pessoas enfrentam a fome. Garantir sistemas alimentares justos é crucial para a dignidade humana e o equilíbrio ecológico.',
    keyFact: 'A agricultura familiar produz cerca de 70% dos alimentos consumidos diariamente no Brasil.',
    targets: [
      { code: '2.1', title: 'Acesso universal a alimentos seguros e nutritivos', description: 'Garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e suficientes durante todo o ano.' },
      { code: '2.2', title: 'Acabar com todas as formas de desnutrição', description: 'Eliminar a desnutrição crônica infantil e atender às necessidades nutricionais de gestantes e idosos.' },
      { code: '2.3', title: 'Dobrar a produtividade de pequenos agricultores', description: 'Aumentar a renda e produtividade de pequenos produtores familiares, incluindo mulheres e povos indígenas.' },
      { code: '2.4', title: 'Sistemas sustentáveis de produção de alimentos', description: 'Implementar práticas agrícolas resilientes que aumentem a produtividade e ajudem a manter a saúde do solo.' }
    ],
    actions: {
      sofa: [
        { id: '2-s1', level: 'sofa', title: 'Aprender sobre aproveitamento integral dos alimentos', description: 'Descubra receitas com talos, cascas e sementes para reduzir perdas na cozinha.', difficulty: 'Fácil' },
        { id: '2-s2', level: 'sofa', title: 'Apoiar o Dia Nacional de Combate ao Desperdício', description: 'Dissemine dados sobre desperdício de alimentos em fóruns e redes sociais.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '2-c1', level: 'casa', title: 'Comprar de feiras de produtores locais', description: 'Substitua ultraprocessados por alimentos frescos comprados diretamente de agricultores familiares e feiras agroecológicas.', difficulty: 'Fácil' },
        { id: '2-c2', level: 'casa', title: 'Compostagem doméstica de resíduos orgânicos', description: 'Transforme restos de comida e cascas em adubo rico em nutrientes para hortas urbanas ou vasos.', difficulty: 'Médio' }
      ],
      trabalhoRua: [
        { id: '2-t1', level: 'trabalho_rua', title: 'Implantar hortas comunitárias', description: 'Mobilize vizinhos ou colegas de trabalho para criar canteiros coletivos de ervas e hortaliças em espaços ociosos.', difficulty: 'Alto Impacto' },
        { id: '2-t2', level: 'trabalho_rua', title: 'Rede de doação de excedentes de restaurantes', description: 'Conecte cozinhas corporativas a instituições do programa Mesa Brasil SESC.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Pessoas com fome no mundo', value: '735M', source: 'FAO SOFI 2024' },
      { label: 'Alimentos desperdiçados no planeta', value: '1.05 bi ton/ano', source: 'PNUMA' }
    ],
    keywords: ['alimentação', 'nutrição', 'agricultura familiar', 'desperdício', 'agroecologia']
  },
  {
    id: 3,
    code: 'ODS 3',
    title: 'Saúde e Bem-Estar',
    shortTitle: 'Saúde e Bem-Estar',
    color: '#4C9F38',
    secondaryColor: '#367228',
    category: 'Social',
    summary: 'Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.',
    whatIs: 'O ODS 3 busca reduzir a mortalidade materna e infantil, combater epidemias (como HIV, tuberculose, malária e arboviroses), prevenir o abuso de substâncias nocivas e garantir acesso a serviços de saúde mental e vacinação universal.',
    whyItMatters: 'A saúde é a base de todas as liberdades e capacidades humanas. Crises sanitárias e falta de cobertura de saúde ampliam disparidades sociais e interrompem trajetórias de vida e desenvolvimento.',
    keyFact: 'A vacinação previne entre 3,5 a 5 milhões de mortes a cada ano por doenças como difteria, tétano, coqueluche, gripe e sarampo.',
    targets: [
      { code: '3.1', title: 'Reduzir a mortalidade materna global', description: 'Reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos.' },
      { code: '3.2', title: 'Acabar com mortes evitáveis de recém-nascidos', description: 'Reduzir a mortalidade neonatal e infantil em crianças menores de 5 anos.' },
      { code: '3.3', title: 'Combater epidemias transmissíveis', description: 'Acabar com as epidemias de AIDS, tuberculose, malária e combater a hepatite e doenças transmitidas pela água.' },
      { code: '3.8', title: 'Atingir a cobertura universal de saúde', description: 'Garantir acesso a serviços de saúde essenciais de qualidade e a medicamentos e vacinas seguros e acessíveis.' }
    ],
    actions: {
      sofa: [
        { id: '3-s1', level: 'sofa', title: 'Combater a desinformação sobre vacinas', description: 'Compartilhe apenas fontes científicas confiáveis (Ministério da Saúde, Fiocruz, OMS) sobre imunização.', difficulty: 'Fácil' },
        { id: '3-s2', level: 'sofa', title: 'Pausas ativas para ergonomia e visão', description: 'Pratique a regra 20-20-20 para descansar os olhos ao usar telas digitais.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '3-c1', level: 'casa', title: 'Manter a carteira de vacinação atualizada', description: 'Verifique periodicamente suas vacinas e de seus familiares nos postos do SUS.', difficulty: 'Fácil' },
        { id: '3-c2', level: 'casa', title: 'Eliminar focos de água parada (Dengue)', description: 'Faça inspeção semanal em calhas, vasos de plantas e reservatórios domésticos.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '3-t1', level: 'trabalho_rua', title: 'Doação periódica de sangue', description: 'Doe sangue ao menos 2 vezes ao ano. Cada doação pode salvar até 4 vidas.', difficulty: 'Médio', tip: 'Procure o Hemocentro de sua cidade; a doação leva menos de 1 hora.' },
        { id: '3-t2', level: 'trabalho_rua', title: 'Promover segurança psicológica no trabalho', description: 'Estimule conversas abertas sobre burnout e saúde mental no ambiente corporativo.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Cobertura vacinal salva anualmente', value: '4 Milhões', source: 'OMS' },
      { label: 'Impacto da depressão na produtividade global', value: 'US$ 1 Tri', source: 'Banco Mundial' }
    ],
    keywords: ['saúde mental', 'vacinação', 'sus', 'bem-estar', 'prevenção']
  },
  {
    id: 4,
    code: 'ODS 4',
    title: 'Educação de Qualidade',
    shortTitle: 'Educação',
    color: '#C5192D',
    secondaryColor: '#931221',
    category: 'Social',
    summary: 'Assegurar a educação inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida.',
    whatIs: 'Garantir que todas as meninas e meninos completem o ensino primário e secundário gratuito, equitativo e de qualidade, além de aumentar substancialmente o número de jovens e adultos com competências relevantes para o emprego.',
    whyItMatters: 'A educação quebra ciclos intergeracionais de pobreza, reduz desigualdades, fortalece democracias e empodera indivíduos para construir soluções frente aos desafios climáticos e tecnológicos.',
    keyFact: 'Cada ano adicional de escolaridade pode aumentar a renda futura de um indivíduo em cerca de 10%.',
    targets: [
      { code: '4.1', title: 'Educação primária e secundária universal', description: 'Garantir que todas as meninas e meninos completem o ensino primário e secundário gratuito e de qualidade.' },
      { code: '4.4', title: 'Competências para trabalho decente', description: 'Aumentar o número de jovens e adultos com habilidades técnicas e profissionais para emprego e empreendedorismo.' },
      { code: '4.5', title: 'Igualdade de gênero e inclusão na educação', description: 'Eliminar as disparidades de gênero na educação e garantir a igualdade de acesso a pessoas com deficiência.' },
      { code: '4.7', title: 'Educação para o desenvolvimento sustentável', description: 'Garantir que todos os alunos adquiram conhecimentos sobre sustentabilidade, direitos humanos e cidadania global.' }
    ],
    actions: {
      sofa: [
        { id: '4-s1', level: 'sofa', title: 'Compartilhar cursos abertos e materiais gratuitos', description: 'Divulgue plataformas de ensino aberto de universidades públicas e MOOCs gratuitos para redes comunitárias.', difficulty: 'Fácil' },
        { id: '4-s2', level: 'sofa', title: 'Ler para crianças da família', description: 'Dedique 15 minutos diários para leitura compartilhada com crianças em fase de alfabetização.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '4-c1', level: 'casa', title: 'Doar livros para bibliotecas comunitárias', description: 'Passe adiante livros didáticos e de literatura que você já leu para escolas públicas e projetos comunitários.', difficulty: 'Fácil' },
        { id: '4-c2', level: 'casa', title: 'Aprender uma nova habilidade digital', description: 'Dedique tempo para aprender literacia de dados ou programação voltada para causas sociais.', difficulty: 'Médio' }
      ],
      trabalhoRua: [
        { id: '4-t1', level: 'trabalho_rua', title: 'Oferecer aulas e reforço escolar voluntário', description: 'Ajude estudantes de escolas públicas com matemática, redação ou idiomas nos fins de semana.', difficulty: 'Alto Impacto' },
        { id: '4-t2', level: 'trabalho_rua', title: 'Apoiar feiras de ciências e robótica escolar', description: 'Incentive sua empresa a patrocinar laboratórios ou visitas técnicas para turmas de escolas públicas.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Jovens fora da escola no mundo', value: '250 Milhões', source: 'UNESCO 2024' },
      { label: 'Retorno econômico por US$ 1 em educação', value: 'US$ 10 a 15', source: 'Banco Mundial' }
    ],
    keywords: ['escola', 'alfabetização', 'aprendizagem', 'inclusão digital', 'capacitação']
  },
  {
    id: 5,
    code: 'ODS 5',
    title: 'Igualdade de Gênero',
    shortTitle: 'Igualdade de Gênero',
    color: '#FF3A21',
    secondaryColor: '#C42511',
    category: 'Social',
    summary: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.',
    whatIs: 'Eliminar todas as formas de violência contra todas as mulheres e meninas nas esferas pública e privada, erradicar práticas nocivas como casamentos infantis, e garantir a participação plena e igualitária de liderança feminina em todos os níveis.',
    whyItMatters: 'A igualdade de gênero não é apenas um direito humano fundamental, mas uma base necessária para um mundo pacífico, próspero e sustentável.',
    keyFact: 'Mulheres realizam 3 vezes mais trabalho doméstico e de cuidado não remunerado do que os homens em âmbito global.',
    targets: [
      { code: '5.1', title: 'Fim de todas as formas de discriminação', description: 'Acabar com todas as formas de discriminação contra todas as mulheres e meninas em toda parte.' },
      { code: '5.2', title: 'Eliminar a violência contra as mulheres', description: 'Eliminar todas as formas de violência nas esferas pública e privada, incluindo o tráfico e a exploração sexual.' },
      { code: '5.4', title: 'Reconhecimento do trabalho de cuidado não pago', description: 'Reconhecer e valorizar o trabalho doméstico não remunerado por meio de serviços públicos e divisão de responsabilidades.' },
      { code: '5.5', title: 'Participação plena e liderança em decisões', description: 'Garantir a participação plena e efetiva das mulheres e a igualdade de oportunidades para a liderança em todos os níveis.' }
    ],
    actions: {
      sofa: [
        { id: '5-s1', level: 'sofa', title: 'Consumir conteúdo de autoras e criadoras', description: 'Amplifique vozes femininas e apoie criadoras de conteúdo sobre liderança e ciência.', difficulty: 'Fácil' },
        { id: '5-s2', level: 'sofa', title: 'Disseminar os canais de denúncia (Disque 180)', description: 'Guarde e compartilhe os números oficiais de apoio a vítimas de violência doméstica.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '5-c1', level: 'casa', title: 'Divisão equitativa das tarefas domésticas', description: 'Estabeleça um quadro equilibrado de cuidados da casa e filhos sem sobrecarregar as mulheres da família.', difficulty: 'Médio' },
        { id: '5-c2', level: 'casa', title: 'Educar sem estereótipos limitantes', description: 'Incentive meninas em STEM (ciências, tecnologia e matemática) e meninos nas tarefas de empatia e cuidado.', difficulty: 'Médio' }
      ],
      trabalhoRua: [
        { id: '5-t1', level: 'trabalho_rua', title: 'Equidade salarial e comitês de liderança', description: 'Audite a paridade salarial em sua organização para funções idênticas e promova mentorias femininas.', difficulty: 'Alto Impacto' },
        { id: '5-t2', level: 'trabalho_rua', title: 'Apoiar negócios liderados por mulheres', description: 'Dê preferência a contratar fornecedoras e comprar de microempreendedoras locais.', difficulty: 'Fácil' }
      ]
    },
    stats: [
      { label: 'Mulheres em posições de gestão globais', value: '28.2%', source: 'ONU Mulheres' },
      { label: 'Tempo gasto em cuidados não remunerados', value: '3x maior p/ mulheres', source: 'OIT' }
    ],
    keywords: ['mulheres', 'equidade salarial', 'combate à violência', 'liderança feminina', 'cuidado']
  },
  {
    id: 6,
    code: 'ODS 6',
    title: 'Água Potável e Saneamento',
    shortTitle: 'Água e Saneamento',
    color: '#26BDE2',
    secondaryColor: '#1A87A1',
    category: 'Ambiental',
    summary: 'Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos.',
    whatIs: 'Garantir o acesso universal e equitativo à água potável segura e acessível, além de acesso a saneamento e higiene adequados, acabando com a defecação a céu aberto e melhorando a qualidade da água através do tratamento de esgoto.',
    whyItMatters: 'A água é essencial para a vida e a dignidade. Mais de 2 bilhões de pessoas ainda vivem em países com estresse hídrico agudo, e a poluição hídrica compromete ecossistemas inteiros e a saúde pública.',
    keyFact: 'No Brasil, cerca de 32 milhões de pessoas não têm acesso à água tratada e quase 90 milhões não têm coleta de esgoto.',
    targets: [
      { code: '6.1', title: 'Acesso universal à água potável segura', description: 'Alcançar o acesso universal e equitativo à água potável e segura para todos até 2030.' },
      { code: '6.2', title: 'Saneamento e higiene adequados para todos', description: 'Garantir acesso a saneamento adequado e higiene para todos, prestando atenção especial às necessidades de mulheres e meninas.' },
      { code: '6.3', title: 'Melhorar a qualidade da água e tratar efluentes', description: 'Reduzir a poluição, eliminar o despejo de produtos químicos perigosos e dobrar a proporção de esgoto tratado.' },
      { code: '6.4', title: 'Aumentar a eficiência no uso da água', description: 'Aumentar substancialmente a eficiência do uso da água em todos os setores e assegurar retiradas sustentáveis.' }
    ],
    actions: {
      sofa: [
        { id: '6-s1', level: 'sofa', title: 'Monitorar a pegada hídrica oculta', description: 'Use calculadoras online de pegada hídrica para entender quanta água foi gasta para produzir suas roupas e alimentos.', difficulty: 'Fácil' },
        { id: '6-s2', level: 'sofa', title: 'Reportar vazamentos públicos via app municipal', description: 'Fotografe e acione o serviço de saneamento quando avistar canos rompidos nas vias públicas.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '6-c1', level: 'casa', title: 'Banhos mais curtos e arejadores de torneira', description: 'Instale arejadores nas torneiras (reduzem a vazão em até 50%) e limite banhos a menos de 5 minutos.', difficulty: 'Fácil' },
        { id: '6-c2', level: 'casa', title: 'Descarte correto de óleo de cozinha usado', description: 'Nunca despeje óleo de fritura na pia; armazene em garrafas PET e entregue em postos de reciclagem de sabão/biodiesel.', difficulty: 'Fácil', tip: '1 litro de óleo pode contaminar até 25 mil litros de água potável.' }
      ],
      trabalhoRua: [
        { id: '6-t1', level: 'trabalho_rua', title: 'Sistemas de captação de água da chuva', description: 'Proponha a instalação de cisternas no seu condomínio ou empresa para limpeza de pátios e irrigação de jardins.', difficulty: 'Médio' },
        { id: '6-t2', level: 'trabalho_rua', title: 'Apoiar o saneamento rural e periférico', description: 'Apoie ONGs que constroem biodigestores e fossas ecológicas em áreas periurbanas e comunidades ribeirinhas.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'População mundial sem água potável segura', value: '2.2 Bilhões', source: 'OMS/UNICEF JMP' },
      { label: 'Esgoto não tratado descartado globalmente', value: '44%', source: 'UN-Water' }
    ],
    keywords: ['água', 'saneamento', 'esgoto', 'reuso', 'biodigestores']
  },
  {
    id: 7,
    code: 'ODS 7',
    title: 'Energia Limpa e Acessível',
    shortTitle: 'Energia Sustentável',
    color: '#FCC30B',
    secondaryColor: '#B58B04',
    category: 'Ambiental',
    summary: 'Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todos.',
    whatIs: 'Aumentar substancialmente a participação de energias renováveis (solar, eólica, biomassa) na matriz energética global, duplicar a taxa global de melhoria da eficiência energética e garantir acesso à eletricidade e combustíveis limpos.',
    whyItMatters: 'A energia é o motor central de quase todos os grandes desafios e oportunidades do planeta. A queima de combustíveis fósseis é a principal responsável pelas emissões de gases de efeito estufa causadores do aquecimento global.',
    keyFact: 'O setor de energia responde por cerca de três quartos das emissões globais de gases de efeito estufa.',
    targets: [
      { code: '7.1', title: 'Acesso universal a serviços de energia modernos', description: 'Garantir o acesso universal, confiável e a preços acessíveis a serviços de energia modernos.' },
      { code: '7.2', title: 'Aumentar a fatia de energias renováveis', description: 'Aumentar substancialmente a participação de energias renováveis na matriz energética global.' },
      { code: '7.3', title: 'Dobrar a taxa de eficiência energética', description: 'Duplicar a taxa global de melhoria da eficiência energética em transportes, indústria e residências.' }
    ],
    actions: {
      sofa: [
        { id: '7-s1', level: 'sofa', title: 'Desconectar aparelhos em modo stand-by', description: 'Luzes vermelhas e telas ligadas na tomada consomem até 12% da eletricidade de uma residência.', difficulty: 'Fácil' },
        { id: '7-s2', level: 'sofa', title: 'Ajustar brilho de monitores e modos de economia', description: 'Ative modos de suspensão rápida em computadores e televisores para poupar kWh.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '7-c1', level: 'casa', title: 'Substituição total por lâmpadas LED', description: 'Lâmpadas LED consomem até 85% menos energia que as incandescentes e duram até 25 vezes mais.', difficulty: 'Fácil' },
        { id: '7-c2', level: 'casa', title: 'Uso racional de ar-condicionado e geladeira', description: 'Mantenha o termostato em 23°C ou 24°C e verifique a vedação das borrachas do refrigerador.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '7-t1', level: 'trabalho_rua', title: 'Aderir à energia solar por assinatura ou geração própria', description: 'Utilize cooperativas solares compartilhadas para receber créditos de energia limpa direto na conta.', difficulty: 'Médio' },
        { id: '7-t2', level: 'trabalho_rua', title: 'Auditorias de eficiência energética em edifícios', description: 'Defenda a instalação de sensores de presença e timers de iluminação em corredores corporativos.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Pessoas sem acesso à eletricidade no mundo', value: '675 Milhões', source: 'IEA / Banco Mundial' },
      { label: 'Energia renovável na matriz elétrica brasileira', value: '~87%', source: 'EPE / ONS' }
    ],
    keywords: ['solar', 'eólica', 'eficiência energética', 'eletricidade', 'descarbonização']
  },
  {
    id: 8,
    code: 'ODS 8',
    title: 'Trabalho Decente e Crescimento Econômico',
    shortTitle: 'Trabalho Decente',
    color: '#A21942',
    secondaryColor: '#75102E',
    category: 'Economico',
    summary: 'Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.',
    whatIs: 'Alcançar níveis mais elevados de produtividade através da inovação tecnológica, erradicar o trabalho forçado e o trabalho infantil, proteger os direitos trabalhistas e promover ambientes de trabalho seguros.',
    whyItMatters: 'O crescimento econômico sustentável requer que as sociedades criem as condições para que as pessoas tenham empregos de qualidade que estimulem a economia sem danificar o meio ambiente nem explorar a dignidade humana.',
    keyFact: 'Mais de 160 milhões de crianças ainda são submetidas a trabalho infantil no mundo, metade em atividades perigosas.',
    targets: [
      { code: '8.2', title: 'Diversificação, inovação e produtividade', description: 'Alcançar níveis mais elevados de produtividade através da inovação e foco em setores de alto valor agregado.' },
      { code: '8.5', title: 'Emprego pleno e salário igual para trabalho igual', description: 'Garantir emprego pleno e produtivo com remuneração justa e igualdade salarial para homens e mulheres.' },
      { code: '8.7', title: 'Erradicar trabalho escravo e trabalho infantil', description: 'Tomar medidas imediatas para erradicar o trabalho forçado e eliminar as piores formas de trabalho infantil.' },
      { code: '8.9', title: 'Turismo sustentável que gere empregos locais', description: 'Desenvolver e implementar políticas para promover o turismo sustentável que valorize a cultura local.' }
    ],
    actions: {
      sofa: [
        { id: '8-s1', level: 'sofa', title: 'Verificar a lista suja do trabalho escravo', description: 'Consulte a lista pública do Ministério do Trabalho antes de contratar fornecedores ou comprar de grandes marcas.', difficulty: 'Fácil' },
        { id: '8-s2', level: 'sofa', title: 'Avaliar e elogiar negócios que respeitam funcionários', description: 'Deixe avaliações positivas online para estabelecimentos que oferecem bom tratamento e salários dignos.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '8-c1', level: 'casa', title: 'Formalizar prestadores de serviço doméstico', description: 'Garanta carteira assinada, recolhimento de FGTS e férias remuneradas a quem trabalha na sua casa.', difficulty: 'Médio' },
        { id: '8-c2', level: 'casa', title: 'Comprar de artesãos e feirantes locais', description: 'Mantenha o dinheiro circulando na economia do seu bairro, fortalecendo pequenos empreendedores.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '8-t1', level: 'trabalho_rua', title: 'Desenvolver programas de estágio e primeiro emprego', description: 'Crie oportunidades reais de aprendizagem e inclusão para jovens periféricos na sua empresa.', difficulty: 'Alto Impacto' },
        { id: '8-t2', level: 'trabalho_rua', title: 'Cuidar da ergonomia e segurança ocupacional', description: 'Promova ambientes de trabalho seguros, horários balanceados e pausas saudáveis.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Jovens nem-nem (sem estudo e sem emprego)', value: '23.5% globais', source: 'OIT' },
      { label: 'Trabalhadores na informalidade na América Latina', value: '~50%', source: 'CEPAL' }
    ],
    keywords: ['emprego', 'direitos trabalhistas', 'economia justa', 'empreendedorismo', 'jovens']
  },
  {
    id: 9,
    code: 'ODS 9',
    title: 'Indústria, Inovação e Infraestrutura',
    shortTitle: 'Inovação e Indústria',
    color: '#FD6925',
    secondaryColor: '#B84511',
    category: 'Economico',
    summary: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.',
    whatIs: 'Desenvolver infraestrutura sustentável e regional, modernizar indústrias para torná-las ecológicas com maior eficiência no uso de recursos e incentivar a pesquisa científica e o acesso universal à internet.',
    whyItMatters: 'Investimentos em infraestrutura sustentável — transportes, energia, água, saneamento e tecnologia da informação — são essenciais para viabilizar comunidades prósperas e resilientes a catástrofes climáticas.',
    keyFact: 'Cerca de 2,6 bilhões de pessoas no mundo ainda não têm conexão confiável à internet.',
    targets: [
      { code: '9.1', title: 'Infraestrutura sustentável e resiliente', description: 'Desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente para apoiar o desenvolvimento.' },
      { code: '9.2', title: 'Industrialização inclusiva e sustentável', description: 'Promover a industrialização inclusiva e aumentar significativamente a participação do setor no emprego e no PIB.' },
      { code: '9.4', title: 'Modernizar infraestruturas e tecnologias limpas', description: 'Modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis e eficientes.' },
      { code: '9.c', title: 'Acesso universal à tecnologia da informação', description: 'Aumentar significativamente o acesso às tecnologias de informação e comunicação e acesso acessível à internet.' }
    ],
    actions: {
      sofa: [
        { id: '9-s1', level: 'sofa', title: 'Apoiar projetos de ciência e software livre', description: 'Contribua ou compartilhe repositórios de código aberto e projetos científicos abertos.', difficulty: 'Fácil' },
        { id: '9-s2', level: 'sofa', title: 'Denunciar obsolescência programada', description: 'Prefira fabricantes que oferecem peças de reposição e atualizações de software de longo prazo.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '9-c1', level: 'casa', title: 'Reparar antes de descartar', description: 'Adote o direito de reparar: conserte eletrodomésticos e celulares em assistências técnicas locais.', difficulty: 'Médio' },
        { id: '9-c2', level: 'casa', title: 'Descarte ecológico de lixo eletrônico (e-waste)', description: 'Leve cabos, pilhas e computadores velhos a pontos de coleta credenciados (Green Eletron).', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '9-t1', level: 'trabalho_rua', title: 'Promover logística reversa e economia circular', description: 'Ajude sua empresa a desenhar embalagens recicláveis e fluxos de recolhimento pós-consumo.', difficulty: 'Alto Impacto' },
        { id: '9-t2', level: 'trabalho_rua', title: 'Incentivar laboratórios de inovação em favelas', description: 'Patrocine ou realize oficinas em FabLabs comunitários e centros de inovação periféricos.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Geração mundial de lixo eletrônico', value: '62M ton/ano', source: 'ONU UNITAR 2024' },
      { label: 'Investimento em P&D no PIB global', value: '1.93%', source: 'UNESCO' }
    ],
    keywords: ['tecnologia', 'internet', 'circularidade', 'pesquisa', 'infraestrutura']
  },
  {
    id: 10,
    code: 'ODS 10',
    title: 'Redução das Desigualdades',
    shortTitle: 'Reduzir Desigualdades',
    color: '#DD1367',
    secondaryColor: '#9C0B46',
    category: 'Social',
    summary: 'Reduzir a desigualdade no interior dos países e entre eles.',
    whatIs: 'Promover a inclusão social, econômica e política de todos, independentemente da idade, gênero, deficiência, raça, etnia, origem, religião ou condição econômica, além de garantir a igualdade de oportunidades e reduzir desigualdades de resultados.',
    whyItMatters: 'A desigualdade excessiva mina o crescimento econômico sustentável, corrói a coesão social, fomenta a violência e impede que milhões alcancem seu pleno potencial humano.',
    keyFact: 'O 1% mais rico da população mundial acumula quase metade de toda a riqueza do planeta.',
    targets: [
      { code: '10.1', title: 'Crescimento de renda dos mais vulneráveis', description: 'Alcançar e manter o crescimento da renda dos 40% mais pobres a uma taxa superior à média nacional.' },
      { code: '10.2', title: 'Promover a inclusão social universal', description: 'Empoderar e promover a inclusão social, econômica e política de todos, independentemente de raça, etnia ou condição.' },
      { code: '10.3', title: 'Garantir a igualdade de oportunidades', description: 'Eliminar leis, políticas e práticas discriminatórias e promover legislações e políticas adequadas.' },
      { code: '10.7', title: 'Migração ordenada, segura e responsável', description: 'Facilitar a migração e a mobilidade ordenada, segura, regular e responsável de pessoas.' }
    ],
    actions: {
      sofa: [
        { id: '10-s1', level: 'sofa', title: 'Consumir mídias diversas e combater preconceitos', description: 'Siga criadores com deficiência, indígenas, negros e LGBTQIA+ para expandir sua perspectiva.', difficulty: 'Fácil' },
        { id: '10-s2', level: 'sofa', title: 'Denunciar discursos de ódio e discriminação online', description: 'Utilize os canais das plataformas e o SaferNet para denunciar racismo e xenofobia na internet.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '10-c1', level: 'casa', title: 'Acessibilidade em espaços de convivência', description: 'Mobilize o condomínio para construir rampas, corrimãos e sinalização em braille nos acessos comuns.', difficulty: 'Médio' },
        { id: '10-c2', level: 'casa', title: 'Acolhimento a pessoas refugiadas e migrantes', description: 'Apoie iniciativas como a ACNUR e projetos locais que auxiliam migrantes com documentação e idioma.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '10-t1', level: 'trabalho_rua', title: 'Políticas afirmativas de contratação D&I', description: 'Implemente processos seletivos intencionais para grupos historicamente sub-representados.', difficulty: 'Alto Impacto' },
        { id: '10-t2', level: 'trabalho_rua', title: 'Mentoria para pessoas com deficiência (PcD)', description: 'Ajude a derrubar barreiras atitudinais e arquitetônicas no seu local de trabalho.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Índice de Gini no Brasil', value: '0.518', source: 'IBGE PNAD Contínua' },
      { label: 'Pessoas refugiadas forçadas no mundo', value: '120 Milhões', source: 'ACNUR' }
    ],
    keywords: ['diversidade', 'acessibilidade', 'inclusão', 'antirracismo', 'refugiados']
  },
  {
    id: 11,
    code: 'ODS 11',
    title: 'Cidades e Comunidades Sustentáveis',
    shortTitle: 'Cidades Sustentáveis',
    color: '#FD9D24',
    secondaryColor: '#B86F12',
    category: 'Ambiental',
    summary: 'Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.',
    whatIs: 'Garantir moradia segura e acessível, urbanização de favelas, sistemas de transporte público sustentáveis e acessíveis para todos, salvaguarda do patrimônio cultural e redução do impacto ambiental negativo das cidades (qualidade do ar e resíduos).',
    whyItMatters: 'As cidades ocupam apenas 3% da superfície terrestre, mas respondem por 70% das emissões globais de carbono e por mais de 60% do uso de recursos. Torná-las sustentáveis é a batalha decisiva contra o colapso climático.',
    keyFact: 'Mais de 1 bilhão de pessoas vivem atualmente em favelas ou assentamentos precários no mundo.',
    targets: [
      { code: '11.1', title: 'Moradia segura e acessível para todos', description: 'Garantir o acesso de todos a habitação segura, adequada e a preço acessível, e urbanizar assentamentos precários.' },
      { code: '11.2', title: 'Transporte público seguro e acessível', description: 'Proporcionar o acesso a sistemas de transporte seguros, sustentáveis e acessíveis, com expansão do transporte coletivo.' },
      { code: '11.6', title: 'Reduzir o impacto ambiental das cidades', description: 'Reduzir o impacto ambiental negativo per capita das cidades, prestando especial atenção à qualidade do ar e gestão de resíduos.' },
      { code: '11.7', title: 'Espaços públicos verdes e seguros', description: 'Proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, para mulheres, crianças e idosos.' }
    ],
    actions: {
      sofa: [
        { id: '11-s1', level: 'sofa', title: 'Participar de consultas públicas e audiências do Plano Diretor', description: 'Acompanhe as reuniões online da Câmara Municipal e vote em propostas de mobilidade e áreas verdes.', difficulty: 'Fácil' },
        { id: '11-s2', level: 'sofa', title: 'Divulgar eventos culturais em praças públicas', description: 'Estimule a ocupação artística e pacífica dos espaços públicos da sua cidade.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '11-c1', level: 'casa', title: 'Separar lixo seco de orgânico rigorosamente', description: 'Embalar vidros quebrados com segurança e entregar recicláveis limpos aos catadores de materiais da sua rua.', difficulty: 'Fácil' },
        { id: '11-c2', level: 'casa', title: 'Cultivar plantas nativas na calçada ou varanda', description: 'Aumente a cobertura vegetal urbana para amenizar ilhas de calor e alimentar pássaros e polinizadores.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '11-t1', level: 'trabalho_rua', title: 'Optar por bicicleta, caminhada ou transporte público', description: 'Substitua o carro individual ao menos 2 dias por semana para aliviar o tráfego e a poluição atmosférica.', difficulty: 'Médio' },
        { id: '11-t2', level: 'trabalho_rua', title: 'Organizar mutirões de revitalização de praças', description: 'Junte amigos e vizinhos para pintar bancos, recolher entulhos e plantar mudas em praças esquecidas.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'População urbana global em 2050', value: '68%', source: 'ONU Habitat' },
      { label: 'Emissões globais originadas em cidades', value: '70%+', source: 'IPCC' }
    ],
    keywords: ['mobilidade urbana', 'transporte público', 'reciclagem', 'moradia', 'praças']
  },
  {
    id: 12,
    code: 'ODS 12',
    title: 'Consumo e Produção Responsáveis',
    shortTitle: 'Consumo Responsável',
    color: '#BF8B2E',
    secondaryColor: '#8C641B',
    category: 'Economico',
    summary: 'Assegurar padrões de produção e de consumo sustentáveis.',
    whatIs: 'Alcançar a gestão sustentável e o uso eficiente dos recursos naturais, reduzir pela metade o desperdício global de alimentos per capita, reduzir substancialmente a geração de resíduos através da prevenção, redução, reciclagem e reúso.',
    whyItMatters: 'Se a população global atingir 9,8 bilhões de pessoas em 2050, seriam necessários quase três planetas Terra para fornecer os recursos naturais indispensáveis para manter os atuais estilos de vida ocidentais.',
    keyFact: 'Cerca de 1 trilhão de sacolas plásticas descartáveis são usadas e descartadas no mundo todos os anos.',
    targets: [
      { code: '12.1', title: 'Planos de consumo e produção sustentáveis', description: 'Implementar o plano decenal de programas sobre padrões de consumo e produção sustentáveis.' },
      { code: '12.3', title: 'Reduzir pela metade o desperdício de alimentos', description: 'Reduzir pela metade o desperdício de alimentos per capita mundial nos níveis de varejo e do consumidor.' },
      { code: '12.5', title: 'Reduzir substancialmente a geração de resíduos', description: 'Reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reúso.' },
      { code: '12.6', title: 'Incentivar empresas a adotar relatórios ESG', description: 'Incentivar as empresas a adotar práticas sustentáveis e integrar informações de sustentabilidade em seus relatórios.' }
    ],
    actions: {
      sofa: [
        { id: '12-s1', level: 'sofa', title: 'Fazer compras conscientes e evitar impulsos', description: 'Adote a regra dos 3 dias: espere 72 horas antes de comprar um item não essencial para testar a real necessidade.', difficulty: 'Fácil' },
        { id: '12-s2', level: 'sofa', title: 'Cancelar assinaturas e faturas impressas', description: 'Opte por boletos e comprovantes 100% digitais para economizar papel e logística.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '12-c1', level: 'casa', title: 'Eliminar plásticos de uso único (ecobags e garrafas)', description: 'Carregue sempre sua própria sacola retornável, copo térmico e canudo reutilizável.', difficulty: 'Fácil' },
        { id: '12-c2', level: 'casa', title: 'Consumo de brechó e moda circular', description: 'Compre roupas de segunda mão ou doe/venda peças paradas antes de comprar novas.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '12-t1', level: 'trabalho_rua', title: 'Banir descartáveis em reuniões e eventos', description: 'Substitua copos e pratinhos plásticos por louças laváveis ou copos com caução em sua empresa.', difficulty: 'Médio' },
        { id: '12-t2', level: 'trabalho_rua', title: 'Valorizar associações de catadores de recicláveis', description: 'Contrate cooperativas de catadores (MNCR) para a gestão oficial de resíduos corporativos.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Geração média de lixo plástico por habitante', value: '1 kg/dia', source: 'Banco Mundial' },
      { label: 'Planetas necessários no ritmo de consumo atual', value: '1.7 Terras', source: 'Global Footprint Network' }
    ],
    keywords: ['plástico zero', 'economia circular', 'reciclagem', 'ecobag', 'minimalismo']
  },
  {
    id: 13,
    code: 'ODS 13',
    title: 'Ação Contra a Mudança Global do Clima',
    shortTitle: 'Ação Climática',
    color: '#3F7E44',
    secondaryColor: '#2B572F',
    category: 'Ambiental',
    summary: 'Tomar medidas urgentes para combater a mudança climática e seus impactos.',
    whatIs: 'Reforçar a resiliência e a capacidade de adaptação a riscos relacionados ao clima e às catástrofes naturais, integrar medidas sobre a mudança do clima nas políticas nacionais e melhorar a educação e a conscientização sobre mitigação do clima.',
    whyItMatters: 'O aquecimento global está intensificando secas severas, inundações históricas, incêndios florestais e elevação dos mares. Não há desenvolvimento possível em um planeta ecologicamente desestabilizado.',
    keyFact: 'A concentração de dióxido de carbono (CO2) na atmosfera atingiu o maior patamar em pelo menos 2 milhões de anos.',
    targets: [
      { code: '13.1', title: 'Resiliência e adaptação a desastres climáticos', description: 'Reforçar a resiliência e a capacidade de adaptação a riscos climáticos e desastres naturais em todos os países.' },
      { code: '13.2', title: 'Integrar medidas climáticas em políticas nacionais', description: 'Integrar medidas da mudança do clima nas políticas, estratégias e planejamentos nacionais.' },
      { code: '13.3', title: 'Educação e conscientização sobre o clima', description: 'Melhorar a educação, aumentar a conscientização e a capacidade humana sobre mitigação e adaptação climática.' }
    ],
    actions: {
      sofa: [
        { id: '13-s1', level: 'sofa', title: 'Calcular e neutralizar sua pegada de carbono', description: 'Meça suas emissões de viagens e energia e apoie projetos certificados de reflorestamento com créditos de carbono.', difficulty: 'Fácil' },
        { id: '13-s2', level: 'sofa', title: 'Apoiar petições e políticas pelo Acordo de Paris', description: 'Assine campanhas por metas ambiciosas de emissões líquidas zero (Net-Zero).', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '13-c1', level: 'casa', title: 'Adotar a Segunda sem Carne (Plant-Based)', description: 'Reduza o consumo de carne bovina ao menos 1 ou 2 dias por semana; a pecuária intensiva é grande emissora de metano.', difficulty: 'Fácil' },
        { id: '13-c2', level: 'casa', title: 'Preservar árvores e criar jardins de chuva', description: 'Evite impermeabilizar quintais com concreto; deixe terra permeável para absorver enxurradas.', difficulty: 'Médio' }
      ],
      trabalhoRua: [
        { id: '13-t1', level: 'trabalho_rua', title: 'Descarbonização da frota e trabalho remoto', description: 'Incentive políticas de trabalho híbrido e substituição de veículos corporativos por modelos elétricos ou híbridos.', difficulty: 'Alto Impacto' },
        { id: '13-t2', level: 'trabalho_rua', title: 'Plantio de mudas nativas em áreas degradadas', description: 'Participe ativamente de ações de restauração ecológica da Mata Atlântica e Cerrado.', difficulty: 'Médio' }
      ]
    },
    stats: [
      { label: 'Aumento da temperatura média global já registrado', value: '+1.2°C', source: 'IPCC AR6' },
      { label: 'Meta limite de aquecimento do Acordo de Paris', value: '1.5°C', source: 'ONU Clima' }
    ],
    keywords: ['carbono zero', 'aquecimento global', 'adaptação climática', 'net-zero', 'ipcc']
  },
  {
    id: 14,
    code: 'ODS 14',
    title: 'Vida na Água',
    shortTitle: 'Vida na Água',
    color: '#0A97D9',
    secondaryColor: '#076996',
    category: 'Ambiental',
    summary: 'Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável.',
    whatIs: 'Prevenir e reduzir significativamente a poluição marinha de todos os tipos, gerir e proteger de forma sustentável os ecossistemas marinhos e costeiros, combater a acidificação dos oceanos e regular a pesca predatória.',
    whyItMatters: 'Os oceanos cobrem três quartos da superfície terrestre, contêm 97% da água do planeta e absorvem cerca de 30% do dióxido de carbono gerado pela humanidade, além de produzirem mais de 50% do oxigênio que respiramos.',
    keyFact: 'Estima-se que até 2050 possa haver mais plástico do que peixes nos oceanos em peso, se o ritmo atual continuar.',
    targets: [
      { code: '14.1', title: 'Prevenir e reduzir a poluição marinha', description: 'Até 2025, prevenir e reduzir substancialmente a poluição marinha de todos os tipos, especialmente detritos plásticos.' },
      { code: '14.2', title: 'Proteger e restaurar ecossistemas costeiros', description: 'Gerir e proteger de forma sustentável os ecossistemas marinhos e costeiros para evitar impactos adversos graves.' },
      { code: '14.4', title: 'Combater a pesca predatória e ilegal', description: 'Regular efetivamente a colheita, acabar com a sobrepesca e com a pesca ilegal, não reportada e não regulamentada.' },
      { code: '14.5', title: 'Conservar áreas costeiras e marinhas', description: 'Conservar pelo menos 10% das zonas costeiras e marinhas de acordo com o direito nacional e internacional.' }
    ],
    actions: {
      sofa: [
        { id: '14-s1', level: 'sofa', title: 'Aprender sobre microplásticos e cosméticos', description: 'Evite esfoliantes e produtos que contêm microesferas de polietileno (microplásticos).', difficulty: 'Fácil' },
        { id: '14-s2', level: 'sofa', title: 'Apoiar documentários e ONGs marinhas', description: 'Divulgue campanhas da Sea Shepherd, Projeto Tamar e Instituto Baleia Jubarte.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '14-c1', level: 'casa', title: 'Recolha total de lixo ao frequentar a praia', description: 'Nunca deixe bitucas de cigarro, canudos ou embalagens na areia; recolha até mesmo o lixo deixado por outros.', difficulty: 'Fácil' },
        { id: '14-c2', level: 'casa', title: 'Consumo responsável de pescados certificados', description: 'Verifique se os peixes que você consome possuem selo de pesca sustentável (MSC) e respeite o período de defeso.', difficulty: 'Médio' }
      ],
      trabalhoRua: [
        { id: '14-t1', level: 'trabalho_rua', title: 'Participar do Dia Mundial de Limpeza de Rios e Praias', description: 'Junte-se a mutirões de voluntariado no Clean Up Day e ajude a pesar e catalogar os resíduos recolhidos.', difficulty: 'Médio' },
        { id: '14-t2', level: 'trabalho_rua', title: 'Proteger manguezais e restingas', description: 'Defenda a preservação rigorosa de manguezais contra loteamentos irregulares e carcinicultura predadora.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Plástico despejado anualmente nos oceanos', value: '11M ton/ano', source: 'PNUMA' },
      { label: 'Oxigênio atmosférico produzido pelos oceanos', value: '> 50%', source: 'NOAA' }
    ],
    keywords: ['oceanos', 'praias', 'microplásticos', 'pesca sustentável', 'corais']
  },
  {
    id: 15,
    code: 'ODS 15',
    title: 'Vida Terrestre',
    shortTitle: 'Vida Terrestre',
    color: '#56C02B',
    secondaryColor: '#3C881E',
    category: 'Ambiental',
    summary: 'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.',
    whatIs: 'Conservar e restaurar florestas, zonas úmidas, terras áridas e montanhas, combater o desmatamento ilegal, deter a caça ilegal e o tráfico de espécies protegidas da flora e fauna silvestres.',
    whyItMatters: 'As florestas cobrem quase 31% da superfície da Terra e abrigam mais de 80% de todas as espécies terrestres de animais, plantas e insetos. A degradação do solo afeta o bem-estar de 3,2 bilhões de pessoas.',
    keyFact: 'Cerca de 1 milhão de espécies de animais e plantas estão ameaçadas de extinção nos próximos anos devido à atividade humana.',
    targets: [
      { code: '15.1', title: 'Conservação de ecossistemas terrestres', description: 'Assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres e de água doce interiores.' },
      { code: '15.2', title: 'Combater o desmatamento e reflorestar', description: 'Promover a gestão sustentável de todas as florestas, deter o desmatamento e aumentar substancialmente o florestamento.' },
      { code: '15.5', title: 'Deter a perda de biodiversidade e extinções', description: 'Tomar medidas urgentes para reduzir a degradação dos habitats naturais e prevenir a extinção de espécies ameaçadas.' },
      { code: '15.7', title: 'Combater o tráfico de animais silvestres', description: 'Tomar medidas urgentes para acabar com a caça ilegal e o tráfico de espécies protegidas.' }
    ],
    actions: {
      sofa: [
        { id: '15-s1', level: 'sofa', title: 'Nunca comprar nem incentivar posse de animais silvestres', description: 'Não compre pássaros engaiolados, macacos ou répteis sem origem autorizada pelo IBAMA.', difficulty: 'Fácil' },
        { id: '15-s2', level: 'sofa', title: 'Verificar produtos com selo FSC de madeira e papel', description: 'Prefira papéis e móveis com certificação de manejo florestal sustentável.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '15-c1', level: 'casa', title: 'Plantar espécies nativas e atrativas para abelhas', description: 'Cultive flores nativas sem pesticidas no quintal para oferecer néctar a abelhas sem ferrão e borboletas.', difficulty: 'Fácil' },
        { id: '15-c2', level: 'casa', title: 'Reduzir impressões e reutilizar folhas de papel', description: 'Rascunhe no verso de folhas usadas antes de reciclá-las.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '15-t1', level: 'trabalho_rua', title: 'Apoiar brigadas comunitárias de combate a incêndios', description: 'Ajude voluntários e bombeiros que atuam na proteção de parques e unidades de conservação.', difficulty: 'Médio' },
        { id: '15-t2', level: 'trabalho_rua', title: 'Fiscalizar e denunciar loteamentos em áreas de preservação', description: 'Comunique aos órgãos ambientais (Linha Verde do IBAMA) agressões a Áreas de Preservação Permanente (APPs).', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Espécies em risco crítico de extinção', value: '1 Milhão', source: 'IPBES' },
      { label: 'Florestas perdidas anualmente no mundo', value: '10M hectares', source: 'FAO FRA' }
    ],
    keywords: ['biodiversidade', 'florestas', 'desmatamento', 'abelhas', 'fauna silvestre']
  },
  {
    id: 16,
    code: 'ODS 16',
    title: 'Paz, Justiça e Instituições Eficazes',
    shortTitle: 'Paz e Justiça',
    color: '#00689D',
    secondaryColor: '#00476B',
    category: 'Governanca',
    summary: 'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.',
    whatIs: 'Reduzir significativamente todas as formas de violência e as taxas de mortalidade conexas, acabar com o abuso, exploração, tráfico e tortura contra crianças, promover o Estado de Direito e combater a corrupção e o suborno.',
    whyItMatters: 'Sem paz, estabilidade, direitos humanos e governança eficaz baseada no Estado de Direito, não podemos ter esperança de desenvolvimento sustentável. Conflitos armados e corrupção destroem vidas e desviam bilhões de recursos públicos.',
    keyFact: 'Mais de 100 milhões de pessoas estão deslocadas à força no mundo devido a perseguições, conflitos e violações de direitos humanos.',
    targets: [
      { code: '16.1', title: 'Reduzir significativamente todas as formas de violência', description: 'Reduzir significativamente todas as formas de violência e as taxas de mortalidade associadas em toda parte.' },
      { code: '16.2', title: 'Acabar com o abuso e exploração infantil', description: 'Acabar com abuso, exploração, tráfico e todas as formas de violência e tortura contra crianças.' },
      { code: '16.5', title: 'Reduzir substancialmente a corrupção e o suborno', description: 'Reduzir substancialmente a corrupção e o suborno em todas as suas formas.' },
      { code: '16.6', title: 'Desenvolver instituições transparentes e responsáveis', description: 'Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis.' },
      { code: '16.10', title: 'Acesso público à informação e proteger liberdades', description: 'Assegurar o acesso público à informação e proteger as liberdades fundamentais, em conformidade com as leis nacionais.' }
    ],
    actions: {
      sofa: [
        { id: '16-s1', level: 'sofa', title: 'Exercer cidadania através da Lei de Acesso à Informação (LAI)', description: 'Consulte portais de transparência de sua cidade e estado para fiscalizar os gastos em saúde e educação.', difficulty: 'Fácil' },
        { id: '16-s2', level: 'sofa', title: 'Verificar fatos antes de repassar mensagens (Fake News)', description: 'Cheque boatos em agências de checagem confiáveis (Aos Fatos, Lupa, E-Farsas) antes de encaminhar no WhatsApp.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '16-c1', level: 'casa', title: 'Praticar a comunicação não violenta (CNV)', description: 'Resolva conflitos familiares e de vizinhança com escuta empática e diálogo mediado.', difficulty: 'Médio' },
        { id: '16-c2', level: 'casa', title: 'Registrar civilmente todos os familiares', description: 'Garantir que certidões de nascimento e RG estejam sempre em dia para pleno acesso a direitos civis.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '16-t1', level: 'trabalho_rua', title: 'Votar com consciência e acompanhar mandatos', description: 'Analise o histórico, propostas e fontes de financiamento de candidatos em eleições.', difficulty: 'Médio' },
        { id: '16-t2', level: 'trabalho_rua', title: 'Programas de compliance e integridade em empresas', description: 'Exija código de ética rigoroso contra suborno, assédio e conflitos de interesse na sua organização.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Custo da corrupção na economia global', value: 'US$ 2.6 Tri', source: 'FMI' },
      { label: 'Crianças sem registro de nascimento no mundo', value: '1 em cada 4', source: 'UNICEF' }
    ],
    keywords: ['transparência', 'democracia', 'direitos humanos', 'combate à corrupção', 'paz']
  },
  {
    id: 17,
    code: 'ODS 17',
    title: 'Parcerias e Meios de Implementação',
    shortTitle: 'Parcerias Globais',
    color: '#19486A',
    secondaryColor: '#103046',
    category: 'Governanca',
    summary: 'Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.',
    whatIs: 'Mobilizar recursos financeiros nacionais e internacionais, capacitar países em desenvolvimento, promover o comércio justo, transferir tecnologias ecológicas e fortalecer parcerias multissetoriais entre governos, setor privado e sociedade civil.',
    whyItMatters: 'Nenhum dos 16 ODS anteriores pode ser alcançado isoladamente por um único país, ministério ou empresa. A Agenda 2030 é um pacto ecossistêmico que exige solidariedade e esforço conjunto.',
    keyFact: 'São necessários investimentos de cerca de US$ 4 trilhões anuais para que países em desenvolvimento atinjam as metas dos ODS até 2030.',
    targets: [
      { code: '17.1', title: 'Mobilização de recursos nacionais e fiscais', description: 'Fortalecer a mobilização de recursos internos para melhorar a capacidade nacional de arrecadação de receitas.' },
      { code: '17.6', title: 'Cooperação científica e tecnológica', description: 'Melhorar a cooperação Norte-Sul, Sul-Sul e triangular em ciência, tecnologia e inovação.' },
      { code: '17.16', title: 'Parceria global para o desenvolvimento sustentável', description: 'Aprimorar a parceria global complementada por parcerias multissetoriais que mobilizem conhecimentos e tecnologias.' },
      { code: '17.17', title: 'Incentivar parcerias público-privadas eficazes', description: 'Incentivar e promover parcerias públicas, público-privadas e com a sociedade civil eficazes.' },
      { code: '17.19', title: 'Desenvolver medições de progresso além do PIB', description: 'Construir medições do progresso no desenvolvimento sustentável que complementem o produto interno bruto (PIB).' }
    ],
    actions: {
      sofa: [
        { id: '17-s1', level: 'sofa', title: 'Disseminar os 17 ODS com a hashtag #Agenda2030', description: 'Ajude a tornar os ODS conhecidos por amigos, colegas e familiares através das redes.', difficulty: 'Fácil' },
        { id: '17-s2', level: 'sofa', title: 'Aderir à rede do Pacto Global da ONU', description: 'Acompanhe as publicações e relatórios da Rede Brasil do Pacto Global.', difficulty: 'Fácil' }
      ],
      casa: [
        { id: '17-c1', level: 'casa', title: 'Conectar causas locais a redes globais', description: 'Ajude sua associação de moradores ou clube esportivo a alinhar seus projetos sociais aos ODS.', difficulty: 'Médio' },
        { id: '17-c2', level: 'casa', title: 'Apoiar o voluntariado corporativo', description: 'Conecte habilidades profissionais de conhecidos a demandas de ONGs da sua cidade.', difficulty: 'Fácil' }
      ],
      trabalhoRua: [
        { id: '17-t1', level: 'trabalho_rua', title: 'Construir alianças multissetoriais', description: 'Una governo local, universidades e empresas privadas para resolver gargalos de coleta seletiva ou inclusão produtiva.', difficulty: 'Alto Impacto' },
        { id: '17-t2', level: 'trabalho_rua', title: 'Compartilhar dados e boas práticas abertas', description: 'Publique dados e aprendizados de sustentabilidade de maneira aberta para acelerar o aprendizado coletivo.', difficulty: 'Alto Impacto' }
      ]
    },
    stats: [
      { label: 'Empresas signatárias do Pacto Global', value: '24.000+', source: 'UN Global Compact' },
      { label: 'Países comprometidos com a Agenda 2030', value: '193 Estados-Membros', source: 'ONU' }
    ],
    keywords: ['cooperação', 'pacto global', 'alianças', 'sociedade civil', 'agenda 2030']
  }
];
