
import Models from "@/models/index";

const getMenuChoiceUseCase = async (models: Models, menuChoiceNo: number) =>{
    return await models.MENU_CHOICE.findOne({
        where:{
            menuChoiceNo
        }
    })
}

export default getMenuChoiceUseCase;
