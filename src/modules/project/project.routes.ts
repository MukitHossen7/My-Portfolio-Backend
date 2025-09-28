import express from "express";
import { zodValidateRequest } from "../../middleware/zodValidateRequest";
import {
  createProjectZodSchema,
  updateProjectZodSchema,
} from "./project.zod.validation";
import { projectController } from "./project.controller";

const projectRoute = express.Router();

//Create project by Admin use checkAuth
projectRoute.post(
  "/",
  zodValidateRequest(createProjectZodSchema),
  projectController.createProject
);

//public Route
projectRoute.get("/", projectController.getAllProjects);

//public Route
projectRoute.get("/:slug", projectController.getSingleProject);

//Update project by Admin use checkAuth
projectRoute.patch(
  "/:slug",
  zodValidateRequest(updateProjectZodSchema),
  projectController.updateProject
);

//Delete project by Admin use checkAuth
projectRoute.delete("/:slug", projectController.deleteProject);

export default projectRoute;
