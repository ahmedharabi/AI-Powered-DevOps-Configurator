import express from "express";
const router=express.Router();
import dockerResponse from "../controllers/dockerController.js"

router.post("/docker",dockerResponse);

export default router;
