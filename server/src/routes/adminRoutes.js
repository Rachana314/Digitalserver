import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleWare.js";

import {
  adminListHouseholds,
  adminGetHouseholdById,
  adminVerifyHousehold,
  adminRejectHousehold,
  adminRequestCorrection,
  adminProgress,
  adminAnalytics,
  getAdminNotifications,
  updateRequestStatus,
} from "../controller/adminController.js";

import { exportPDF } from "../controller/reportcontroller.js";

const router = express.Router();

// Protects ALL routes below with both Auth and Admin checks
router.use(authMiddleware, adminMiddleware);

// --- Household Management ---
router.get("/households", adminListHouseholds);
router.get("/households/:householdId", adminGetHouseholdById);
router.patch("/households/:householdId/verify", adminVerifyHousehold);
router.patch("/households/:householdId/reject", adminRejectHousehold);
router.patch("/households/:householdId/correction", adminRequestCorrection);

// --- Dashboard & Stats ---
router.get("/progress", adminProgress);
router.get("/analytics", adminAnalytics);

// --- Notifications & Change Requests ---
router.get("/notifications", getAdminNotifications);
router.patch("/requests/:id/status", updateRequestStatus);

// --- Reports ---
router.get("/reports/pdf", exportPDF);
router.post("/reports/pdf", exportPDF);

export default router;