import menuUsecase from '@/usecases/menuUsecase';

const updateMenu = async (req, res) => {
    try {
        const menuId = Number(req.params.id);
        const result = await menuUsecase.UpdateMenu(req.context.models,{
            menuName: req.body.menuName,
            menuPrice: req.body.menuPrice,
        },menuId
        )
        res.status(200).send({
            data: result,
            status: 200
        })
    } catch (e) {
        res.status(500).send({
            message: e.message,
            status: 500
        })
    }
}

export default updateMenu;