function promisse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hey, eu sou uma Promisse!");
      resolve();
    }, 1000);
  });
}

export default async function () {
  await promisse();
  console.log("Terminou!");
}
