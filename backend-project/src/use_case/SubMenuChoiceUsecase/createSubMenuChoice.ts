import Models from '@/models';

const createSubMenuChoiceUseCase = async (models: Models, input: any) => {
    return await models.SUB_MENU_CHOICE.create(input)
}

export default createSubMenuChoiceUseCase