# Documentação de privacidade e permissões do PartnerCheck

## Visão geral

PartnerCheck é um aplicativo de verificação de compatibilidade que ajuda você a visualizar e comparar contatos usando correspondência baseada em cores. Este documento explica por que o aplicativo solicita acesso aos seus contatos e como seus dados são tratados.

## Por que solicitamos acesso a contatos

PartnerCheck solicita acesso **somente leitura** aos seus contatos para um propósito específico:

### Apenas seleção de contatos

O aplicativo usa o seletor de contatos nativo do seu dispositivo para permitir que você **selecione manualmente** os contatos que deseja adicionar ao aplicativo. **NÃO** acessamos automaticamente, lemos ou importamos todos os seus contatos. Você tem controle completo sobre quais contatos são adicionados.

**O que acontece quando você concede a permissão:**
- O aplicativo abre o seletor de contatos padrão do seu dispositivo
- Você navega e seleciona contatos individuais sozinho
- Apenas o contato que você escolhe explicitamente é processado
- O aplicativo nunca acessa seus contatos sem sua ação direta

## Quais dados acessamos

Quando você seleciona um contato através do seletor, o aplicativo acessa:

1. **Nome do contato** - O nome de exibição do contato selecionado
2. **Número de telefone** - O primeiro número de telefone associado ao contato (se disponível)

## Quais dados armazenamos

O aplicativo armazena dados **apenas localmente no seu dispositivo**. Armazenamos:

1. **Nome do contato** - O nome que você selecionou
2. **Valor da cor** - Um código de cor numérico derivado do número de telefone

**Importante:** **NÃO** armazenamos:
- O número de telefone real
- Endereços de e-mail
- Endereços
- Qualquer outra informação de contato
- Fotos ou imagens

## Como os números de telefone são usados

O número de telefone é usado **apenas** para gerar uma cor única para exibição visual:

1. O aplicativo extrai os últimos 6 dígitos do número de telefone
2. Esses dígitos são convertidos em um código de cor hexadecimal
3. A cor é usada para exibir o contato no aplicativo
4. **O número de telefone em si nunca é armazenado** - apenas o valor da cor resultante

Isso significa:
- Cada contato obtém uma cor única e consistente com base em seu número de telefone
- A cor ajuda a visualizar a compatibilidade entre contatos
- O número de telefone original é descartado após o cálculo da cor

## Armazenamento de dados e privacidade

### Apenas armazenamento local

Todos os dados são armazenados **exclusivamente no seu dispositivo** usando armazenamento local (SharedPreferences). Isso significa:

- ✅ Seus dados nunca saem do seu dispositivo
- ✅ Nenhum dado é enviado para servidores ou terceiros
- ✅ Nenhuma conexão com a Internet é necessária para a funcionalidade principal
- ✅ Você pode excluir todos os dados desinstalando o aplicativo

### Retenção de dados

- Os dados persistem no seu dispositivo até que você exclua manualmente os contatos ou desinstale o aplicativo
- Você pode excluir contatos individuais a qualquer momento através da interface do aplicativo
- Desinstalar o aplicativo remove todos os dados armazenados

## Permissões explicadas

### Permissão READ_CONTACTS

**Por que é necessária:** Para abrir o seletor de contatos nativo para que você possa selecionar contatos para adicionar.

**O que permite:**
- Abrir a interface do seletor de contatos do sistema
- Ler apenas o contato que você seleciona explicitamente
- Ler o nome e o número de telefone desse contato selecionado

**O que NÃO permite:**
- Acessar todos os contatos automaticamente
- Ler contatos sem sua seleção
- Modificar ou excluir contatos na sua lista de contatos
- Acessar qualquer outra informação de contato além do que você seleciona

**Tipo de permissão:** Somente leitura (solicitamos `readonly: true`)

### Permissão WRITE_CONTACTS

**Nota:** Embora esta permissão seja declarada no manifesto do Android para compatibilidade com a biblioteca do seletor de contatos, **não escrevemos, modificamos nem excluímos contatos na sua lista de contatos**. O aplicativo apenas lê o contato que você seleciona e armazena uma quantidade mínima de dados localmente.

## Seus direitos e controle

Você tem controle completo sobre seus dados:

1. **Escolha quais contatos adicionar** - Apenas contatos que você seleciona explicitamente são processados
2. **Exclua contatos a qualquer momento** - Remova qualquer contato do aplicativo a qualquer momento
3. **Revogue a permissão** - Você pode revogar o acesso a contatos nas configurações do seu dispositivo
4. **Opção de entrada manual** - Você pode adicionar contatos manualmente sem usar o seletor de contatos
5. **Remoção completa de dados** - Desinstalar o aplicativo remove todos os dados armazenados

## Segurança e melhores práticas

- Todo o processamento de dados acontece localmente no seu dispositivo
- Nenhuma transmissão de rede de dados de contato
- Nenhum compartilhamento de dados com terceiros
- Coleta mínima de dados (apenas nome e valor da cor derivado)
- Acesso a contatos somente leitura

## Limite de contatos (versão gratuita)

A versão gratuita permite até 10 contatos. Este limite:
- Aplica-se apenas a contatos armazenados no aplicativo
- Não afeta a lista de contatos do seu dispositivo
- Não limita sua capacidade de usar seus contatos em outros lugares
- Pode ser atualizado comprando PartnerCheck Pro para contatos ilimitados

## Perguntas frequentes

**P: O aplicativo acessa todos os meus contatos?**  
R: Não. O aplicativo acessa apenas contatos que você seleciona explicitamente através do seletor de contatos.

**P: Meus dados de contato são enviados para servidores?**  
R: Não. Todos os dados permanecem no seu dispositivo. Nenhuma informação de contato é transmitida pela Internet.

**P: O aplicativo pode modificar meus contatos?**  
R: Não. O aplicativo tem acesso somente leitura e não modifica, exclui nem adiciona contatos à sua lista de contatos.

**P: O que acontece se eu revogar a permissão de contato?**  
R: Você ainda pode usar o aplicativo adicionando contatos manualmente. A funcionalidade do seletor de contatos não estará disponível até que você conceda a permissão novamente.

**P: Como meu número de telefone é usado?**  
R: O número de telefone é usado apenas para calcular um código de cor. O número de telefone real nunca é armazenado - apenas o valor da cor resultante.

**P: Posso usar o aplicativo sem conceder permissão de contato?**  
R: Sim. Você pode adicionar contatos manualmente inserindo o nome e o número de telefone você mesmo.

## Compromisso com a transparência

Acreditamos em transparência e privacidade do usuário. Este aplicativo:
- Solicita permissões mínimas necessárias para a funcionalidade
- Processa dados localmente no seu dispositivo
- Não coleta, compartilha nem vende seus dados
- Dá a você controle completo sobre quais dados são armazenados

## Entre em contato

Se você tiver perguntas sobre privacidade ou tratamento de dados, entre em contato conosco através dos canais de suporte do aplicativo.

---

**Última atualização:** 25.06.2026 
**Versão do aplicativo:** PartnerCheck  
**Plataformas:** iOS, Android
