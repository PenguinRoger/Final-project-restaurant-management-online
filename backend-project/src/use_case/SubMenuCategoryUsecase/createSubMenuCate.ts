import Models from '@/models';

const createSubMenuCategoryUseCase = async (models: Models, input: any) => {
    return await models.SUB_MENU_CATEGORY.create(input)
}

export default createSubMenuCategoryUseCase