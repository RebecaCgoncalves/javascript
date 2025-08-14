const htpp = require('http'); // importando o Módulo HTTP do node.js
htpp.createServer((request,response)=>{ // createServer cria um servidor ->  requeste e response é o parametro
response.write('Hello World Rebeca!'); // Envia o conteúdo para o cliente
response.end(); // Indica que a resposta Terminou
}).listen(3000)