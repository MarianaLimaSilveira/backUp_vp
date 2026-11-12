# VinxUp

App mobile feito com React Native, Expo SDK 54 e TypeScript, seguindo a estrutura do app-diario das aulas.

## Como rodar

```bash
npm install
npx expo start --clear
```

## Estrutura

```text
app/                 # Expo Router: só pontes de rota
├── _layout.tsx      # Stack
├── index.tsx        # TelaCarregamento
├── login.tsx        # TelaLogin
├── trilha.tsx       # TelaTrilha
└── atividade.tsx    # TelaAtividade
src/
├── componentes/     # BarraNavegacao, CabecalhoLontra
├── telas/           # uma tela por arquivo
└── types/           # Atividade
```
