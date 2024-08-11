import menuUsecase from '@/usecases/menuUsecase';

const createMenu = async (req, res) => {
    try {
        const result = await menuUsecase.CreateMenu(req.context.models, {
            menuName: req.body.menuName,
            menuPrice: req.body.menuPrice,
        });

        res.status(200).send({
            data: result.dataValues,
            status: 200
        });
    } catch (e) {
        res.status(500).send({
            message: e.message,
            status: 500
        });
    }
}

export default createMenu
