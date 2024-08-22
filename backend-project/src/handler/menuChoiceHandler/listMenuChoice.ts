import menuChoiceUsecase from '@/use_case/menuChoiceUsecase';

const listMenuChoice = async (req, res: any) => {
    try {
        const { query } = req;

        const pageSize = Number(query.pageSize) || 10; // ตั้งค่า default pageSize เป็น 10 ถ้าไม่ได้ส่งมา
        const offset = Number(query.offset) || 0; // ตั้งค่า default offset เป็น 0 ถ้าไม่ได้ส่งมา

        const [data, count] = await menuChoiceUsecase.listMenuChoice(
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

export default listMenuChoice;
