// function acessar(event) {
//     event.preventDefault(); 

//     let input_email = document.getElementById('iemail');
//     let input_senha = document.getElementById('isenha');

//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;

//     if (!regexEmail.test(input_email.value)) {
//         input_email.style.borderColor = "red";
//         exibir_mensagemErrada("error-email", "Por favor, insira um email válido.");
//         return;
//     } else {
//         input_email.style.borderColor = "green";
//         exibir_mensagemCorreta("error-email");
//     }

//     if (!regexSenha.test(input_senha.value)) {
//         input_senha.style.borderColor = "red";
//         exibir_mensagemErrada("error-password", "A senha deve ter entre 6 e 20 caracteres e conter pelo menos uma letra e um número.");
//         return;
//     } else {
//         input_senha.style.borderColor = "green";
//         exibir_mensagemCorreta("error-password");
//     }

// }

// function exibir_mensagemCorreta(id) {
//     document.getElementById(id).textContent = "";
// }

// function exibir_mensagemErrada(id, mensagem) {
//     document.getElementById(id).textContent = mensagem;
// }


function acessar() {
    let input_email = document.getElementById('iemail');
    let input_senha = document.getElementById('isenha');
    let email = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    let email_valido = emailRegex.test(input_email.value);
    let senha_valida = senhaRegex.test(input_senha.value);

    input_email.style.borderColor = email_valido ? "green" : "red";
    input_senha.style.borderColor = senha_valida ? "green" : "red";

    if (email_valido && senha_valida) {
        document.getElementById("error-email").textContent = "";
        document.getElementById("error-password").textContent = "";
    } else {
        document.getElementById("error-email").textContent = email_valido ? "" : "Email deve seguir a estrutura: userName@domínio!";
        document.getElementById("error-password").textContent = senha_valida ? "" : "A senha deve ter entre 6 e 20 caracteres e conter pelo menos uma letra e um número.";
    }
}

