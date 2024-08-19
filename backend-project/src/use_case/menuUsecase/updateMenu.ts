import Models from '@/models';

const updateMenuUsecase = async (models: Models, input: any, menuNo: number) => {
    return await models.MENU.update(input, {
        where: { menuNo }
    });
}

export default updateMenuUsecase;