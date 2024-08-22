import Models from "../../models/index";
import { Op, literal } from 'sequelize';

type menuChoiceListOptions = {
    search?: string,
    limit?: number,
    offset?: number,
}

const menuChoiceListUseCase = async (
    models: Models,
    options: menuChoiceListOptions,
) => {
    let condition = {}

    if (options.search) {
        condition = {
            ...condition,
            [Op.or]: [
                {
                    menuChoiceName: { [Op.like]: `%${options.search}%` }
                },
            ]
        }
    }

    const count = await models.MENU_CHOICE.count({
        where: condition,
        distinct: true,
        col: 'menuChoiceNo',
    })

    const data = await models.MENU_CHOICE.findAll({
        where: condition,
        limit: options.limit,
        offset: options.offset,
        attributes: ['menuChoiceNo', 'menuChoiceName'],
        include: [
            {
                model: models.SUB_MENU_CHOICE,
                as: 'subMenuChoice',
                attributes: ['subMenuChoiceNo','subMenuChoiceName', 'subMenuChoicePrice'],  
            }
        ],
        order: [
            ['menuChoiceNo', 'ASC']
        ]
    })

    return [data, count];
}

export default menuChoiceListUseCase;
