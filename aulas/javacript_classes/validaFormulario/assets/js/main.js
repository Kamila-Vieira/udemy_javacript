class ValidaFormulário {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handlerSubmit(e);
    });
  }
  handlerSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
  }
  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      if (!campo.value) {
        const label = campo.previousElementSibling.textContent;
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCpf(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }
  criaErro(campo, mensagem) {
    const div = document.createElement("div");
    div.innerHTML = mensagem;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.lenght < 3 || usuario.lenght > 12) {
      this.criaErro(
        campo,
        "Nome de usuário precisa ter entre 3 e 12 caracteres."
      );
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuário precisar conter apenas letras e/ou números."
      );
      valid = false;
    }

    return valid;
  }
  validaCpf(campo) {
    const cpf = new ValidaCpf(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, `CPF inválido.`);
      return false;
    }

    return true;
  }
}

const valida = new ValidaFormulário();
