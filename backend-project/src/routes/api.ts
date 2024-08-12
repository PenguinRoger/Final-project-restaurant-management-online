import { Router } from "express";

import menuCategoryHandler from "@handler/menuCategoryHandler";

const routes = (router: Router) => {
    const apiRouter = Router();
    
    //menu category
    apiRouter.get("/menu-category", menuCategoryHandler.listMenuCategory);
    apiRouter.get("/menu-category/:id", menuCategoryHandler.getMenuCategory);
    apiRouter.post("/menu-category", menuCategoryHandler.createMenuCategory);
    apiRouter.put("/menu-category/:id", menuCategoryHandler.updateMenuCategory);
    apiRouter.delete("/menu-category/:id", menuCategoryHandler.deleteMenuCategory);

    router.use("/api", apiRouter);
}

export default routes;