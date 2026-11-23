const DADOS = {
  nome: "Gabriella",
  papel: ["desenvolvedora", "estudante & builder", "curiosa por tecnologia"],
  status: "disponivel para projetos",
  bio: "Eu me chamo Gabriella, estudo no Colégio Estadual José Pioli e faço o curso TDS (Técnico em Desenvolvimento de Sistemas). Gosto de fazer projetos em C# e JavaScript.",
  sobre: {
    paragrafo1: "Comecei no desenvolvimento de sistemas através do curso técnico no colégio, movida pela vontade de unir tecnologia e design. O que mais gosto de fazer quando programo é trabalhar no Front-end e na Experiência do Usuário (UX), transformando código em interfaces simples, intuitivas e agradáveis de navegar.",
    paragrafo2: "Busco oportunidades de estágio e novos projetos para ganhar mais experiência na área.",
    timeline: [
      { data: "2024", texto: "Início dos estudos no curso técnico (TDS), focando na base de desenvolvimento e lógica de programação." },
      { data: "2024", texto: "Desenvolvimento do meu primeiro projeto prático na web: um site completo para uma barbearia." },
      { data: "2025", texto: "Criação do projeto Alura Plus, voltado para a venda de assinaturas mensais." },
      { data: "2025", texto: "Desenvolvimento do site e sistema de agendamento para uma clínica de quiropraxia." },
      { data: "2026", texto: "Criação da loja virtual Celestial, um e-commerce focado na venda de fones de ouvido." },
      { data: "2026", texto: "Desenvolvimento de um site para hamburgueria, aplicando novos conceitos de front-end." },
      { data: "2026", texto: "Portfólio reunindo os projetos desenvolvidos ao longo do curso técnico." },
    ],
  },
  curriculoUrl: "curriculo_gabii.pdf",
  email: "gabriella.500.ribeiro@gmail.com",
  redes: [
    { nome: "Github", url: "https://github.com" },
    { nome: "Linkedin", url: "https://linkedin.com" },
    { nome: "Instagram", url: "https://instagram.com" },
  ],
  projetos: [
    {
      versao: "V1.0",
      titulo: "Loja fone",
      data: "14/12/26",
      descricao: "Loja virtual de fones de ouvido",
      tags: ["HTML", "CSS", "Javascript"],
      imagem: "fone.png",
      LinkDemo: "https://loja-fone-nine.vercel.app/",
      LinkRepo: "https://github.com/gabi30gabri0/loja-fone",
    },
    {
      versao: "V2.0",
      titulo: "Quiropraxia",
      data: "15/10/2025",
      descricao: "Site de uma clinica de quiropraxia",
      tags: ["HTML", "CSS", "Javascript"],
      imagem: "quiropraxia.png",
      LinkDemo: "https://quiropraxia-black.vercel.app/",
      LinkRepo: "https://github.com/gabi30gabri0/Quiropraxia",
    },
    {
      versao: "V3.0",
      titulo: "Alura Plus",
      data: "15/10/2025",
      descricao: "Alura Plus preços e catalogos",
      tags: ["HTML", "CSS", "Javascript"],
      imagem: "alura.png",
      LinkDemo: "https://alura-plus-alpha-woad.vercel.app/",
      LinkRepo: "https://github.com/gabi30gabri0/Alura-plus-",
    },
    {
      versao: "V4.0",
      titulo: "Quiz biblico",
      data: "25/03/2025",
      descricao: "Site de quiz biblico",
      tags: ["HTML", "CSS", "PHP"],
      imagem: "quiz.png",
      LinkDemo: "https://gabi30gabri0githubio.vercel.app/",
      LinkRepo: "https://vercel.com/gabriellas-projects-f76364e6/gabi30gabri0.github.io",
    },
    {
      versao: "V5.0",
      titulo: "Barbearia",
      data: "25/03/2024",
      descricao: "Site de uma barbearia",
      tags: ["HTML", "CSS",],
      imagem: "barbearia.png",
      LinkDemo: "https://barbearia-79mh.vercel.app/",
      LinkRepo: "https://github.com/gabi30gabri0/barbearia",
    },
  ],
  skills: [
    { categoria: "Front-End", itens: ["HTML", "CSS", "JavaScript"] },
    { categoria: "Back-End", itens: ["Php", "C#", "Python"] },
    { categoria: "Dados", itens: ["PostgreSQL", "MySQL"] },
    {
      categoria: "Ferramentas",
      itens: ["Git", "GitHub", "Visual Studio", "Vercel", "Docker", "DBeaver", "VS Code"],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  renderConteudo();
  iniciarTema();
  iniciarMenuMobile();
  iniciarTypingEfeito();
  iniciarFiltrosDeProjetos();
  iniciarCopiarEmail();
  iniciarBotaoTopo();
  iniciarLogAnimado();
});

function setText(idOuClasse, texto) {
  const elemento = document.getElementById(idOuClasse) || document.querySelector(`.${idOuClasse}`);
  if (elemento) elemento.textContent = texto;
}

function renderConteudo() {
  setText("nay-nome", DADOS.nome);
  setText("destaque-nome", DADOS.nome);
  setText("texto-status", DADOS.status);
  setText("destaque-bio", DADOS.bio);
  setText("rodape-nome", DADOS.nome);
  setText("rodape-ano", new Date().getFullYear());
  document.title = `${DADOS.nome} - Portfolio`;

  setText("sobre-paragrafo-1", DADOS.sobre.paragrafo1);
  setText("sobre-paragrafo-2", DADOS.sobre.paragrafo2);

  const cv = document.getElementById("contato-curriculo");
  if (cv) cv.href = DADOS.curriculoUrl;

  const tl = document.getElementById("sobre-linha-tempo");
  if (tl) {
    tl.innerHTML = DADOS.sobre.timeline
      .map(
        (item) => `
        <li>
          <span class="linha-data">${item.data}</span>
          <span class="linha-texto">${item.texto}</span>
        </li>`
      )
      .join("");
  }

  const socialsHtml = DADOS.redes
    .map(
      (r) => `
      <li>
        <a href="${r.url}" target="_blank" rel="noopener">${r.nome}</a>
      </li>`
    )
    .join("");

  ["destaque-rede", "contato-rede", "destaque-redes", "contato-redes"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = socialsHtml;
  });

  const timeline = document.getElementById("projetos-linha-tempo");
  if (timeline) {
    timeline.innerHTML = DADOS.projetos
      .filter((p) => p.titulo.trim() !== "")
      .map(
        (p) => `
        <article class="projeto" data-tags="${p.tags.join(",").toLowerCase()}">
          <div class="projeto__versao">${p.versao}</div>
          <div class="projeto__info">
            <h3 class="projeto__titulo">${p.titulo}</h3>
            <p class="projeto__meta">${p.data}</p>
            <p class="projeto__descricao">${p.descricao}</p>
            <div class="projeto__tags">
              ${p.tags.map((t) => `<span class="etiqueta">${t}</span>`).join("")}
            </div>
            <div class="projeto__links">
              ${p.LinkDemo ? `<a href="${p.LinkDemo}" target="_blank" rel="noopener">Ver demo -> </a>` : ""}
              ${p.LinkRepo ? `<a href="${p.LinkRepo}" target="_blank" rel="noopener">Ver Código -> </a>` : ""}
            </div>
          </div>
          <div class="projeto__miniatura">
            ${p.imagem ? `<img src="${p.imagem}" alt="Captura de tela de ${p.titulo}">` : `<span>screenshot do projeto</span>`}
          </div>
        </article>`
      )
      .join("");
  }

  const tags = new Set();
  DADOS.projetos.forEach((p) => {
    if (p.titulo.trim() !== "") {
      p.tags.forEach((t) => tags.add(t));
    }
  });

  const filters = document.getElementById("projetos-filtros");
  if (filters) {
    filters.innerHTML =
      `<button class="filtro-botao esta-ativo" data-filter="todos">todos</button>` +
      [...tags]
        .map((t) => `<button class="filtro-botao" data-filter="${t.toLowerCase()}">${t}</button>`)
        .join("");
  }

  const skillsWrap = document.getElementById("habilidades-grupos");
  if (skillsWrap) {
    skillsWrap.innerHTML = DADOS.skills
      .map(
        (g) => `
        <div class="habilidade-grupo">
          <h3>${g.categoria}</h3>
          <div class="habilidade-grupo__tags">
            ${g.itens.map((i) => `<span class="habilidade-etiqueta">${i}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");
  }
}

function iniciarTema() {
  const btn = document.getElementById("alternar-tema");
  const salvo = localStorage.getItem("portfolio-theme");
  if (salvo) document.documentElement.setAttribute("data-theme", salvo);
  if (!btn) return;

  btn.addEventListener("click", () => {
    const atual = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const novo = atual === "light" ? "dark" : "light";

    if (novo === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("portfolio-theme", novo);
  });
}

function iniciarMenuMobile() {
  const burger = document.getElementById("menu-hamburguer");
  const links = document.getElementById("menu-links");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const aberto = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!aberto));
    links.classList.toggle("esta-aberto");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      links.classList.remove("esta-aberto");
    });
  });
}

