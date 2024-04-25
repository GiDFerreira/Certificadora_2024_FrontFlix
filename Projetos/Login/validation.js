function acessar(event) {
    event.preventDefault(); 

    let input_email = document.getElementById('iemail');
    let input_senha = document.getElementById('isenha');

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;

    if (!regexEmail.test(input_email.value)) {
        input_email.style.borderColor = "red";
        exibir_mensagemErrada("error-email", "Por favor, insira um email válido.");
        return;
    } else {
        input_email.style.borderColor = "green";
        exibir_mensagemCorreta("error-email");
    }

    if (!regexSenha.test(input_senha.value)) {
        input_senha.style.borderColor = "red";
        exibir_mensagemErrada("error-password", "A senha deve ter entre 6 e 20 caracteres e conter pelo menos uma letra e um número.");
        return;
    } else {
        input_senha.style.borderColor = "green";
        exibir_mensagemCorreta("error-password");
    }

}

function exibir_mensagemCorreta(id) {
    document.getElementById(id).textContent = "";
}

function exibir_mensagemErrada(id, mensagem) {
    document.getElementById(id).textContent = mensagem;
}
