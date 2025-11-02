export const posts = [
    {
        id: 1,
        titulo: "Mini Dicionário do Vue.js: Dicas Rápidas para o Dia a Dia",
        resumo: "Um guia prático com termos e exemplos essenciais do Vue.js para quem está começando a desenvolver aplicações modernas.",
        conteudo: `Se você está estudando Vue.js para aplicar no estágio, ter um "mini dicionário" pode salvar sua vida quando bater aquela dúvida no meio do código. Aqui vão alguns termos e exemplos essenciais:

**1. v-model**  
Liga automaticamente inputs ao estado.  
\`\`\`vue
<input v-model="nome" placeholder="Digite seu nome" />
<p>Olá, {{ nome }}!</p>
\`\`\`

**2. v-bind (:)**  
Usa dados dinâmicos nos atributos HTML.  

**3. v-if / v-else / v-show**  
Renderiza ou esconde elementos condicionalmente.  
\`\`\`vue
<p v-if="logado">Bem-vindo de volta!</p>
<p v-else>Faça login</p>
\`\`\`

**4. v-for**  
Renderiza listas de forma simples.  
\`\`\`vue
<li v-for="item in itens" :key="item.id">{{ item.nome }}</li>
\`\`\`

**5. Computed Properties**  
Propriedades que calculam valores dinamicamente.  
\`\`\`js
computed: {
  nomeCompleto() {
    return this.nome + " " + this.sobrenome
  }
}
\`\`\`

**6. Methods**  
Funções que você pode chamar dentro da template.  
\`\`\`js
methods: {
  saudacao() {
    alert("Olá " + this.nome)
  }
}
\`\`\`

**7. Lifecycle Hooks**  
Momentos da vida do componente, como o \`mounted\`.  
\`\`\`js
mounted() {
  console.log("Componente carregado!")
}
\`\`\`

Dica final: o Vue Devtools é seu melhor amigo. Com ele você inspeciona estado, props e eventos em tempo real.`,
        dataCriacao: "2024-03-15T10:30:00",
        categoria: "frontend",
        tags: ["vuejs", "javascript", "frontend"],
        destaque: false,
        tempoLeitura: "8 min",
        imagem: "assets/images/vuejs-dictionary.jpg"
    },

    {
        id: 12,
        titulo: "SOLID: Os 5 Princípios Essenciais da Programação Orientada a Objetos",
        resumo: "Entenda os 5 princípios SOLID e como eles ajudam a criar sistemas mais flexíveis e fáceis de manter.",
        conteudo: `Os princípios **SOLID** foram popularizados por Robert C. Martin (Uncle Bob). Eles guiam o desenvolvimento para evitar acoplamento e facilitar evolução do código.

(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2025-09-21T22:00:00",
        categoria: "software",
        tags: ["solid", "clean code", "oop", "arquitetura"],
        destaque: true,
        tempoLeitura: "5 min",
        imagem: "https://media.licdn.com/dms/image/v2/C4E12AQF-JdyljjT5hQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624732062442"
    },

    {
        id: 3,
        titulo: "Modelos de Software: Do Cascata ao Ágil, Qual Usar?",
        resumo: "Guia pelos principais modelos: Cascata, Prototipação, Espiral, RUP e Ágil.",
        conteudo: `(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2025-09-18T12:00:00",
        categoria: "software",
        tags: ["modelos", "ágil", "scrum", "processo", "desenvolvimento"],
        destaque: true,
        tempoLeitura: "8 min",
        imagem: "https://www.levty.com/blog/assets/post/diferencas-entre-metodologias-6581a07ae8bea1272c256c57/scrum-levty.webp"
    },

    {
        id: 4,
        titulo: "Carreira em TI: Como Eventos e Comunidades Podem Impulsionar Sua Jornada",
        resumo: "Como eventos como TDC e Campus Party podem acelerar sua carreira.",
        conteudo: `(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2024-03-01T16:45:00",
        categoria: "career",
        tags: ["carreira", "networking", "comunidade", "eventos"],
        destaque: false,
        tempoLeitura: "8 min",
        imagem: "https://www.findup.com.br/wp-content/uploads/2024/02/Prancheta-2-1024x683.png"
    },

    {
        id: 5,
        titulo: "CSS Grid vs Flexbox: Quando Usar Cada Um",
        resumo: "Comparação prática com exemplos responsivos.",
        conteudo: `(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2024-02-28T11:20:00",
        categoria: "frontend",
        tags: ["css", "grid", "flexbox"],
        destaque: false,
        tempoLeitura: "9 min",
        imagem: "assets/images/css-grid-flexbox.jpg"
    },

    {
        id: 6,
        titulo: "Node.js e Express: Criando APIs que fazem sentido",
        resumo: "O que é uma API, como Express organiza tudo e por que o Postman é essencial.",
        conteudo: `(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2025-09-28T11:00:00",
        categoria: "backend",
        tags: ["nodejs", "express", "mongodb", "rest", "postman"],
        destaque: true,
        tempoLeitura: "12 min",
        imagem: "https://miro.medium.com/v2/resize:fit:1400/1*qniaB3ztqtM-C3WxD3I4Tg.png"
    },

    {
        id: 7,
        titulo: "Flutter: Desenvolvimento Cross-Platform na Prática",
        resumo: "Widgets, estado, navegação e boas práticas para apps nativos.",
        conteudo: `(... conteúdo mantido igual ao seu ...)`,
        dataCriacao: "2024-03-05T09:15:00",
        categoria: "mobile",
        tags: ["flutter", "dart", "mobile"],
        destaque: false,
        tempoLeitura: "8 min",
        imagem: "assets/images/flutter-app.jpg"
    },

{
    id: 9,
    titulo: "Tailwind CSS: Produtividade + Padrões Globais com Config",
    resumo: "Transforme o Tailwind em um mini design system usando o tailwind.config.js.",
    conteudo: `
### Tailwind CSS: de “várias classes na tag” a **um design system mais prático**

Quando desenvolvemos usando CSS convencional, um problema comum é o **caos visual**:

❌ estilos duplicados  
❌ cores diferentes para o mesmo elemento  
❌ arquivos CSS crescendo sem controle  

O Tailwind resolve isso com classes utilitárias, mas o **pulo do gato** está no arquivo:

> \`tailwind.config.js\` — onde você cria *padrões globais*.

---

## 🚀 Por que o Tailwind acelera o desenvolvimento?

- Estilização direto no componente (HTML, Vue, React)
- Não exige criar classes novas para cada botão
- Feedback visual imediato durante o desenvolvimento
- Facilita criação de componentes reutilizáveis

Exemplo simples:

\`\`\`html
<button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg">
  Salvar
</button>
\`\`\`

Sem arquivos CSS. Sem nomes de classe para inventar.

---

## 🔧 O poder do **tailwind.config.js**

É aqui que o Tailwind deixa de ser só um utilitário e vira um **mini design system**.

Você define nele:

- Paleta de cores da marca
- Fontes
- Espaçamentos (padding/margin)
- Border radius
- Breakpoints
- Suporte a light/dark mode


Exemplo real:

\`\`\`js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#C9217E",
        secondary: "#572884",
      },
      fontFamily: {
        app: ["Inter", "sans-serif"],
      },
      borderRadius: {
        smooth: "18px",
      }
    }
    [...]
  },
}
\`\`\`

E agora, no HTML:

\`\`\`html
<h1 class="text-primary font-app text-3xl font-bold">
  Bem-vindo!
</h1>
\`\`\`

➡️ Sem lembrar hexadecimal  
➡️ Sem criar classe nova  
➡️ Sem CSS extra

---

## 📦 Criando componentes reutilizáveis sem repetir classe

\`\`\`html
<button class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-smooth shadow">
  Confirmar
</button>
\`\`\`

Se amanhã o cliente muda a cor da marca, **você altera uma linha no config e tudo atualiza sozinho.**

---

## ✨ Funcionalidades menos conhecidas do config

### Breakpoints personalizados
\`\`\`js
screens: {
  mobile: "480px",
  tablet: "768px",
  desktop: "1280px",
},
\`\`\`

### Spacing scale personalizada
\`\`\`js
spacing: {
  sm: "3.25rem",
  md: "4.5rem",
  lg: "6rem",
}
\`\`\`



> Tailwind aumenta a velocidade.  
> **O config garante consistência.**

---

### 🔥 Conclusão

Tailwind não é “classes demais”.  
Ele é:

> **velocidade + padrão + escalabilidade**

Quando você domina o \`tailwind.config.js\`, você para de *apenas escrever estilos*  
e começa a construir um **design system de verdade** com menos burocracia.
`,
    dataCriacao: "2024-10-01T19:00:00",
    categoria: "frontend",
    tags: ["tailwind", "css", "frontend"],
    destaque: true,
    tempoLeitura: "6 min",
    imagem: "assets/images/tailwind-config.jpg"
}
]


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
