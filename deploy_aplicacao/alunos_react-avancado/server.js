import app from "./app";

require("dotenv").config();

const PORT = process.env.APP_PORT || "3008";

app.listen(PORT, () => {
  console.log();
  console.log(`Escutando na porta ${PORT}`);
  console.log(`CTRL + clique em http://localhost:${PORT}`);
  console.log();
});
