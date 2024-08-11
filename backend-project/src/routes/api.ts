import { Router } from "express";

// Importing handlers
import menuHandler from "@handlers/menuHandler";

const routes = (router: Router) => {
  const apiRouter = Router();
  
  // Menu
  apiRouter.get("/menu", menuHandler.listMenuRST);
  apiRouter.get("/menu/:id", menuHandler.getMenuRST);
  apiRouter.post("/menu", menuHandler.createMenuRST);
  apiRouter.put("/menu/:id", menuHandler.updateMenuRST);
  apiRouter.delete("/menu/:id", menuHandler.deleteMenuRST);
  
  router.use("/api", apiRouter);
};

export default routes;
