import menuUsecase from '@/usecases/menuUsecase';

const listMenu = async (req, res) => {
    try {
        const { query } = req;

        const limit = query.pageSize ? Number(query.pageSize) : undefined;
        const offset = query.offset ? Number(query.offset) : undefined;

        const [data, count] = await menuUsecase.ListMenu(
            req.context.models, {
                search: query.search,
                limit: Number(query.pageSize),
                offset: Number(query.offset),
            }
        );

        const pageInfo = {
            total: count,
            offset: Number(query.offset),
            pageSize: Number(query.pageSize),
        };

        res.status(200).send({
            data,
            pageInfo,
            status: 200
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: e.message || "Internal Server Error",
            status: 500
        });
    }
};

export default listMenu;