function iniciarTypingEfeito() {
  const el = document.getElementById("texto-cargo");
  if (!el || !DADOS.papel.length) return;

  const frases = DADOS.papel;
  let fraseIdx = 0,
    charIdx = 0,
    apagando = false;

  function tick() {
    const frase = frases[fraseIdx];
    if (!apagando) {
      el.textContent = frase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === frase.length) {
        apagando = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      el.textContent = frase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        apagando = false;
        fraseIdx = (fraseIdx + 1) % frases.length;
      }
    }
    setTimeout(tick, apagando ? 35 : 65);
  }
  tick();
}

function iniciarFiltrosDeProjetos() {
  const chips = document.querySelectorAll(".filtro-botao");
  const projetos = document.querySelectorAll(".projeto");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("esta-ativo"));
      chip.classList.add("esta-ativo");

      const filtro = chip.dataset.filter;
      projetos.forEach((p) => {
        const tags = p.dataset.tags.split(",");
        const mostra = filtro === "todos" || tags.includes(filtro);
        p.classList.toggle("esta-oculto", !mostra);
      });
    });
  });
}

function iniciarCopiarEmail() {
  const btn = document.getElementById("copiar-email");
  const label = document.getElementById("copiar-email-texto");
  if (!btn || !label) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(DADOS.email);
      label.textContent = "E-mail copiado!";
    } catch (e) {
      label.textContent = DADOS.email;
    }
    setTimeout(() => (label.textContent = "Copiar e-mail"), 2200);
  });
}

function iniciarBotaoTopo() {
  const btn = document.getElementById("voltar-topo");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function iniciarLogAnimado() {
  const projetosValidos = DADOS.projetos.filter((p) => p.titulo.trim() !== "");
  const linhas = projetosValidos
    .slice(-3)
    .map((p) => `> deploy ${p.titulo.toLowerCase().replace(/\s+/g, "-")} ${p.versao} ok`);

  const ids = ["linha-log-1", "linha-log-2", "linha-log-3"];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el || !linhas[i]) return;
    setTimeout(() => {
      el.textContent = linhas[i];
    }, 900 + i * 450);
  });
}