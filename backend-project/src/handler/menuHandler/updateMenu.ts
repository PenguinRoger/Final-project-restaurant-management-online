import menuUsecase from "@use_case/menuUsecase";

const updateMenu = async (req,res) => {
    try {
        const menuNo = Number(req.params.id);
        const result = await menuUsecase.updateMenuUsecase(req.context.models,{
            menuName: req.body.menuName,
            MenuSubName: req.body.menuSubName,
            menuPrice: req.body.menuPrice,
            menuImage: req.body.menuImage,
            menuCategoryNo: req.body.menuCategoryNo
        },menuNo
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

export default updateMenu;