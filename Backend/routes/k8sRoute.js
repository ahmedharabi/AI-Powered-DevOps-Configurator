import express from "express";
const router=express.Router();
import k8sResponse from "../controllers/k8sController.js"

router.post("/k8s",k8sResponse);

export default router;
