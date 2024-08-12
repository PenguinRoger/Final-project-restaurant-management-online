import menuCategoryUsecase from '@/use_case/menuCategoryUsecase';

const updateMenuCate = async (req, res) => {
    try {
        const menuCategoryNo = Number(req.params.id);
        const result = await menuCategoryUsecase.updateMenuCategory(req.context.models,{
            menuCategoryName: req.body.menuCategoryName
        },menuCategoryNo
        )
        res.status(200).send({
            data: result,
            status: 200
        })
    } catch (e) {
        res.status(500).send({
            message: e,
            status: 500
        })
    }
}

export default updateMenuCate