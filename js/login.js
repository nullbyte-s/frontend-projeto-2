function submitAdminForm() {
    // Obter dados do formulário
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;

    // Criar objeto JSON
    var loginData = {
        email: username,
        senha: password
    };

    // Lógica para autenticação
    try {
        if (!validarUsuario(loginData)) {
            throw new Error("Autenticação falhou!");
        }
        // Se a autenticação for bem-sucedida, redireciona para a área administrativa
        $(notificacao).notify("Autenticação bem-sucedida!", "success");
        setTimeout(function () {
            window.location.href = '/admin.html';
        }, 3000);
    } catch (error) {
        $(notificacao).notify(error.message, "error");
        document.getElementById('adminForm').reset();
    }
}