import Models from '@/models';

const deleteMenuUsecase = async (medels:Models, menuNo: number) => {
    return await medels.MENU.destroy({
        where: { menuNo }
    });
}

export default deleteMenuUsecase;