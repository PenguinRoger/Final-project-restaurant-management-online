import { Router } from "express";

import menuCategoryHandler from "@handler/menuCategoryHandler";
import SubMenuCategoryHandler from "@handler/SubMenuCategoryHandler";

const routes = (router: Router) => {
    const apiRouter = Router();
    
    //menu category
    apiRouter.get("/menu-category", menuCategoryHandler.listMenuCategory);
    apiRouter.get("/menu-category/:id", menuCategoryHandler.getMenuCategory);
    apiRouter.post("/menu-category", menuCategoryHandler.createMenuCategory);
    apiRouter.put("/menu-category/:id", menuCategoryHandler.updateMenuCategory);
    apiRouter.delete("/menu-category/:id", menuCategoryHandler.deleteMenuCategory);

    //sub menu category
    apiRouter.get("/sub-menu-category", SubMenuCategoryHandler.listSubMenuCate);
    apiRouter.get("/sub-menu-category/:id", SubMenuCategoryHandler.getSubMenuCate);
    apiRouter.post("/sub-menu-category", SubMenuCategoryHandler.createSubMenuCate);
    apiRouter.put("/sub-menu-category/:id", SubMenuCategoryHandler.updateSubMenuCate);
    apiRouter.delete("/sub-menu-category/:id", SubMenuCategoryHandler.deleteSubMenuCate);
    router.use("/api", apiRouter);
}

export default routes;