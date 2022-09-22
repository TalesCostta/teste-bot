var paramChat = window.location.href;
console.log(paramChat);
var paramChatAlterado = paramChat.replaceAll('.', '_pontoBot_').replaceAll('/','_barraBot_').replaceAll('&','_comercialBot_').replaceAll('=','_igualBot_').replaceAll(',','_virgulaBot_').replaceAll(':','_doispontosBot_').replaceAll('-','_tracoBot_');
console.log(paramChatAlterado);
let cronchatToken = '5203171793:AAFWMcOzQaKHbVKft3QN3ndbcNYyLlgDEIo';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';
let chatbotURL = `${hostURL}${cronchatToken}&extraparam=${paramChatAlterado}`;
console.log(chatbotURL);
let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);
