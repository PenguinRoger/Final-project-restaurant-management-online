import Models from '@/models';

const updateSubMenuChoiceUseCase = async (models: Models, input: any, subMenuChoiceNo: number) => {
    return await models.SUB_MENU_CHOICE.update(input, {
        where: { subMenuChoiceNo }
    });
}

export default updateSubMenuChoiceUseCase;
