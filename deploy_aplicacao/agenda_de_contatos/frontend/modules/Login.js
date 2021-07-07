import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(event) {
    const formElement = event.target;
    const inputEmailElement = formElement.querySelector('input[name="email"]');
    const inputPasswordElement = formElement.querySelector(
      'input[name="password"]'
    );
    let error = false;

    if (!validator.isEmail(inputEmailElement.value)) {
      alert("E-mail inválido");
      error = true;
    }

    if (
      inputPasswordElement.value.length < 3 ||
      inputPasswordElement.value.length > 50
    ) {
      alert("Senha precisa ter entre 3 e 50 caracteres");
      error = true;
    }

    if (!error) formElement.submit();
  }
}
