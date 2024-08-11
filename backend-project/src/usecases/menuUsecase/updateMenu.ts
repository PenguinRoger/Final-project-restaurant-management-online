import Models from '@/models';

const UpdateMenuUseCase = async (models: Models, input: any, menuId: number) => {
    return await models.Menu.update(input,{
        where:{
            menuId
        }
    })
}

export default UpdateMenuUseCase