import Models from '@/models';

const CreatemenuCategoryUseCase = async (models: Models, input: any) => {
    return await models.MENU_CATEGORY.create(input)
}

export default CreatemenuCategoryUseCase