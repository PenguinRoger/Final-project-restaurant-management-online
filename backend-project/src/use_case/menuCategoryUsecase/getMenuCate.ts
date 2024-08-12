
import Models from "@/models/index";

const getMenuCategoryUseCase = async (models: Models, menuCategoryNo: number) =>{
    return await models.MENU_CATEGORY.findOne({
        where:{
            menuCategoryNo
        }
    })
}

export default getMenuCategoryUseCase;
