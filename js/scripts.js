/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

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
  
    // Enviar dados (pode ser ajustado conforme necessário, por exemplo, usando AJAX para uma submissão assíncrona)
    console.log(JSON.stringify(formData));
    // Aqui você pode adicionar a lógica para enviar os dados para o backend ou fazer o que for necessário.
  
    // Limpar formulário após o envio
    document.getElementById('contactForm').reset();
}
