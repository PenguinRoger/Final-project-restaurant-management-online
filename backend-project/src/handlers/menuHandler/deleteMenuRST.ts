import menuUsecase from '@/usecases/menuUsecase';

const deleteMenu = async (req, res) => {
    try{
        const menuId = Number(req.params.id);
        console.log(req.params)
        const result = await menuUsecase.DeleteMenu(
            req.context.models,
            menuId
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

export default deleteMenu;