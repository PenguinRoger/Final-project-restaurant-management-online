import Models from "@/models";

const updateEQStatusUseCase = async (models: Models, input: any, menuChoiceNo: number) => {
    return await models.MENU_CHOICE.update(input,{
        where:{
            menuChoiceNo
        }
    })
}

export default updateEQStatusUseCase