import { Router } from "express";
import { userController } from "../controller/user.controller";

const router = Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
/*router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser); */

export default router;