import SubMenuCategoryUsecase from '@/use_case/SubMenuCategoryUsecase';
const getSubMenuCate = async (req, res) => {
    try{
        const subMenuCategoryNo = Number(req.params.id);
        const result = await SubMenuCategoryUsecase.getSubMenuCategoryUseCase(req.context.models,
            subMenuCategoryNo
        )

        res.status(200).send({
            data: result,
            status: 200
        })
    } catch (e) {
        res.status(500).send({
            message: e.message || 'Internal Server Error',
            status: 500
        })
    }
}

export default getSubMenuCate;
