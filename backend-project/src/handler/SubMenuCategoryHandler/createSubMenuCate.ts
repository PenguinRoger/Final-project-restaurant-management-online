import SubMenuCategoryUsecase from '@/use_case/SubMenuCategoryUsecase';

const SubMenuCategoryCreate = async (req,res) => {
    try{  
        const result = await SubMenuCategoryUsecase.createSubMenuCategoryUseCase(req.context.models,{
            subMenuCategoryName: req.body.subMenuCategoryName,
            subMenuCategoryPrice: req.body.subMenuCategoryPrice,
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

export default SubMenuCategoryCreate