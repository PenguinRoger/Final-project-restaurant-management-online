import menuChoiceUsecase from '@/use_case/menuChoiceUsecase';

const createMenuChoice = async (req,res) => {
    try{  
        const result = await menuChoiceUsecase.createMenuChoice(req.context.models,{
            menuChoiceName: req.body.menuChoiceName,
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

export default createMenuChoice