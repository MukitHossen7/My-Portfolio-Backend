import express from "express";
import { zodValidateRequest } from "../../middleware/zodValidateRequest";
import {
  createBlogZodSchema,
  updateBlogZodSchema,
} from "./blog.zod.validation";
import { blogController } from "./blog.controller";

const blogRoute = express.Router();

//Create blog by Admin use checkAuth
blogRoute.post(
  "/",
  zodValidateRequest(createBlogZodSchema),
  blogController.createBlog
);

//Public route
blogRoute.get("/", blogController.getAllBlogs);

//Public route
blogRoute.get("/:slug", blogController.getSingleBlog);

//Create blog by Admin use checkAuth
blogRoute.patch(
  "/:slug",
  zodValidateRequest(updateBlogZodSchema),
  blogController.updateBlog
);

////Create blog by Admin use checkAuth
blogRoute.delete("/:slug", blogController.deleteBlog);

export default blogRoute;
