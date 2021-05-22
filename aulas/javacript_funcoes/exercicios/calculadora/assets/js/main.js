// Com função construtora

function Calculadora() {
  this.display = document.querySelector('.display');
  this.inicia = () => {
    this.clickBotoes();
    this.pressionaBotoes();
  };
  this.pressionaBotoes = () => {
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (/[0-9-\.*\/\,\+()]/.test(e.key)) this.btnParaDisplay(e.key);

      if (e.keyCode === 13) this.calculaValores();

      if (e.keyCode === 8) this.apagarCaractere();

      if (e.keyCode === 46) this.limpaDisplay();
    });
  };
  this.clickBotoes = () => {
    document.onclick = (e) => {
      const target = e.target;
      if (target.classList.contains('btn-num')) {
        this.btnParaDisplay(target.innerText);
      }
      if (target.classList.contains('btn-clear')) {
        this.limpaDisplay();
      }
      if (target.classList.contains('btn-del')) {
        this.apagarCaractere();
      }
      if (target.classList.contains('btn-equal')) {
        this.calculaValores();
      }
    };
  };
  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.limpaDisplay = () => {
    this.display.value = '';
  };
  this.apagarCaractere = () => {
    this.display.value = this.display.value.slice(
      0,
      this.display.value.length - 1,
    );
  };
  this.calculaValores = () => {
    let conta = this.display.value.replace('x', '*');
    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta Inválida');
        this.limpaDisplay();
        return;
      }
      this.display.value = conta;
    } catch (error) {
      alert('Conta Inválida');
      this.limpaDisplay();
      return;
    }
  };
}

const calculadora = new Calculadora();

calculadora.inicia();

/* 
// Com factory function

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    inicia() {
      this.clickBotoes();
      this.pressionaBotoes();
    },
    pressionaBotoes() {
      document.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (/[0-9-\.*\/\,\+()]/.test(e.key)) this.btnParaDisplay(e.key);

        if (e.keyCode === 13) this.calculaValores();

        if (e.keyCode === 8) this.apagarCaractere();

        if (e.keyCode === 46) this.limpaDisplay();
      });
    },
    clickBotoes() {
      document.onclick = (e) => {
        const target = e.target;
        if (target.classList.contains('btn-num')) {
          this.btnParaDisplay(target.innerText);
        }
        if (target.classList.contains('btn-clear')) {
          this.limpaDisplay();
        }
        if (target.classList.contains('btn-del')) {
          this.apagarCaractere();
        }
        if (target.classList.contains('btn-equal')) {
          this.calculaValores();
        }
      };
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
    limpaDisplay() {
      this.display.value = '';
    },
    apagarCaractere() {
      this.display.value = this.display.value.slice(
        0,
        this.display.value.length - 1,
      );
    },
    calculaValores() {
      let conta = this.display.value.replace('x', '*');
      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta Inválida');
          this.limpaDisplay();
          return;
        }
        this.display.value = conta;
      } catch (error) {
        alert('Conta Inválida');
        this.limpaDisplay();
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();

calculadora.inicia(); */
