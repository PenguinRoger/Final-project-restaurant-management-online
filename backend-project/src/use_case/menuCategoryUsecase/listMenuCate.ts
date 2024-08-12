import Models from "../../models/index";
import { Op, literal } from 'sequelize';

type menuCateListOptions = {
    search?: string,
    limit?: number,
    offset?: number,
}

const menuCateListUseCase = async (
    models: Models,
    options: menuCateListOptions,
) => {
    let condition = {}

    if (options.search) {
        condition = {
            ...condition,
            [Op.or]: [
                {
                    menuCategoryName: { [Op.like]: `%${options.search}%` }
                },
            ]
        }
    }

    const count = await models.MENU_CATEGORY.count({
        where: condition,
        distinct: true,
        col: 'menuCategoryNo',
    })

    const data = await models.MENU_CATEGORY.findAll({
        where: condition,
        limit: options.limit,
        offset: options.offset,
        attributes: ['menuCategoryNo', 'menuCategoryName'],
        order: [
            ['menuCategoryNo', 'ASC']
        ]
    })

    return [data, count];
}

export default menuCateListUseCase;
