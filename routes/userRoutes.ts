import { Router } from "express";
import { getUserData, patchUserData, postUser } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();
router.post("/create-user", postUser);
router.get("/fetch-user-data", authMiddleware, getUserData);
router.patch("/update-user-data", authMiddleware, patchUserData);

export default router;
