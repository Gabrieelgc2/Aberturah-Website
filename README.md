# 🧱 Estrutura Completa do Projeto — Site Aberturah

## 🎯 Objetivo

Este documento define a estrutura completa do site institucional, detalhando **todas as páginas, seções e componentes**, com foco em organização, consistência e escalabilidade.

---

# 🧭 Visão Geral das Páginas

```
Home
Produtos
Sobre Nós
Contato
Notícias
```

---

# 🏠 PÁGINA: HOME

## 📌 Estrutura Geral

```
[HEADER]
[HERO]
[PRODUTOS]
[CARACTERÍSTICAS]
[CTA]
[FOOTER]
```

---

## 🟦 HEADER / NAVBAR

### Componentes:

* Logo (esquerda)
* Menu (direita)

  * Home
  * Produtos
  * Sobre
  * Contato
* Botão CTA (ex: "Fale Conosco")

### Layout:

```
[ LOGO ]        [ NAV LINKS ]        [ BOTÃO ]
```

---

## 🟪 HERO

### Objetivo:

Apresentar rapidamente o que a empresa faz.

### Componentes:

* Título (H1)
* Subtítulo
* Botão primário (Ver produtos)
* Botão secundário (Contato)
* Imagem ou vídeo

### Layout:

```
[ TEXTO ]        [ IMAGEM ]
```

---

## 🟨 PRODUTOS (PREVIEW)

### Objetivo:

Mostrar alguns produtos principais.

### Componentes:

* Título da seção
* Grid de cards (3 itens)

### Card:

```
[ IMAGEM ]
Título
[ Ver mais ]
```

---

## 🟩 CARACTERÍSTICAS

### Objetivo:

Mostrar diferenciais da empresa

### Componentes:

* Ícone
* Título
* Descrição

### Layout:

```
[ Ícone ]  [ Ícone ]  [ Ícone ]
```

---

## 🟫 CTA

### Objetivo:

Converter o usuário

### Componentes:

* Título
* Texto
* Botão (WhatsApp)

---

## ⬛ FOOTER

### Componentes:

* Logo
* Links
* Contato
* Copyright

---

# 📦 PÁGINA: PRODUTOS

## 📌 Estrutura Geral

```
[HEADER]
[TÍTULO]
[SUBTÍTULO]
[CATEGORIAS]
[GRID]
[FOOTER]
```

---

## 🟦 TÍTULO + SUBTÍTULO

```
Produtos
Conheça nossas soluções em ACM
```

---

## 🟨 CATEGORIAS

### Componentes:

* Botões filtro

```
[ Tubos ] [ Conexões ] [ Acessórios ]
```

---

## 🟥 GRID DE PRODUTOS

### Layout:

```
[ CARD ] [ CARD ] [ CARD ]
[ CARD ] [ CARD ] [ CARD ]
```

### Card:

```
[ IMAGEM ]
Nome do produto
[ Ver detalhes ]
```

---

# 📞 PÁGINA: CONTATO

## 📌 Estrutura Geral

```
[HEADER]
[INFO]
[WHATSAPP]
[FOOTER]
```

---

## 🟦 INFORMAÇÕES

### Componentes:

* Telefone
* Email
* Endereço

---

## 🟩 WHATSAPP

### Componentes:

* Texto chamativo
* Botão de ação

```
Fale conosco agora
[ Botão WhatsApp ]
```

---

# 🏢 PÁGINA: SOBRE NÓS

## 📌 Estrutura Geral

```
[HEADER]
[HISTÓRIA]
[VALORES]
[DIFERENCIAIS]
[FOOTER]
```

---

## 🟪 HISTÓRIA

### Componentes:

* Título
* Texto institucional

---

## 🟨 VALORES

### Componentes:

* Missão
* Visão
* Valores

### Layout:

```
[ Missão ] [ Visão ] [ Valores ]
```

---

## 🟩 DIFERENCIAIS

### Componentes:

* Lista de benefícios

---

# 🧩 COMPONENTES GLOBAIS

```
Header
Footer
Button
Card
Section
Container
```

---

# 📰 PÁGINA: NOTÍCIAS

## 📌 Estrutura Geral

```
[HEADER]
[HERO]
[FILTRO]
[LISTA DE POSTS]
[BOTÃO CARREGAR MAIS]
[CTA]
[FOOTER]
```

---

## 🟦 HEADER

### Componentes:

* Logo
* Navbar
* Botão CTA (Contato)

---

## 🟪 HERO (TOPO DA PÁGINA)

### Objetivo:

Apresentar o propósito da página

### Conteúdo:

```
Notícias e Atualizações
Acompanhe nossos projetos e novidades
```

### Estrutura:

```
Section (full width)
  └── Container
        ├── Título (H1)
        ├── Subtítulo
        └── Espaçamento inferior
```

---

## 🟨 FILTRO (INSTAGRAM / YOUTUBE)

### Objetivo:

Permitir alternar entre fontes de conteúdo

### Layout:

```
[ Instagram ]   [ YouTube ]
```

### Estrutura:

