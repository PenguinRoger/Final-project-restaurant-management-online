import Models from '@/models';
import { Op } from 'sequelize';

type SubMenuChoiceListOptions = {
    search?: string,
    limit?: number,
    offset?: number,
}

const subMenuChoiceListUseCase = async (
    models: Models,
    options: SubMenuChoiceListOptions,
) => {
    let condition = {}

    if (options.search) {
        condition = {
            ...condition,
            [Op.or]: [
                {
                    subMenuChoiceName: { [Op.like]: `%${options.search}%` }
                },
            ]
        }
    }

    const count = await models.SUB_MENU_CHOICE.count({
        where: condition,
        distinct: true,
        col: 'subMenuChoiceNo',
    });

    const data = await models.SUB_MENU_CHOICE.findAll({
        where: condition,
        limit: options.limit,
        offset: options.offset,
        attributes: ['subMenuChoiceNo', 'subMenuChoiceName', 'subMenuChoicePrice',
        ],
        include: [
            {
                model: models.MENU_CHOICE,
                as: 'menuChoice',
                attributes: ['menuChoiceNo','menuChoiceName'],  
            }
        ],
        order: [
            ['subMenuChoiceNo', 'ASC']
        ]
    });

    return [data, count];
}

export default subMenuChoiceListUseCase;
