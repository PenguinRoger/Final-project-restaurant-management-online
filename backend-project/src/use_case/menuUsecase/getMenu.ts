import Models from '@/models';

const getMenuUsecase = async (models: Models, menuNo: number) => {
    return await models.MENU.findOne({
        where: { menuNo }
    });
}

export default getMenuUsecase;