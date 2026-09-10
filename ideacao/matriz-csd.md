# Matriz CSD — Just Move

**Projeto:** Just Move (Just Dance para fisio / movimento)  
**Tema:** Potencializando o Ser Humano com IA  
**Objetivo da matriz:** alinhar o grupo sobre o que já sabemos, o que só acreditamos e o que ainda precisa ser investigado.

---

## Como usar

| Coluna | Significado | Ação |
|--------|-------------|------|
| **C — Certezas** | Temos evidência ou é fato conhecido | Usar como base da proposta |
| **S — Suposições** | Acreditamos, mas ainda não validamos | Virar hipótese de pesquisa |
| **D — Dúvidas** | Não sabemos | Investigar (desk research, entrevista, teste técnico) |

Regra: tudo que estiver em **S** ou **D** precisa de um dono e uma forma de validar.

---

## Matriz

| C — Certezas | S — Suposições | D — Dúvidas |
|--------------|----------------|-------------|
| O tema exige IA potencializando o ser humano | Pessoas abandonam fisio/exercício por falta de motivação | O público principal é paciente de fisio ou praticante de bem-estar? |
| Saúde e bem-estar se encaixam no tema | Feedback em tempo real aumenta aderência | Fisioterapeutas aceitariam / recomendariam uma ferramenta assim? |
| Celulares modernos têm câmera boa o suficiente para capturar o corpo | Gamificação (estilo Just Dance) engaja mais que app “sério” de exercício | Quais movimentos são prioritários no MVP? |
| Já existem modelos de estimativa de pose (ex.: MediaPipe, MoveNet) | Usuário prefere site/PWA a baixar app | O reconhecimento funciona bem em casa (luz, ângulo, espaço)? |
| Há custo de hospedagem / manutenção se o modelo rodar na nuvem | Assinatura ou anúncios sustentam o produto | Dá para rodar on-device com qualidade aceitável? |
| Entrega do desafio pede pitch + deck + vídeo | Há espaço de mercado pouco explorado em “fisio gamificada com IA” | Quais soluções similares já existem e qual nosso diferencial real? |
| Sem validação com usuários o critério 6.2.5.5 fica fraco | Pacientes erram movimentos sem perceber quando treinam sozinhos | Quem paga: paciente, clínica, plano de saúde ou B2C direto? |
| | Pessoas pagariam por conteúdo/protocolos guiados | Qual o ticket aceitável (preço)? |
| | | Precisamos de dataset próprio de movimentos de fisio ou um modelo genérico basta? |
| | | Há restrição ética/regulatória (saúde) para posicionar como “fisioterapia”? |

---

## Detalhamento por coluna

### C — Certezas

1. O desafio avalia alinhamento com **"Potencializando o Ser Humano com IA"**.
2. A ideia usa **IA de reconhecimento de movimento** + **gamificação** na área de **saúde/bem-estar**.
3. Modelos de pose já existem no mercado / open source (não partimos do zero absoluto).
4. Câmera de celular é um canal acessível para o usuário final.
5. O critério de **evidências de validação** exige contato com potenciais usuários.

### S — Suposições (hipóteses a validar)

1. Falta de motivação e de feedback é a principal causa de abandono.
2. Formato gamificado aumenta adesão vs. apps tradicionais de exercício/fisio.
3. Canal web/PWA reduz fricção em relação a app nativo.
4. Monetização por assinatura e/ou ads é viável.
5. Há demanda real (pacientes e/ou fisios) para esse tipo de solução.
6. O diferencial “Just Dance terapêutico” é percebido como inovador.

### D — Dúvidas (investigar)

1. **Público:** fisio/reabilitação vs. bem-estar/exercício geral?
2. **Canal:** app, site ou PWA?
3. **Técnica:** on-device vs. nuvem? acurácia mínima aceitável?
4. **Conteúdo:** quais 1–3 movimentos no MVP?
5. **Mercado:** concorrentes e gaps?
6. **Negócio:** quem é o pagador e qual o modelo?
7. **Posicionamento:** podemos falar “fisioterapia” ou é mais seguro “exercício guiado / bem-estar”?
8. **Validação:** o que usuários dizem nas primeiras entrevistas?

---

## Plano rápido de investigação

| Item (S ou D) | Como validar | Prioridade |
|---------------|--------------|------------|
| Público-alvo | 5–8 entrevistas curtas (pacientes + fisios ou só um lado) | Alta |
| Abandono / motivação | Perguntas nas entrevistas + desk research | Alta |
| Soluções similares | Benchmark de 3–5 apps/sites | Alta |
| Viabilidade técnica | Spike: MediaPipe/MoveNet reconhecendo 1–2 movimentos | Alta |
| Canal (app vs PWA) | Perguntar preferência na validação | Média |
| Monetização / quem paga | Perguntar disposição a pagar + modelo B2C/B2B | Média |
| Posicionamento “fisio” | Conversar com fisio sobre risco/benefício | Média |

---

## Próximo movimento do grupo

1. Marcar o que todos concordam como **C**.
2. Escolher **3 hipóteses S** para validar esta semana.
3. Resolver a dúvida #1 (público-alvo) — trava o restante da ideação.
