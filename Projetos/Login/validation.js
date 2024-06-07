/*
 /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

"Email deve seguir a estrutura: exemplo@gmail.com";
"A senha deve ter 8 caracteres, com pelo menos 1 caracter maíusculo, mínusculo, número e especial."
*/ 

function acessar() {
    let input_email = document.getElementById('iemail');
    let input_senha = document.getElementById('isenha');

    let emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let senhaRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    let email_valido = emailRegex.test(input_email.value);
    let senha_valida = senhaRegex.test(input_senha.value);

    input_email.style.borderColor = email_valido ? 'green' : 'red';
    input_senha.style.borderColor = senha_valida ? 'green' : 'red';

    if(email_valido && senha_valida) {
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-password').textContent = '';
    } else {
        document.getElementById('error-email').textContent = email_valido ? '' : "Email deve seguir a estrutura: exemplo@gmail.com";
        document.getElementById('error-password').textContent = senha_valida ? '' : "A senha deve ter 8 caracteres, com pelo menos 1 caracter maíusculo, mínusculo, número e especial.";
    }
}
