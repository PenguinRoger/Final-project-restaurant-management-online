import SubMenuChoiceUsecase from '@/use_case/SubMenuChoiceUsecase';

const SubMenuChoiceCreate = async (req,res) => {
    try{  
        const result = await SubMenuChoiceUsecase.createSubMenuChoice(req.context.models,{
            subMenuChoiceName: req.body.subMenuChoiceName,
            subMenuChoicePrice: req.body.subMenuChoicePrice,
            menuChoiceNo: req.body.menuChoiceNo
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

export default SubMenuChoiceCreate