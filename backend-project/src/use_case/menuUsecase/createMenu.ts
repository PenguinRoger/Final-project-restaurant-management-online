import Models from '@/models';

const createMenuUseCase = async (models: Models, input: any) => {
    return await models.MENU.create(input)
}

export default createMenuUseCase