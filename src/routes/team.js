import express from "express";
import teamController from "../controller/team.js";
const router = express.Router();

router.post("/training", teamController.setTraining);
router.get("/starting-team", teamController.getStartingTeam);

export default router;
