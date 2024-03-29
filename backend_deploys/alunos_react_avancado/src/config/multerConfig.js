import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * Number(new Date()) + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      return callback(
        new multer.MulterError("Arquivo precisa ser PNG ou JPEG.")
      );
    }
    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, "..", "uploads", "images"));
    },
    filename: (req, file, callback) => {
      callback(
        null,
        `${Date.now()}_${aleatorio()}${extname(file.originalname)}`
      );
    },
  }),
};
