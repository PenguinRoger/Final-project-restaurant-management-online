import { Router } from "express";

import menuCategoryHandler from "@handler/menuCategoryHandler";
import SubMenuCategoryHandler from "@handler/SubMenuCategoryHandler";
import menuHandler from "@handler/menuHandler";

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

    //menu
    apiRouter.get("/menu", menuHandler.listMenu);
    apiRouter.get("/menu/:id", menuHandler.getMenu);
    apiRouter.post("/menu", menuHandler.createMenu);
    apiRouter.put("/menu/:id", menuHandler.updateMenu);
    apiRouter.delete("/menu/:id", menuHandler.deleteMenu);
    
    router.use("/api", apiRouter);
}

export default routes;