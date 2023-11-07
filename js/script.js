function submitForm() {
  // Obter dados do formulário
  var name = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('mensagem').value;

  // Criar objeto JSON
  var formData = {
    name: name,
    email: email,
    message: message
  };

  // Enviar dados (TODO: usar AJAX para uma submissão assíncrona)
  console.log(JSON.stringify(formData));

  // TODO: adicionar a lógica para enviar os dados para o backend.

  // Limpar formulário após o envio
  document.getElementById('contactForm').reset();
}

function submitAdminForm() {
  // Obter dados do formulário
  var username = document.getElementById('adminUsername').value;
  var password = document.getElementById('adminPassword').value;

  // Criar objeto JSON
  var adminData = {
    username: username,
    password: password
  };

  // Enviar dados
  console.log(JSON.stringify(adminData));
  // TODO: adicionar a lógica para autenticação e redirecionar para a área administrativa.

  // Limpar formulário após o envio
  document.getElementById('adminForm').reset();
}

// Simula dados recebidos do backend
var receivedMessages = [
  { name: "John Doe", email: "john@example.com", message: "Hello there!" },
  { name: "Jane Smith", email: "jane@example.com", message: "Thanks for the info." },
];

// Função para carregar as mensagens na tabela
function loadMessages() {
  var tableBody = document.getElementById('messageTableBody');

  // Limpar tabela antes de adicionar novas mensagens
  tableBody.innerHTML = '';

  // Adicionar cada mensagem à tabela
  receivedMessages.forEach(function (message) {
    var row = tableBody.insertRow();
    var cellName = row.insertCell(0);
    var cellEmail = row.insertCell(1);
    var cellMessage = row.insertCell(2);

    cellName.innerHTML = message.name;
    cellEmail.innerHTML = message.email;
    cellMessage.innerHTML = message.message;
  });
}

// Carregar mensagens ao carregar a página
window.onload = function () {
  loadMessages();
};