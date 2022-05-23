import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from "../models/Foto";
import Aluno from "../models/Aluno";

const upload = multer(multerConfig).single("picture");

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { aluno_id } = req.body;
        const aluno = await Aluno.findByPk(aluno_id);

        if (!aluno) {
          return res.status(400).json({
            errors: ["Aluno não existe"],
          });
        }

        const { originalname, filename } = req.file;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (error) {
        return res.status(400).json({
          errors: [error],
        });
      }
    });
  }
}

export default new FotoController();