```
Container
  └── Flex Row (centralizado)
        ├── Botão Instagram (ativo)
        └── Botão YouTube (inativo)
```

### Comportamento:

* Clique altera os posts exibidos
* Estado ativo deve ser visualmente destacado

---

## 🟥 LISTA DE POSTS (CORE)

### Layout:

```
[ CARD ] [ CARD ] [ CARD ]
[ CARD ] [ CARD ] [ CARD ]
```

### Responsividade:

```
Mobile: 1 coluna
Tablet: 2 colunas
Desktop: 3 colunas
```

---

## 📦 COMPONENTE: POST CARD

### Estrutura:

```
Card Container
  ├── Thumbnail (imagem/vídeo)
  ├── Conteúdo
  │     ├── Título
  │     ├── Descrição curta
  │     ├── Data (opcional)
  │     └── Botão "Ver mais"
```

---

### 🔴 VARIAÇÃO YOUTUBE

```
[ Thumbnail com ícone ▶ ]
Título do vídeo
Duração (opcional)
[ Assistir → ]
```

---

### 🟣 VARIAÇÃO INSTAGRAM

```
[ Imagem quadrada ]
Texto curto
[ Ver no Instagram → ]
```

---

## 🟩 BOTÃO “CARREGAR MAIS”

### Layout:

```
[ VER MAIS NOTÍCIAS ]
```

### Estrutura:

```
Container
  └── Botão centralizado
```

### Comportamento:

* Clique carrega mais posts
* Futuro: scroll infinito

---

## 🟫 CTA

### Conteúdo:

```
Quer saber mais?
Fale com nossa equipe agora
[ WhatsApp ]
```

### Estrutura:

```
Section (background destacado)
  └── Container
        ├── Título
        ├── Texto
        └── Botão CTA
```

---

## ⬛ FOOTER

### Componentes:

* Logo
* Links rápidos
* Informações de contato
* Copyright

---

# 🧩 COMPONENTES ESPECÍFICOS

```
HeroNoticias
FiltroNoticias
PostCard
ListaPosts
LoadMoreButton
```

---

# 🔁 FLUXO DO USUÁRIO

```
Usuário entra
↓
Lê título
↓
Seleciona filtro (Instagram / YouTube)
↓
Explora posts
↓
Clica em um post
↓
Redirecionado para plataforma externa
↓
Retorna ou clica no CTA
```

---

# 🚀 PASSO A PASSO DE IMPLEMENTAÇÃO

## 1. Criar página

* Noticias.tsx

## 2. Criar HeroNoticias

* título + subtítulo

## 3. Criar FiltroNoticias

* estado ativo/inativo

## 4. Criar PostCard

* suportar Instagram e YouTube

## 5. Criar ListaPosts

* grid responsivo

## 6. Implementar botão “Carregar mais”

## 7. Integrar CTA

## 8. Conectar com dados (mock → API futura)

---

# 💡 OBSERVAÇÕES IMPORTANTES

* Não consumir API direto no início → usar mock
* Padronizar cards (mesmo tamanho)
* Garantir responsividade
* Evitar excesso de texto nos cards

---

# ✅ CHECKLIST

* [ ] Hero clara
* [ ] Filtro funcional
* [ ] Cards consistentes
* [ ] Grid responsivo
* [ ] Botão carregar mais
* [ ] CTA visível
* [ ] Integração futura preparada

---

# 🎯 CONCLUSÃO

A página de Notícias:

✔ mantém o site atualizado
✔ aumenta confiança
✔ melhora engajamento
✔ conecta com redes sociais

---


# 📐 PADRÕES DE DESIGN

## Container

```
max-w-6xl mx-auto px-4
```

## Espaçamento

```
py-12 (seções)
gap-6 (grid)
```

## Grid

```
Mobile: 1 coluna
Tablet: 2 colunas
Desktop: 3 colunas
```

---

# 🔁 FLUXO DO USUÁRIO

```
Home → Produtos → Produto → Contato
Home → CTA → WhatsApp
Sobre → Confiança → Contato
```

---

# 🧠 BOAS PRÁTICAS

* Manter consistência visual
* Reutilizar componentes
* Evitar excesso de cores
* Priorizar clareza

---

# 🚀 PASSO A PASSO DE EXECUÇÃO

## 1. Criar estrutura de páginas

* Home
* Produtos
* Sobre
* Contato

## 2. Criar componentes base

* Header
* Footer
* Button
* Card

## 3. Montar Home completa

## 4. Montar página Produtos

## 5. Montar Sobre

## 6. Montar Contato

## 7. Ajustar responsividade

## 8. Refinar UI

---

# ✅ CHECKLIST FINAL

* [ ] Header consistente
* [ ] Hero clara
* [ ] Grid funcionando
* [ ] CTA visível
* [ ] Footer completo
* [ ] Responsivo OK

---

# 🎯 CONCLUSÃO

Este documento serve como base para:

✔ Wireframe
✔ Desenvolvimento
✔ Organização do projeto
✔ Escalabilidade futura

---
