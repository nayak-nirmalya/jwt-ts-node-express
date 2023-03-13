import { Router } from "express";

import { login, dashboard } from "../controllers/main.js";
import { authenticationMiddleware } from "../middleware/auth.js";

const router = Router();

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

export default router;
