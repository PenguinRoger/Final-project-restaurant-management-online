import menuCategoryUsecase from '@/use_case/menuCategoryUsecase';

const deleteMenuCate = async (req, res) => {
    try{
        const  menuCategoryNo = Number(req.params.id);
        const result = await menuCategoryUsecase.deleteMenuCategory(req.context.models,
            menuCategoryNo
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

export default deleteMenuCate;