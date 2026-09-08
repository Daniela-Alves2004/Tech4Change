(() => {
  const REPO = "Daniela-Alves2004/Tech4Change";
  const BRANCH = "main";
  const SKIP = new Set(["readme.md"]);

  const nav = document.getElementById("nav");
  const content = document.getElementById("content");

  const titleFromPath = (path) => {
    const name = path.split("/").pop().replace(/\.(md|txt)$/i, "");
    return name.replace(/\s+/g, " ").trim();
  };

  const groupFromPath = (path) => {
    const parts = path.split("/");
    return parts.length > 1 ? parts.slice(0, -1).join("/") : "raiz";
  };

  const rawUrl = (path) =>
    `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${path
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`;

  const pagesUrl = (path) =>
    path
      .split("/")
      .map(encodeURIComponent)
      .join("/");

  const rewriteRelativeUrls = (html, filePath) => {
    const dir = filePath.includes("/")
      ? filePath.slice(0, filePath.lastIndexOf("/") + 1)
      : "";
    const base = new URL("./" + pagesUrl(dir), window.location.href);
    const doc = new DOMParser().parseFromString(html, "text/html");

    doc.querySelectorAll("img[src]").forEach((el) => {
      const value = el.getAttribute("src");
      if (!value || /^(https?:|data:)/i.test(value)) return;
      el.setAttribute("src", new URL(value, base).href);
    });

    doc.querySelectorAll("a[href]").forEach((el) => {
      const value = el.getAttribute("href");
      if (!value) return;

      if (/^(https?:|mailto:)/i.test(value)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        return;
      }

      if (/^(data:|#)/i.test(value)) return;
      el.setAttribute("href", new URL(value, base).href);
    });

    return doc.body.innerHTML;
  };

  const renderMarkdown = (text, path) => {
    const parsed = window.marked.parse(text, { breaks: true });
    return rewriteRelativeUrls(parsed, path);
  };

  const renderPlain = (text) => {
    const pre = document.createElement("pre");
    pre.textContent = text;
    return pre.outerHTML;
  };

  const setActive = (path) => {
    nav.querySelectorAll(".nav-item").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.path === path);
    });
  };

  const openFile = async (path) => {
    setActive(path);
    content.innerHTML = `<p class="hint">Abrindo ${titleFromPath(path)}…</p>`;
    history.replaceState(null, "", `#${encodeURIComponent(path)}`);

    try {
      const res = await fetch(rawUrl(path));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const body = /\.md$/i.test(path)
        ? renderMarkdown(text, path)
        : renderPlain(text);

      content.innerHTML = `
        <p class="meta">${path}</p>
        ${body}
      `;
      content.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      content.innerHTML = `<p class="hint">Não foi possível abrir este arquivo. (${err.message})</p>`;
    }
  };

  const buildNav = (files) => {
    nav.innerHTML = "";
    const groups = new Map();

    files.forEach((path) => {
      const group = groupFromPath(path);
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(path);
    });

    [...groups.entries()].forEach(([group, paths]) => {
      const wrap = document.createElement("div");
      wrap.className = "nav-group";

      const title = document.createElement("p");
      title.className = "nav-group-title";
      title.textContent = group;
      wrap.appendChild(title);

      paths.forEach((path) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "nav-item";
        btn.dataset.path = path;
        btn.textContent = titleFromPath(path);
        btn.addEventListener("click", () => openFile(path));
        wrap.appendChild(btn);
      });

      nav.appendChild(wrap);
    });
  };

  const listContentFiles = async () => {
    const url = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();

    return (data.tree || [])
      .filter((item) => item.type === "blob")
      .map((item) => item.path)
      .filter((path) => /\.(md|txt)$/i.test(path))
      .filter((path) => !SKIP.has(path.toLowerCase().split("/").pop()))
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
  };

  const boot = async () => {
    try {
      const files = await listContentFiles();
      if (!files.length) {
        nav.innerHTML = `<p class="nav-status">Nenhum .md ou .txt encontrado.</p>`;
        return;
      }

      buildNav(files);

      const hashPath = decodeURIComponent((location.hash || "").slice(1));
      const initial = files.includes(hashPath) ? hashPath : files[0];
      openFile(initial);
    } catch (err) {
      nav.innerHTML = `<p class="nav-status">Erro ao listar arquivos. Confira se o repositório é público. (${err.message})</p>`;
    }
  };

  boot();
})();
