npm i express ou npm install express => instala
<br/>
npm update => atualiza dependências
<br/>
npm uninstall express => desinstala
<br/>
npm outdated => versões
<br/>
npm i express --save-dev => instala no ambiente de desenvolvimento ('devDependencies'), se já estiver instalada o "npm i express --save-prod" muda para ambiente de desenvolvimento
<br/>
npm i express --save-prod ou npm i express => instala no ambiente de produção ('dependencies'), se já estiver instalada o "npm i express --save-prod" muda para ambiente de produção
<br/>
npm i express@2.1.0 => instala versão especificada
<br/>
npm i express@2.x => instala versão na última versão
<br/>
npm i express -E => retira a flag '^' da versão para não ser atualizado posteriormente
<br/>
Versão 2.1.0 (2 => major, 1 => minor, 0 => patch )
<br/>
patch: Correções pequenas, bugs por exemplo (neste caso vai para 2.1.1)<br/>
minor: Criação de novos recursos que não quebrem a compatitbiliadde da versão major (neste caso vai para 2.2.0)<br/>
major: Quebra de compatibilidade com recursos que têm nas versões anterires (neste caso vai para 3.0.0)<br/>
O ^ atualiza apenas as verões minor e patch
