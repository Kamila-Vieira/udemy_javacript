import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir (Falha de segurança)
router.get("/", userController.index); // lista todos os usuarios
// router.get("/:id", userController.show); // mostra um usuario

router.post("/", userController.store);
router.put("/:id?", loginRequired, userController.update);
router.delete("/:id?", loginRequired, userController.delete);

export default router;

/*
  index => lista todos os usuarios => GET
  store/create => cria um novo usuario => POST
  delete => apaga um usuario => DELETE
  update => atualiza um usuario => PATCH ou PUT
  show => mostra um usuario => GET
*/
