import Models from '@/models';

const DeleteMenuUseCase = async (models: Models, menuId: number) => {
    return await models.Menu.destroy({
        where:{
            menuId
        }
    })
}

export default DeleteMenuUseCase;