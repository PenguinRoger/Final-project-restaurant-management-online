import Models from '@/models';

const getSubMenuChoiceUseCase = async (models: Models, subMenuChoiceNo: number) => {
    return await models.SUB_MENU_CHOICE.findOne({
        where: { subMenuChoiceNo }
    });
}

export default getSubMenuChoiceUseCase;
