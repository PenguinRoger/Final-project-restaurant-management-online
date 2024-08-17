import SubMenuCategoryUsecase from '@/use_case/SubMenuCategoryUsecase';

const updateSubMenuCate = async (req, res) => {
    try {
        const subMenuCategoryNo = Number(req.params.id);
        const result = await SubMenuCategoryUsecase.updateSubMenuCategoryUseCase(req.context.models,{
            subMenuCategoryName: req.body.subMenuCategoryName,
            subMenuCategoryPrice: req.body.subMenuCategoryPrice,
            menuCategoryNo: req.body.menuCategoryNo
        },subMenuCategoryNo
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

export default updateSubMenuCate