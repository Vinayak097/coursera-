import e from "express";
import { userlogin } from "../controllers/user.controller.js";
import { checkPoint } from "../controllers/user.controller.js";
import { userSignp } from "../controllers/user.controller.js";
const router=e.Router();
router.get('/check',checkPoint)
router.post('/login',userlogin);
router.post('/signup',userSignp);

export default router; 