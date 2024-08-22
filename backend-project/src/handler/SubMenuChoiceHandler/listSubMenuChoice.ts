import SubMenuChoiceUsecase from '@/use_case/SubMenuChoiceUsecase';

const listSubMenuChoice = async (req, res: any) => {
    try {
        const { query } = req;

        const pageSize = Number(query.pageSize) || 10;
        const offset = Number(query.offset) || 0;

        const [data, count] = await SubMenuChoiceUsecase.listSubMenuChoice(
            req.context.models,
            {
                search: query.search,
                limit: pageSize,
                offset: offset,
            }
        )

        const pageInfo = {
            total: count,
            offset: offset,
            pageSize: pageSize,
        };

        res.status(200).send({
            data: data,
            pageInfo,
            status: 200
        })
    } catch (e: any) {
        res.status(500).send({
            message: e.message || 'Internal Server Error',
            status: 500
        })
    }
}

export default listSubMenuChoice;
