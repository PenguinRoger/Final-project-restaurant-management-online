import Models from '@/models';

const deleteSubMenuChoiceUseCase = async (models: Models, subMenuChoiceNo: number) => {
    return await models.SUB_MENU_CHOICE.destroy({
        where: { subMenuChoiceNo}
    });
}

export default deleteSubMenuChoiceUseCase;
