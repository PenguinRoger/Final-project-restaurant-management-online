import Models from '@/models';

const getSubMenuCategoryUseCase = async (models: Models, subMenuCategoryNo: number) => {
    return await models.SUB_MENU_CATEGORY.findOne({
        where: { subMenuCategoryNo }
    });
}

export default getSubMenuCategoryUseCase;
