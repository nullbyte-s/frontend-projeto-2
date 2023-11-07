function submitAdminForm() {
    // Obter dados do formulário
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;
  
    // Criar objeto JSON
    var adminData = {
      username: username,
      password: password
    };
  
    // Enviar dados (pode ser ajustado conforme necessário)
    console.log(JSON.stringify(adminData));
    // Aqui você pode adicionar a lógica para autenticação ou redirecionar para a área administrativa.
  
    // Limpar formulário após o envio
    document.getElementById('adminForm').reset();
  }
  