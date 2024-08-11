import { Op, literal } from "sequelize";
import Models from "@/models";

type menuListUseCase = {
    search?: string,
    limit?: number,
    offset?: number,
}

const MenuListUseCase = async (
    models: Models,
    options: menuListUseCase,
) => {
    let condition = {}

    if (options?.search != null && options.search.trim() !== "") {
        condition = Object.assign(condition, {
            [Op.or]: [
            { 
                menuName: { [Op.like]: literal(`'%${options.search}%'`) } 
            },
            { 
                menuPrice: { [Op.like]: literal(`'%${options.search}%'`) } 
            },
            ]
        });
    }
    const count = await models.Menu.count({
        where: condition,
        distinct: true,
        col: 'menuId',
    })

    const data = await models.Menu.findAll({
        limit: options.limit,
        offset: options.offset,
        where: condition,
        attributes: [
            'menuId',
            'menuName',
            'menuPrice',
        ],
        order: [
            ['menuId', 'ASC'],
        ]
    })

    return [data, count];
}

export default MenuListUseCase;
