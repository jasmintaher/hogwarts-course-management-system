import express from "express";
import * as housesController from "../controllers/houses.controller.js";

const router = express.Router();

// Get all houses
// GET /houses
router.get("/", housesController.getAllHouses);

// Get a single house by ID
// GET /houses/:id
router.get("/:id", housesController.getHouseById);

export default router;