import Models from "@/models";

const updateEQStatusUseCase = async (models: Models, input: any, menuCategoryNo: number) => {
    return await models.MENU_CATEGORY.update(input,{
        where:{
            menuCategoryNo
        }
    })
}

export default updateEQStatusUseCase