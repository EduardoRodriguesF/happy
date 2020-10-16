# Next Level Week 3 - Happy

<p align="center">
    <img src="https://github.com/EduardoRodriguesF/happy/blob/main/public/images/logo-icon.png?raw=true">
</p>

Projeto desenvolvido durante a terceira edição da *NLW*, realizado pela Rocketseat entre os dias 12 e 18 de outubro de 2020. O tema é uma homenagem ao dia das crianças, desenvolvendo uma aplicação envolta do cadastro e busca de orfanatos.

## Tecnologias
- HTML / hbs
- CSS
- JavaScript
- Node.js
- SQLite

## O que aprendi?
- Desenvolver servidores **back-end** em Node
- Utilizar a template engine <code>hbs</code>
- **Administrar projetos** através do <code>npm</code>
- **Organizar** uma aplicação extensa de forma visualmente simples
- Adotar a biblioteca <code>nodemon</code> para facilitar o desenvolvimento em Node
- Utilizar a **API** do WhatsApp para redirecionar o usuário para uma conversa
- Armazenar dados com o **SQLite** pelo **JavaScript**
- Dinamicamente passar dados entre back-end e front-end
- **Validação** básica pelo front-end

## Minha milha extra
Uma das propostas da Rocketseat foi adicionar novas features depois de terminar a aplicação, estas são minhas adições ao projeto:

### Barra lateral responsiva
No projeto original, a barra lateral <code>aside</code> poderia cobrir até metade na tela na versão mobile. Visto que ela não possui nenhuma informação importante para o usuário, resolvi remove-lá da aplicação para telas pequenas, assim aproveitando o máximo da tela do dispositivo.

### Formulário
Na página de criação de orfanato, os <code>input</code> válidos têm uma borda verde clara para indicar pro usuário que está certo. Agora, com um pouco de JavaScript e CSS, também ficarão com bordas vermelhas os que não forem válidos *após* tentar dar <code>submit</code>.

O <code>textarea</code> de Sobre possui agora um limite de 300 caracteres. Junto disso, também ajustei a altura do campo para que sempre caiba todas as palavras, sem a necessidade de um resize vertical.

Ainda nessa página, o botão selecionado de "atende aos fins de semana?" tem uma paleta de cores verde, para ambos "sim" e "não", decidi colocar as cores para o "não" em vermelho quando estiver selecionado, com a mesma paleta da classe <code>.closed</code> na página de orfanato (quando não está aberto de fins de semana).