import Models from '@/models';

const menuCateDeleteUseCase = async (models: Models, menuCategoryNo: number) => {
    return await models.MENU_CATEGORY.destroy({
        where:{
            menuCategoryNo
        }
    })
}

export default menuCateDeleteUseCase;