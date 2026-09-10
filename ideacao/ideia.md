# Ideação — Tech For Change

**Tema do desafio:** Potencializando o Ser Humano com IA  
**Nome provisório da ideia:** Just Move (Just Dance para fisioterapia / movimento)

---

## 1. Problema

Fisioterapia e exercícios terapêuticos costumam ser pouco engajadores. Pessoas abandonam a rotina, fazem movimentos errados sem feedback e perdem aderência ao tratamento ou à prática de bem-estar.

**Dor central:** falta de feedback em tempo real + falta de motivação para manter o movimento correto.

---

## 2. Proposta (em uma frase)

Usar IA de reconhecimento de movimentos (via câmera do celular) para gamificar fisioterapia e exercícios, dando feedback em tempo real e tornando a prática mais divertida e consistente.

**Analogia:** Just Dance, mas para fisioterapia / movimento terapêutico e bem-estar.

---

## 3. Quem potencializamos? (ser humano)

| Público | O que potencializamos |
|---------|------------------------|
| Pessoas em fisioterapia / reabilitação | Aderência, execução correta, progresso |
| Pessoas que se exercitam e querem qualidade de vida | Consistência, correção de postura/movimento, engajamento |

> Decisão aberta: focar em **reabilitação (fisio)** ou em **bem-estar / exercício geral**? Isso muda o posicionamento e a validação.

---

## 4. Critérios de avaliação (regulamento 6.2.5)

A seleção dos grupos obedecerá aos critérios abaixo. Usar esta seção como checklist do pitch e do deck.

### 6.2.5.1. Alinhamento com o tema *"Potencializando o Ser Humano com IA"*

| Pergunta do critério | Nossa resposta atual |
|----------------------|----------------------|
| Como a IA potencializa o ser humano? | Feedback de movimento em tempo real + gamificação → mais aderência e melhor execução |
| Em que área? | Saúde e bem-estar |
| Qual ser humano? | Pessoas em fisio / quem se exercita e quer qualidade de vida |

**Status:** alinhado com o tema. Falta afunilar o público-alvo.

---

### 6.2.5.2. Viabilidade técnica e mercadológica

**Formato do produto (decisão aberta):**
- [ ] App nativo — risco: barreira de download
- [ ] Site / PWA (câmera no browser) — menor fricção
- [ ] Integração com câmera do celular (comum aos dois)

**Viabilidade técnica — o que validar:**
1. Existe modelo já treinado de pose/movimento? (ex.: MediaPipe Pose, MoveNet)
2. Existe banco / dataset de movimentos de fisio?
3. Quais movimentos priorizar no MVP? (poucos, os mais comuns)
4. Dá para rodar no celular (on-device) ou precisa de servidor?

**Viabilidade mercadológica — hipóteses de monetização:**
- Publicidade / anúncios
- Assinatura para acesso ao conteúdo (planos de exercício / protocolos)

**Status:** hipótese técnica existe; falta prova de que dá para fazer com qualidade mínima no prazo.

---

### 6.2.5.3. Sustentabilidade financeira e operacional

Depende do modelo de negócio escolhido.

**Custos a considerar:**
- Manutenção / inferência do modelo de reconhecimento
- Hospedagem (se o modelo for na nuvem)
- Manutenção do site/app
- Criação e atualização de conteúdo (sequências de movimentos)

**Status:** esboço de custos existe; falta um modelo financeiro simples (quem paga, quanto custa manter).

---

### 6.2.5.4. Originalidade e grau de inovação

- Há apps de postura, yoga com câmera, fisio digital — precisamos mapear concorrentes.
- Diferencial possível: gamificação forte (Just Dance) + foco em fisio/bem-estar + feedback de IA.

**Status:** originalidade ainda não comprovada. Ação: pesquisa de soluções similares.

---

### 6.2.5.5. Evidências de validação junto a potenciais usuários ou clientes

- Ainda não validado com público real.
- Precisamos conversar / pesquisar com potenciais usuários (pacientes, fisioterapeutas, praticantes de exercício).

**Status:** critério crítico e ainda em aberto. Sem evidência, a banca/comissão fica fraca.

---

## 5. Próximos passos da ideação (async)

Montar canvas / matrizes para validar em paralelo:

1. **Matriz CSD** — Certezas / Suposições / Dúvidas (alinhamento do grupo)
2. **Mapa de empatia** — dores e motivações do usuário escolhido
3. **Benchmark** — 3–5 soluções parecidas (o que já existe)
4. **MVP técnico** — 1–3 movimentos reconhecíveis com modelo existente
5. **Validação** — entrevistas ou formulário rápido com o público

---

## 6. Resumo para o grupo (elevator)

> **Just Move** usa IA na câmera do celular para reconhecer movimentos e gamificar a fisioterapia/exercício — como um Just Dance terapêutico — potencializando aderência e qualidade de vida em saúde e bem-estar.
