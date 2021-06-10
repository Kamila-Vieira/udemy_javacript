//Com HTTP request

// const request = (obj) => {
//   return new Promise((resolve, request) => {
//     const xhr = new XMLHttpRequest();
//     //metodo, url, se assincrono(true) ou sincrono(false)
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         request(xhr.statusText);
//       }
//     });
//   });
// };

// document.addEventListener("click", (e) => {
//   const element = e.target;
//   const tag = element.tagName.toLowerCase();

//   if (tag === "a") {
//     e.preventDefault();
//     carregaPagina(element);
//   }
// });

// async function carregaPagina(element) {
//   const href = element.getAttribute("href");

//   const objConfig = {
//     method: "GET",
//     url: href,
//   };

//   try {
//     const response = await request(objConfig);
//     carregaResultado(response);
//   } catch (error) {
//     console.log("Error:", error);
//   }
//   // request(objConfig)
//   //   .then((response) => {
//   //     carregaResultado(response);
//   //   })
//   //   .catch((err) => {
//   //     console.log("Error", err);
//   //   });
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector(".resultado");
//   resultado.innerHTML = response;
// }

//Com fetch API

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(element);
  }
});

async function carregaPagina(element) {
  const href = element.getAttribute("href");
  try {
    const response = await fetch(href);
    if (response.status !== 200) throw new Error("Erro 404 fetch");
    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    console.error("Error: ", error);
  }
  // fetch(href)
  //   .then((response) => {
  //     if (response.status !== 200) throw new Error("Erro 404 fetch");
  //     return response.text();
  //   })
  //   .then((response) => {
  //     carregaResultado(response);
  //   })
  //   .catch((error) => {
  //     console.error("Error: ", error);
  //   });
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// fetch("pagina1.html")
//   .then((response) => {
//     if (response.status !== 200) throw new Error("Erro 404 fetch");
//     return response.text();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error("Error: ", error);
//   });
