# Arquitetura

## Camadas

```text
telas (src/telas)  ->  services (src/services)  ->  Firebase (Auth + Firestore)
                           ^
                  types e utils (src/types, src/utils)
```

As telas nunca falam com o Firestore: só chamam funções dos services. O conteúdo da trilha também passa por um service (`TrilhaService`), então pode migrar para o Firestore depois sem mexer nas telas.

## Autenticação (Firebase Auth, como na aula 14)

- Cadastro e login usam `createUserWithEmailAndPassword` / `signInWithEmailAndPassword`.
- O documento `usuarios/{uid}` guarda o perfil (sem senha) e o campo `tipo`: `responsavel` ou `crianca`.
- No login, o seletor "Sou responsável / Sou usuário" é **verificado** contra o `tipo` do perfil; se não bater, a sessão é encerrada.
- Responsável cadastra a criança (RF-02). Como `createUserWithEmailAndPassword` loga a conta nova, a criança é criada por um segundo app do Firebase (`getFirebaseSecundario`), para não deslogar o responsável.
- Cada tipo tem sua tela inicial: criança em `/trilha`, responsável em `/painel`. Toda tela protegida confere o tipo.

## Modelo de dados (Firestore)

| Coleção | Id do documento | Quem lê | Conteúdo |
| --- | --- | --- | --- |
| `usuarios` | uid | o próprio usuário | nome, email, nascimento, tipo, (criança) codigoVinculo e criadoPor |
| `vinculos` | `responsavelId_criancaId` | responsável e criança do par | nomes, código. Muitos para muitos |
| `codigosVinculo` | código de 6 caracteres | `get` por qualquer logado | criancaId, criancaNome |
| `progressos` | `criancaId_atividadeId` | criança **e responsáveis vinculados** | status, datas, pontuação, nível, alerta |
| `acessos` | criancaId | criança **e responsáveis vinculados** | último acesso |
| `diarios` | `criancaId_atividadeId` | **só a criança** | respostas específicas, sentimento, anotação |
| `amigos` | criancaId | **só a criança** | nome, gênero, espécie, cor do Amigo |

Uma criança pode ter vários responsáveis e um responsável várias crianças: cada par é um documento em `vinculos`. Um responsável adicional se vincula informando o código de vínculo da criança.

## Permissões (RF-13)

| | Criança | Responsável vinculado |
| --- | --- | --- |
| Fazer atividades, escrever anotações, editar o Amigo | sim | não |
| Ver progresso, níveis de ansiedade, último acesso | sim (o próprio) | sim |
| Ver respostas específicas, anotações, perfil do Amigo | sim (o próprio) | **não** |

A separação é feita em **coleções diferentes** e garantida por `firestore.rules`. Esconder campos só na tela não bastaria, porque o banco responderia a quem pedisse direto pela API.

## Pontuação e alerta de ansiedade

Cada pergunta reflexiva (sobre o Amigo) tem 4 respostas: nenhum, leve, moderado e extremo, valendo 0, 1, 2 e 3 pontos. Ao concluir a atividade:

1. soma-se a pontuação e compara-se com a máxima (3 pontos × nº de perguntas);
2. classifica-se a atividade em um dos 4 níveis (quartis da proporção);
3. se a proporção for **≥ 50%** (referência: ponto de corte do mini-SPIN, 6 de 12), grava-se `alerta: true` no progresso.

A criança vê, ao final da atividade, um aviso orientando a procurar ajuda profissional. O responsável vê um aviso no Painel e na tela de acompanhamento quando alguma das 3 últimas atividades concluídas teve alerta. O app não faz diagnóstico; os valores ficam em `src/utils/ansiedade.ts` e devem ser validados por profissional da área.
