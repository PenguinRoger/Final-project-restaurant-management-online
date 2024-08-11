import Models from '@/models';

type MenuInput = {
    menuName: string
    menuPrice: number
}
const CreateMenuUseCase = async (models: Models, input: MenuInput) => {
    return await models.Menu.create(input)
}

export default CreateMenuUseCase