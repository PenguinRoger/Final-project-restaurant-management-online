import Models from '@/models';

const deleteSubMenuCategoryUseCase = async (models: Models, subMenuCategoryNo: number) => {
    return await models.SUB_MENU_CATEGORY.destroy({
        where: { subMenuCategoryNo}
    });
}

export default deleteSubMenuCategoryUseCase;
