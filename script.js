//seleciona os elementos
const cpfInput = document.querySelector('.caixas[type="text"]');
const senhaInput = document.querySelector('.caixas[type="password"]');
const botaoEntrar = document.querySelector('.entrar');

//Cpf e senha "corretos"
const CPF_CORRETO = "02986107362";
const SENHA_CORRETA = "livialinda";

//evento de clique no botão
botaoEntrar.addEventListener('click', () => {
    const cpfDigitado = cpfInput.value.trim();
    const senhaDigitada = senhaInput.value.trim();

    //verifica se está tudo preenchido
    if (!cpfDigitado || !senhaDigitada) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    //verifica se CPF e senha estão corretos
    if (cpfDigitado === CPF_CORRETO && senhaDigitada === SENHA_CORRETA) {
        alert("Login realizado com sucesso!");

        //Redireciona para uma outra pagina (dashboard.html)
        window.location.href = ("dashboard.html");
    }    else {
            alert("CPF ou Senha estão incorretos. Tente novamente.");
    
    }
});