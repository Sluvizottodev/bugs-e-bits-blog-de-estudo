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
        id: 2,
        titulo: "Spring Boot: Criando APIs RESTful com Boas Práticas",
        resumo: "Passo a passo para construir APIs robustas com Spring Boot, cobrindo camadas, DTOs, testes e segurança básica.",
        conteudo: `Desenvolver APIs com Spring Boot é combinar produtividade com um ecossistema maduro. Aqui eu mostro uma arquitetura simples e eficaz: controller, service, repository e modelos DTO para separar entidade de contrato de API. Explico como mapear endpoints REST, validar entradas com Bean Validation e tratar exceções de forma centralizada.

Abordo também padrões importantes: DTOs e mapeamento (MapStruct), transações, paginação, e como organizar unit tests e integration tests com Spring Test e MockMvc. Há uma seção sobre segurança: autenticação básica com Spring Security, proteção de endpoints e boas práticas para não expor informações sensíveis.

Para entrega e observabilidade, falo brevemente sobre logs estruturados, health checks e como empacotar a aplicação para Docker. No fim tem um checklist de revisão antes de subir para produção: testes automatizados, análise de dependências, configuração de profiles e secrets.

Exercício proposto: construir uma API CRUD com testes de integração e configurar CI que roda os testes a cada PR. Isso consolida aprendizado e prepara para cenários reais de trabalho.`,
        dataCriacao: "2024-03-10T14:20:00",
        categoria: "backend",
        tags: ["java", "spring", "api"],
        destaque: true,
        tempoLeitura: "10 min",
        imagem: "assets/images/spring-boot-api.jpg"
    },
    {
        id: 3,
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
