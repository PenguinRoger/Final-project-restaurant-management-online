import Models from '@/models';
import {Op} from 'sequelize';

type MenuListOptions = {
    search?: string,
    limit?: number,
    offset?: number,
}

const listMenuUseCase = async (
    models: Models,
    options: MenuListOptions,
) => {
    let condition = {};

    if (options.search) {
        condition = {
            ...condition,
            [Op.or]: [
                {
                    menuName: { [Op.like]: `%${options.search}%` }
                },
                {
                    menuPrice: { [Op.like]: `%${options.search}%` }
                },
            ]
        }
    }

    const count = await models.MENU.count({
        where: condition,
        distinct: true,
        col: 'menuNo',
    });

    const data = await models.MENU.findAll({
        where: condition,
        limit: options.limit,
        offset: options.offset,
        attributes: ['menuNo', 'menuName', 'menuPrice', 'menuImage'],
        include: [
            {
                model: models.MENU_CATEGORY,
                as: 'menuCategory',
                attributes: ['menuCategoryNo', 'menuCategoryName'],
            },
        ],
        order: [['menuNo', 'ASC']],
    });

    return [data, count];
}

export default listMenuUseCase;