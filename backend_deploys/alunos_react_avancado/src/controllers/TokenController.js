import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ["Credenciais inválidas"],
        });
      }
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ["Usuário não existe"],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ["Senha inválida"],
        });
      }

      const { id, nome } = user;

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({
        user: {
          id,
          nome,
          email,
        },
        token,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new TokenController();
