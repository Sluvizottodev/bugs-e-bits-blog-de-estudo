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
        destaque: false,
        tempoLeitura: "7 min",
        imagem: "assets/images/react-intro.jpg"
    },
    {
        id: 12,
        titulo: "SOLID: Os 5 Princípios Essenciais da Programação Orientada a Objetos",
        resumo: "Entenda os 5 princípios SOLID (SRP, OCP, LSP, ISP e DIP) e como eles ajudam a criar sistemas mais flexíveis, escaláveis e fáceis de manter.",
        conteudo: `Os princípios **SOLID** foram popularizados por Robert C. Martin (Uncle Bob) e são um guia prático para escrever código orientado a objetos mais limpo e sustentável. Eles não são regras fixas, mas boas práticas que evitam acoplamento excessivo e aumentam a reutilização de código.

# 1. Single Responsibility Principle (SRP)
Cada classe deve ter apenas **uma responsabilidade**.  
Isso reduz a complexidade, facilita testes e manutenção.

Exemplo:
Uma classe que manipula dados **e** gera relatórios viola o SRP. O ideal é separar: uma classe para persistência e outra para relatórios.

---

# 2. Open-Closed Principle (OCP)
**Aberto para extensão, fechado para modificação.**  
Você deve adicionar novos comportamentos sem alterar código existente, apenas estendendo.

Exemplo:
Evite \`if/else\` para cada tipo de cliente. Use polimorfismo com interfaces, criando uma classe de desconto por tipo de cliente.

---

# 3. Liskov Substitution Principle (LSP)
Objetos de subclasses devem poder substituir objetos da superclasse **sem quebrar o código**.  
Se a subclasse não mantém o contrato da classe pai, você está violando o LSP.

Analogia:  
Um \`Pinguim\` não deveria herdar de \`Pato\` se o método \`voar()\` existe. Pinguins não voam, logo a substituição quebra o sistema.

---

# 4. Interface Segregation Principle (ISP)
É melhor ter **interfaces pequenas e específicas** do que uma única interface genérica com métodos que nem todos usarão.

➡️ Exemplo:
Uma interface \`IPrinter\` com \`print()\`, \`scan()\` e \`fax()\` força quem só imprime a implementar métodos inúteis. Melhor dividir em \`IPrint\`, \`IScan\`, \`IFax\`.

---

# 5. Dependency Inversion Principle (DIP)
Módulos de alto nível não devem depender de módulos de baixo nível, mas de **abstrações**.  
Detalhes devem depender de abstrações, não o contrário.

Exemplo:
Em vez de \`NotificationManager\` depender diretamente de \`EmailService\`, ele depende da interface \`MessageService\`. Assim você pode trocar email por SMS sem alterar a regra de negócio.

---

🎯 **Por que aplicar SOLID?**
- Código mais fácil de **manter**
- Maior **reuso** de componentes
- Redução de **acoplamento**
- Facilita **testes unitários**
- Evolui o sistema sem quebrar o que já funciona

**Conclusão:**  
Adotar SOLID não é burocracia. É uma forma de manter seu código vivo, adaptável e pronto para crescer com segurança e qualidade.`,
        dataCriacao: "2025-09-21T22:00:00",
        categoria: "software",
        tags: ["solid", "clean code", "oop", "arquitetura"],
        destaque: true,
        tempoLeitura: "5 min",
        imagem: "https://media.licdn.com/dms/image/v2/C4E12AQF-JdyljjT5hQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624732062442?e=2147483647&v=beta&t=q9_rfu_ozrb1P854-G7cab4tQeS-9oSQ2Yyx4drUBdQ"
    },
    {
        id: 3,
        titulo: "Modelos de Software: Do Cascata ao Ágil, Qual Usar?",
        resumo: "Um guia pelos principais modelos de processo de software: Cascata, Prototipação, Espiral, RUP e Ágil. Explicações práticas, comparações e dicas para escolher o melhor para seu projeto.",
        conteudo: `Se você já se perguntou como os times de desenvolvimento organizam seu trabalho para construir software, a resposta está nos **modelos de processo**. Eles são como receitas de bolo: cada um tem seu jeito de misturar os ingredientes (requisitos, código, testes) e assar (entregar) o produto final. Vamos mergulhar nos principais!  

# 1. 💧 Modelo Cascata (Waterfall)
O clássico! Linear e sequencial: primeiro requisitos, depois design, codificação, testes e só então entrega. Não volta atrás.  
- **Como funciona:** Parece uma escada: você só sobe um degrau depois de terminar o anterior.  
- **Exemplo prático:** Construir um prédio. Não se levanta paredes sem a planta aprovada.  
- **Melhor para:** Projetos com requisitos muito claros e estáveis (ex.: sistema de contabilidade).  
- **Desvantagem:** Mudanças no meio do processo geram retrabalho caro.  

---

# 2. 🎨 Prototipação
A ideia é criar um rascunho rápido do software para validar ideias antes do desenvolvimento completo.  
- **Como funciona:** Ciclos rápidos de feedback: mostra-se uma versão simples, o cliente comenta e você refina.  
- **Exemplo prático:** Desenhar a interface de um app em papel ou ferramenta de design antes de codificar.  
- **Melhor para:** Quando não há clareza sobre como o sistema deve ser.  
- **Cuidado:** O cliente pode confundir protótipo com versão final.  

---

# 3. 🔄 Modelo Espiral
Iterativo e focado em riscos. Cada volta do “caracol” passa por: planejamento, análise de riscos, desenvolvimento e avaliação.  
- **Como funciona:** A cada ciclo, entrega-se uma versão mais completa, sempre avaliando riscos (técnicos, prazo, custo).  
- **Exemplo prático:** Carro elétrico autônomo. Primeiro anda em linha reta (ciclo 1), depois detecta obstáculos (ciclo 2), depois navega em cidade (ciclo 3)...  
- **Melhor para:** Projetos grandes, complexos e de alto risco (ex.: software aeroespacial).  
- **Desvantagem:** Complexo de gerenciar, exige muita experiência.  

---

# 4. 🧩 RUP (Rational Unified Process)
Iterativo, mas estruturado em fases (Concepção, Elaboração, Construção, Transição) e disciplinas (Requisitos, Projeto, etc.). É como ter um mapa detalhado para a viagem.  
- **Como funciona:** Baseado em casos de uso e arquitetura. Cada iteração percorre várias disciplinas.  
- **Exemplo prático:** Sistema ERP para uma grande empresa, que exige arquitetura robusta desde o início.  
- **Melhor para:** Projetos grandes, com alta necessidade de qualidade e documentação.  
- **Desvantagem:** Pode ser pesado e burocrático para times pequenos.  

---

# 5. ⚡ Ágil (e Scrum)
A estrela do século XXI! O **Manifesto Ágil** valoriza:  
- Indivíduos e interações sobre processos e ferramentas.  
- Software em funcionamento sobre documentação extensa.  
- Colaboração com o cliente sobre negociação de contratos.  
- Responder a mudanças sobre seguir um plano.  

O *Scrum* é o framework mais popular:  
- Trabalho dividido em **Sprints** (2-4 semanas).  
- No início: seleção do **Product Backlog** (lista priorizada).  
- Todo dia: reunião rápida de 15min (**Daily Scrum**).  
- No fim: entrega de versão funcional + retrospectiva.  

- **Como funciona:** Times pequenos, auto-organizados, com papéis (Product Owner, Scrum Master, Dev Team), artefatos (Backlog, Sprint) e cerimônias (Planning, Daily, Review, Retro).  
- **Exemplo prático:** App de delivery. Cada Sprint entrega algo novo: cadastro de usuários, cardápio, carrinho, pagamento...  
- **Melhor para:** Startups, produtos inovadores e requisitos voláteis.  
- **Desvantagem:** Sem boa facilitação, pode virar correria.  

---

## Como Escolher?
- **Cascata:** Requisitos estáveis e previsíveis.  
- **Prototipação:** Quando há incerteza e necessidade de validação.  
- **Espiral:** Projetos críticos e cheios de riscos.  
- **RUP:** Grandes projetos, com arquitetura e documentação fortes.  
- **Ágil/Scrum:** Ambientes dinâmicos, que exigem velocidade e adaptação.  

🚀 **Conclusão:** Não existe modelo único. O segredo está em adaptar e, muitas vezes, misturar ideias. O importante é entregar valor de forma consistente.`,
        dataCriacao: "2025-09-18T12:00:00",
        categoria: "software",
        tags: ["modelos", "ágil", "scrum", "processo", "desenvolvimento"],
        destaque: true,
        tempoLeitura: "8 min",
        imagem: "https://www.levty.com/blog/assets/post/diferencas-entre-metodologias-6581a07ae8bea1272c256c57/scrum-levty.webp"
    },
    {
        "id": 4,
        "titulo": "Carreira em TI: Conexões que impulsionam",
        "resumo": "Mais do que habilidades técnicas, participar de comunidades e eventos pode abrir portas e acelerar sua carreira em tecnologia.",
        "conteudo": "Na área de TI, não é só sobre saber programar bem ou ter um portfólio cheio de projetos. As conexões que você cria também fazem diferença. Participar de eventos, meetups e comunidades online coloca você em contato direto com pessoas que já estão vivendo aquilo que você busca.\n\nNetworking em TI não é apenas trocar cartões ou adicionar no LinkedIn. É aprender com histórias reais, descobrir ferramentas novas, entender tendências do mercado e até encontrar oportunidades de trabalho. Muitas vezes, aquela conversa rápida no café de um evento pode virar uma parceria ou até o convite para uma entrevista.\n\nEstar presente em comunidades também ajuda a evoluir como profissional. Você pode tirar dúvidas, compartilhar o que aprendeu e até contribuir com projetos open source. Esse tipo de envolvimento mostra iniciativa e colaboração, duas qualidades muito valorizadas pelas empresas.\n\nO caminho é simples: escolha um evento ou meetup da sua área, participe com atenção e esteja aberto a conversar. Leve perguntas, compartilhe suas experiências e não tenha medo de interagir. No fim das contas, crescer em TI é tanto sobre código quanto sobre pessoas.",
        "dataCriacao": "2024-03-01T16:45:00",
        "categoria": "career",
        "tags": ["carreira", "networking", "comunidade", "eventos"],
        "destaque": false,
        "tempoLeitura": "10 min",
        "imagem": "assets/images/career-networking.jpg"
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
        "id": 6,
        "titulo": "Node.js e Express: Criando APIs que fazem sentido",
        "resumo": "O que é uma API, como o Express ajuda a organizar tudo e por que o Postman é um ótimo parceiro nos testes.",
        "conteudo": "Quando a gente fala de API, na prática estamos falando de uma ponte: de um lado temos o cliente (pode ser um app, um site, até outro serviço), e do outro lado temos os dados. O Node.js brilha nesse cenário porque trabalha de forma assíncrona e não fica travado esperando uma resposta. Isso faz com que ele aguente muitas requisições ao mesmo tempo.\n\nO Express entra como um facilitador. Ele ajuda a organizar as rotas (por exemplo: /livros, /autores, /editoras), tratar requisições e dar respostas estruturadas em JSON. Com ele dá para usar middlewares que cuidam de validações, autenticação ou até logs sem poluir o código principal.\n\nNo curso da Alura, a API que criamos é de uma livraria. Parece simples, mas já dá para entender bem como o mundo real vira código. A gente define modelos (como vai ser um livro no banco de dados), cria controladores (as funções que realmente fazem a lógica) e conecta tudo ao MongoDB. O Mongo é um banco NoSQL que guarda os dados em formato parecido com JSON, o que combina muito bem com o Node.\n\nExemplo de uma estrutura mais organizada com Express:\n\n```js\n// server.js\nimport express from 'express';\nimport livrosRoutes from './routes/livrosRoutes.js';\n\nconst app = express();\napp.use(express.json());\n\napp.use('/livros', livrosRoutes);\n\napp.listen(3000, () => {\n  console.log('API rodando em http://localhost:3000');\n});\n```\n\n```js\n// routes/livrosRoutes.js\nimport express from 'express';\nimport { listarLivros, criarLivro } from '../controllers/livrosController.js';\n\nconst router = express.Router();\n\nrouter.get('/', listarLivros);\nrouter.post('/', criarLivro);\n\nexport default router;\n```\n\n```js\n// controllers/livrosController.js\nexport const listarLivros = (req, res) => {\n  res.status(200).json({ mensagem: 'Lista de livros' });\n};\n\nexport const criarLivro = (req, res) => {\n  const novoLivro = req.body;\n  res.status(201).json({ mensagem: 'Livro criado com sucesso', livro: novoLivro });\n};\n```\n\nE claro, nada de criar uma API sem testar. O Postman é ótimo para simular requisições, verificar respostas e até criar coleções de testes automáticos. Ele é quase um companheiro obrigatório nesse processo.\n\nO legal é perceber que por trás de cada rota tem uma estrutura organizada: rotas recebem a requisição, controladores processam, modelos interagem com o banco e a resposta volta para o cliente. É como montar uma linha de produção, cada peça tem sua função.\n\nSe você está começando agora, uma dica prática é: crie uma API simples, tipo de cadastro de tarefas ou de filmes favoritos. Use o Express para organizar as rotas, conecte no MongoDB e brinque bastante com o Postman. Aos poucos dá para ir adicionando camadas como autenticação JWT, paginação de resultados e testes automatizados. É assim que as APIs que a gente usa no dia a dia são construídas.",
        "dataCriacao": "2025-09-28T11:00:00",
        "categoria": "backend",
        "tags": ["nodejs", "express", "mongodb", "rest", "postman"],
        "destaque": true,
        "tempoLeitura": "12 min",
        "imagem": "https://miro.medium.com/v2/resize:fit:1400/1*qniaB3ztqtM-C3WxD3I4Tg.png"
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
