function espera(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Apenas Strings");
      return;
    }
    setTimeout(() => {
      resolve(mensagem.toUpperCase() + ": Passei na Promisse");
    }, tempo);
  });
}

espera("2 Segundos", 2000)
  .then((resposta) => {
    console.log(resposta);
    return espera(1, 1000);
  })
  .then((resposta) => {
    console.log(resposta);
    return espera("3 Segundos", 3000);
  })
  .then((resposta) => {
    return resposta + " Vai pro outro then";
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Último then!");
  })
  .catch((e) => {
    console.log("Erro (Promise): ", e);
  });

console.log("Exibido antes da promisse!");

// Promisse.all Promisse.race Promisse.resolve Promisse.reject

const promisses = [
  //espera(323, 3000),
  "Primeiro Valor",
  espera("1 Segundo", 1000),
  espera("2 Segundos", 2000),
  espera("3 Segundos", 3000),
  "ùltimo Valor",
];

//Executa todas as promises de uma vez
Promise.all(promisses)
  .then((valor) => {
    console.log("(Promise.all):");
    console.log(valor);
  })
  .catch((e) => {
    console.log("Erro (Promise.all): ", e);
  });

//Executa o primeiro que não for promise ou primeira promise
Promise.race(promisses)
  .then((valor) => {
    console.log(valor + " (Promise.race)");
  })
  .catch((e) => {
    console.log("Erro (Promise.race): ", e);
  });

Promise.resolve(promisses)
  .then((valor) => {
    console.log("(Promise.resolve):");
    console.log(valor);
  })
  .catch((e) => {
    console.log("Erro (Promise.resolve): ", e);
  });

Promise.reject(promisses)
  .then((valor) => {
    console.log(valor + " (Promise.reject)");
  })
  .catch((e) => {
    console.log("Erro (Promise.reject): ", e);
  });

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.reject("Página em Cache");
  } else {
    return espera("Baixei a Página", 4000);
  }
}

baixaPagina()
  .then((dadosDaPagina) => {
    console.log(dadosDaPagina);
  })
  .catch((e) => console.log("Error:", e));

// async / await

espera("2 Segundos", 2000)
  .then((resposta) => {
    console.log(resposta);
    return espera("fase 1", 1000);
  })
  .then((fase) => {
    console.log(fase);
    return espera("fase 2", 1000);
  })
  .then((fase) => {
    console.log(fase);
  })
  .catch((e) => console.log("Error:", e));

async function executa() {
  try {
    // pending => não esperamos ela terminar e já chamamos
    const fase1 = espera("fase 1", 2000);
    console.log(fase1);
    setTimeout(() => {
      console.log("A fase 1 estava pendente", fase1);
    }, 2100);
    // fullfilled => resolvida
    const fase2 = await espera("fase 2", 2000);
    console.log(fase2);
    const fase3 = await espera("fase 3", 1000);
    console.log(fase3);
    // rejected => rejeitada
    const fase4 = await espera(4, 1000);
    console.log(fase4);
  } catch (error) {
    console.log("Error: ", error);
  }
}

executa();
