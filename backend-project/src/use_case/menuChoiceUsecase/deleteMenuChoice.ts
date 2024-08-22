import Models from '@/models';

const menuChoiceDeleteUseCase = async (models: Models, menuChoiceNo: number) => {
    return await models.MENU_CHOICE.destroy({
        where:{
            menuChoiceNo
        }
    })
}

export default menuChoiceDeleteUseCase;