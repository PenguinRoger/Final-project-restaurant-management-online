import SubMenuChoiceUsecase from '@/use_case/SubMenuChoiceUsecase';

const updateSubMenuChoice = async (req, res) => {
    try {
        const subMenuChoiceNo = Number(req.params.id);
        const result = await SubMenuChoiceUsecase.updateSubMenuChoice(req.context.models,{
            subMenuChoiceName: req.body.subMenuChoiceName,
            subMenuChoicePrice: req.body.subMenuChoicePrice,
            menuChoiceNo: req.body.menuChoiceNo
        },subMenuChoiceNo
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

export default updateSubMenuChoice