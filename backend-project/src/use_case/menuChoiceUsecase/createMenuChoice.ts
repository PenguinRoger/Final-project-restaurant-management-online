import Models from '@/models';

const CreatemenuChoiceUseCase = async (models: Models, input: any) => {
    return await models.MENU_CHOICE.create(input)
}

export default CreatemenuChoiceUseCase