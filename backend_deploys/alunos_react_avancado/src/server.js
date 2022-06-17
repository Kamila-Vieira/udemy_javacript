import app from "./app";

require("dotenv").config();

const PORT = process.env.PORT || "3008";

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
  console.log(`CTRL + clique em http://localhost:${PORT}`);
});
