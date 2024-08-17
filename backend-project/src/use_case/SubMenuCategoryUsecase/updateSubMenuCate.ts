import Models from '@/models';

const updateSubMenuCategoryUseCase = async (models: Models, input: any, subMenuCategoryNo: number) => {
    return await models.SUB_MENU_CATEGORY.update(input, {
        where: { subMenuCategoryNo }
    });
}

export default updateSubMenuCategoryUseCase;
