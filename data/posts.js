export const posts = [
    {
        id: 1,
        titulo: "Introdução ao React: Fundamentos e Primeiros Passos",
        resumo: "Uma introdução prática ao React: JSX, componentes, estado e como montar sua primeira aplicação passo a passo.",
        conteudo: `React mudou a forma como pensamos interfaces. Neste post eu guio você pelos conceitos essenciais para começar com confiança: o que é JSX, a diferença entre componentes de função e de classe, como funciona o fluxo de dados com props e state, e por que o conceito de "composição" é tão poderoso.

Começamos montando uma pequena aplicação Todo: criar componentes simples, passar dados por props e manipular estado local. Em seguida explico hooks fundamentais (useState, useEffect) e mostro situações práticas para cada um. Também comento boas práticas de estrutura de pastas, reutilização de componentes e como pensar testabilidade desde o início.

Dicas rápidas de produtividade: use devtools do React, divida a UI em componentes pequenos, escreva testes unitários para lógica importante e adote lint/formatters para manter o código consistente. No final proponho exercícios: criar um formulário controlado, consumir uma API pública e levantar estados de loading/erro.

Se você está começando, foque em entender o pensamento reativo e praticar muito pequenos componentes. Se já tem familiaridade, experimente hooks customizados e patterns de composição para elevar seu código.`,
        dataCriacao: "2024-03-15T10:30:00",
        categoria: "frontend",
        tags: ["react", "javascript", "frontend"],
        destaque: true,
        tempoLeitura: "7 min",
        imagem: "assets/images/react-intro.jpg"
    },
    {
        "id": 3,
        "titulo": "Modelos de Software: Do Cascata ao Ágil, Qual Usar?",
        "resumo": "Um guia pelos principais modelos de processo de software: Cascata, Prototipação, Espiral, RUP e Ágil. Explicações práticas, comparações e dicas para escolher o melhor para seu projeto.",
        "conteudo": `Se você já se perguntou como os times de desenvolvimento organizam seu trabalho para construir software, a resposta está nos modelos de processo. Eles são como receitas de bolo: cada um tem seu jeito de misturar os ingredientes (requisitos, código, testes) e assar (entregar) o produto final. Vamos mergulhar nos principais!

# 1. 💧 Modelo Cascata (Waterfall)
O clássico! É linear e sequencial: primeiro definimos todos os requisitos, depois fazemos o design, aí codificamos, testamos e só então entregamos. Não volta atrás.
- Como funciona: Parece uma escada: você só sobe um degrau depois de terminar o anterior.
- Exemplo prático: Construir um prédio. Você não começa a levantar as paredes sem ter a planta aprovada.
- Melhor para: Projetos com requisitos muito claros e que não mudam (ex.: sistema de contabilidade).
- Desvantagem: Se o cliente mudar de ideia no meio, o retrabalho é enorme e caro.

# 2. 🎨 Prototipação
Aqui, a ideia é criar um rascunho rápido (protótipo) do software para validar ideias com o cliente e ajustar os requisitos antes de desenvolver de verdade.
- Como funciona: Ciclos rápidos de feedback. Mostra-se uma versão simples, o cliente dá palpite, e você refina.
- Exemplo prático: Desenhar a interface de um app num papel ou ferramenta de design e mostrar para o usuário antes de codificar.
- Melhor para: Quando ninguém sabe exatamente como o sistema deve ficar.
- Cuidado: O cliente pode achar que o protótipo é a versão final e se frustrar.

# 3. 🔄 Modelo Espiral
Imagine um caracol: cada volta é um ciclo que passa por quatro quadrantes: planejamento, análise de risco, desenvolvimento e avaliação. É iterativo e focado em gerenciar riscos.
- Como funciona: A cada volta, você entrega uma versão mais completa do software, sempre avaliando os riscos (técnicos, de prazo, de custo).
- Exemplo prático: Desenvolver um carro elétrico autônomo. Começa com um modelo básico que anda sozinho em estrada reta (ciclo 1), depois adiciona detecção de obstáculos (ciclo 2), depois navegação urbana (ciclo 3), e assim por diante.
- Melhor para: Projetos grandes, complexos e de alto risco (ex.: software aeroespacial).
- Desvantagem: É complexo de gerenciar e exige muita experiência.

# 4. 🧩 RUP (Rational Unified Process)
É um processo iterativo também, mas bem estruturado. Divide o projeto em fases (Concepção, Elaboração, Construção, Transição) e em disciplinas (Requisitos, Projeto, etc.). É como ter um mapa detalhado para uma viagem.
- Como funciona: Dirigido por casos de uso e focado na arquitetura. A cada iteração, você passa por várias disciplinas.
- Exemplo prático: Desenvolver um sistema ERP para uma grande empresa. Você precisa de uma arquitetura robusta desde o início.
- Melhor para: Projetos grandes que precisam de alta qualidade e documentação.
- Desvantagem: Pode ser considerado burocrático e pesado para projetos pequenos.

# 5. ⚡ Ágil (e Scrum) - O Foco
Eis a estrela do século XXI! O Manifesto Ágil valoriza:
- Indivíduos e interações sobre processos e ferramentas.
- Software em funcionamento sobre documentação abrangente.
- Colaboração com o cliente sobre negociação de contratos.
- Responder a mudanças sobre seguir um plano.

Dentro do Ágil, o *Scrum* é o framework mais popular. Ele divide o trabalho em *Sprints* (iterações de 2-4 semanas). No início de cada Sprint, o time escolhe itens do *Product Backlog* (lista de tarefas priorizada) para executar. Todo dia, uma reunião rápida de 15min (*Daily Scrum*) para sincronizar. No final da Sprint, entrega-se uma versão funcional do software e faz-se uma retrospectiva para melhorar.

- Como funciona: Time pequeno e auto-gerenciável, com Papéis claros (Product Owner, Scrum Master, Dev Team), Artefatos (Backlog, Sprint) e Cerimônias (Planning, Daily, Review, Retro).
- Exemplo prático: Desenvolver um app de delivery. A cada Sprint, entrega-se uma funcionalidade nova: cadastro de usuários, cardápio online, carrinho de compras, etc.
- Melhor para: Projetos com requisitos voláteis, que precisam de entrega rápida e adaptação (ex.: startups, produtos inovadores).
- Desvantagem: Pode virar uma "correria" se não for bem facilitado (Scrum Master faz falta!).

## Como Escolher?
- Cascata: Requisitos estáveis e bem entendidos.
- Prototipação: Requisitos incertos e necessidade de validação rápida.
- Espiral: Projetos críticos e cheios de riscos.
- RUP: Projetos grandes com necessidade de arquitetura sólida e documentação.
- Ágil/Scrum: Ambientes dinâmicos, com necessidade de velocidade e flexibilidade.

E aí, qual modelo combina mais com seu projeto? A chave é adaptar e misturar ideias às vezes! O importante é entregar valor de forma consistente. 🚀`,
        "dataCriacao": "2025-09-18T12:00:00",
        "categoria": "software",
        tags: ["modelos", "ágil", "scrum", "processo", "desenvolvimento"],
        "destaque": true,
        "tempoLeitura": "12 min",
        "imagem": "https://www.levty.com/blog/assets/post/diferencas-entre-metodologias-6581a07ae8bea1272c256c57/scrum-levty.webp"
    },
    {
        id: 4,
        titulo: "Carreira em TI: Como se Tornar um Desenvolvedor Full-Stack",
        resumo: "Um guia realista para planejar a carreira full-stack: habilidades técnicas, soft skills, portfólio e como buscar oportunidades.",
        conteudo: `A jornada para ser full-stack combina curiosidade técnica com hábitos de aprendizado constantes. Aqui organizo um roteiro prático: fundamentos (lógica, algoritmos, banco de dados), front-end (HTML, CSS, JS, frameworks) e back-end (linguagens, APIs, banco de dados). Mas a diferença está nas soft skills: comunicação, trabalho em equipe, revisão de código e responsabilidade com qualidade.

Exploro também como montar um portfólio relevante: projetos pequenos e bem documentados, foco nas entregas e em explicar decisões técnicas. Dicas para entrevistas técnicas, resolução de problemas ao vivo, e como transformar feedback em evolução. Menciono caminhos alternativos: especialização em backend, mobile ou devops, dependendo do seu gosto.

Por fim, falo sobre redes de suporte: comunidades, mentoria e cursos práticos. A sugestão final é simples: escolha um projeto que resolva um problema real e entregue-o do início ao fim — isso ensina mais do que qualquer checklist teórico.`,
        dataCriacao: "2024-03-01T16:45:00",
        categoria: "career",
        tags: ["carreira", "fullstack", "ti"],
        destaque: true,
        tempoLeitura: "12 min",
        imagem: "assets/images/career-path.jpg"
    },
    {
        id: 5,
        titulo: "CSS Grid vs Flexbox: Quando Usar Cada Um",
        resumo: "Comparação prática entre Grid e Flexbox com exemplos de layout responsivo e padrões de uso recomendados.",
        conteudo: `Grid e Flexbox são ferramentas complementares, não rivais. Flexbox resolve muito bem layouts em linha ou coluna (componentes, barras, cards), enquanto Grid brilha em layouts bidimensionais (grades complexas, áreas definidas). Aqui eu trago casos de uso claros: quando usar Flexbox para alinhar itens em uma barra de navegação; quando usar Grid para montar um layout de página com header, sidebar e conteúdo principal.

Incluo exemplos práticos de código, técnicas para responsividade (media queries, fr/auto/minmax) e como combinar os dois para obter flexibilidade máxima. Também discuto acessibilidade visual e ordem visual vs ordem DOM — importante para leitores de tela e SEO.

Conselho de estilo: prefira soluções simples, com componentes reutilizáveis, e teste em diversas resoluções. Como exercício, reconstruir um layout complexo usando Grid e depois refatorar partes com Flexbox para entender trade-offs.`,
        dataCriacao: "2024-02-28T11:20:00",
        categoria: "frontend",
        tags: ["css", "grid", "flexbox"],
        destaque: false,
        tempoLeitura: "9 min",
        imagem: "assets/images/css-grid-flexbox.jpg"
    },
    {
        id: 6,
        titulo: "Node.js: Construindo APIs Escaláveis e Confiáveis",
        resumo: "Princípios para projetar APIs eficientes com Node.js e Express, incluindo arquitetura, testes, segurança e deployment.",
        conteudo: `Node.js traz um modelo de I/O não bloqueante ideal para APIs de alta concorrência. Neste texto exploro arquitetura de serviços: separação de responsabilidades, uso de middleware no Express, e padrões para tratamento de erros e logs. Falo sobre gerenciamento de processos (PM2, clustering), estratégias de cache e otimização de consultas ao banco.

Incluo práticas essenciais de segurança: validação de entrada, proteção contra injection, rate limiting e headers seguros. Abordo testes unitários e de integração (Jest, Supertest) e pipelines de CI/CD que automatizam build, testes e deploy.

Finalizo com opções de deploy: containers Docker, orquestração básica e observability mínima (health checks, metrics). Como proposta prática: construir uma API com autenticação JWT, testes automatizados e deploy em container para entender o fluxo completo.`,
        dataCriacao: "2024-02-25T13:10:00",
        categoria: "backend",
        tags: ["nodejs", "express", "javascript"],
        destaque: false,
        tempoLeitura: "11 min",
        imagem: "assets/images/nodejs-api.jpg"
    },
    {
        id: 7,
        titulo: "Flutter: Desenvolvimento Cross-Platform na Prática",
        resumo: "Como pensar em widgets, estado e navegação no Flutter para criar apps nativos para iOS e Android com qualidade.",
        conteudo: `Flutter é poderoso porque unifica UI e lógica com widgets. Neste post detalho o ciclo de vida de widgets, a diferença entre Stateless e Stateful, e mostro como estruturar um app escalável: separação entre apresentação, estado e serviços. Apresento estratégias de gerenciamento de estado (Provider, Riverpod, Bloc) e quando escolher cada uma dependendo da complexidade do projeto.

Falo sobre navegação, rotas nomeadas, animações simples e integração com recursos nativos (câmera, sensores, plugins). Também discuto performance: evitar rebuilds desnecessários, usar const widgets, e profiling com o DevTools do Flutter. Cobro também testes: widget tests e integration tests para garantir que as partes críticas do app funcionem em diferentes dispositivos.

No final proponho um mini-projeto: construir um app de lista com persistência local, consumo de API e testes automáticos. É uma forma prática de colocar em jogo conceitos de arquitetura e qualidade.`,
        dataCriacao: "2024-03-05T09:15:00",
        categoria: "mobile",
        tags: ["flutter", "dart", "mobile"],
        destaque: false,
        tempoLeitura: "8 min",
        imagem: "assets/images/flutter-app.jpg"
    }

];

export function getPostsByCategory(category) {
    if (category === 'all') return posts;
    return posts.filter(post => post.categoria === category);
}

export function getFeaturedPosts() {
    return posts.filter(post => post.destaque);
}

export function getPostById(id) {
    return posts.find(post => post.id === parseInt(id));
}
