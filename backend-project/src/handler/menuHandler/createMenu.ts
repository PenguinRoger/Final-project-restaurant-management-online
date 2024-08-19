import menuUsecase from '@/use_case/menuUsecase';

const menuCreate = async (req,res) => {
    try{
        const result = await menuUsecase.createMenuUseCase(req.context.models,{
            menuName: req.body.menuName,
            menuSubName: req.body.menuSubName,
            menuPrice: req.body.menuPrice,
            menuImage: req.body.menuImage,
            menuCategoryNo: req.body.menuCategoryNo
        });

        res.status(200).send({
            data: result.dataValues,
            status: 200
        })
    }catch(e){
        res.status(500).send({
            message: e,
            status: 500
        })
    }
}

export default menuCreate;