var paramChat = window.location.href;
console.log(paramChat);
paramChat.replaceAll('$pontoBot$', '.');
console.log(paramChat);
let cronchatToken = '5203171793:AAFWMcOzQaKHbVKft3QN3ndbcNYyLlgDEIo';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';
let chatbotURL = `${hostURL}${cronchatToken}&extraparam=${paramChat}`;
let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);
