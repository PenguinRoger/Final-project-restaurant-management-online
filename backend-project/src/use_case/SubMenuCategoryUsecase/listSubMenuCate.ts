import Models from '@/models';
import { Op } from 'sequelize';

type SubMenuCateListOptions = {
    search?: string,
    limit?: number,
    offset?: number,
}

const subMenuCateListUseCase = async (
    models: Models,
    options: SubMenuCateListOptions,
) => {
    let condition = {}

    if (options.search) {
        condition = {
            ...condition,
            [Op.or]: [
                {
                    subMenuCategoryName: { [Op.like]: `%${options.search}%` }
                },
            ]
        }
    }

    const count = await models.SUB_MENU_CATEGORY.count({
        where: condition,
        distinct: true,
        col: 'subMenuCategoryNo',
    });

    const data = await models.SUB_MENU_CATEGORY.findAll({
        where: condition,
        limit: options.limit,
        offset: options.offset,
        attributes: ['subMenuCategoryNo', 'subMenuCategoryName', 'subMenuCategoryPrice',
        ],
        include: [
            {
                model: models.MENU_CATEGORY,
                as: 'menuCategory',
                attributes: ['menuCategoryNo','menuCategoryName'],  
            }
        ],
        order: [
            ['subMenuCategoryNo', 'ASC']
        ]
    });

    return [data, count];
}

export default subMenuCateListUseCase;
