import menuCategoryUsecase from '@/use_case/menuCategoryUsecase';

const menuCategoryCreate = async (req,res) => {
    try{  
        const result = await menuCategoryUsecase.createMenuCategory(req.context.models,{
            menuCategoryName: req.body.menuCategoryName,
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

export default menuCategoryCreate