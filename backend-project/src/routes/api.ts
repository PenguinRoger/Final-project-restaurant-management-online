import { Router } from "express";

import menuCategoryHandler from "@handler/menuCategoryHandler";
import SubMenuCategoryHandler from "@handler/SubMenuCategoryHandler";
import menuHandler from "@handler/menuHandler";
import menuChoiceHandler from "@handler/menuChoiceHandler";
import SubMenuChoiceHandler from "@handler/SubMenuChoiceHandler";

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
    
    //menu choice
    apiRouter.get("/menu-choice", menuChoiceHandler.listMenuChoice);
    apiRouter.get("/menu-choice/:id", menuChoiceHandler.getMenuChoice);
    apiRouter.post("/menu-choice", menuChoiceHandler.createMenuChoice);
    apiRouter.put("/menu-choice/:id", menuChoiceHandler.updateMenuChoice);
    apiRouter.delete("/menu-choice/:id", menuChoiceHandler.deleteMenuChoice);
    
    //sub menu choice
    apiRouter.get("/sub-menu-choice", SubMenuChoiceHandler.listSubMenuChoice);
    apiRouter.get("/sub-menu-choice/:id", SubMenuChoiceHandler.getSubMenuChoice);
    apiRouter.post("/sub-menu-choice", SubMenuChoiceHandler.createSubMenuChoice);
    apiRouter.put("/sub-menu-choice/:id", SubMenuChoiceHandler.updateSubMenuChoice);
    apiRouter.delete("/sub-menu-choice/:id", SubMenuChoiceHandler.deleteSubMenuChoice);
    
    router.use("/api", apiRouter);
}

export default routes;