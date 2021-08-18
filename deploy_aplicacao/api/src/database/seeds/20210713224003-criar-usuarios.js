const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John Doe",
          email: "john@teste.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Amanda Gonçalves",
          email: "amanda@teste.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "José Santos",
          email: "jose@teste.com",
          password_hash: await bcryptjs.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: async () => {},
};
