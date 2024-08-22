import SubMenuChoiceUsecase from '@/use_case/SubMenuChoiceUsecase';

const deleteSubMenuChoice = async (req, res) => {
    try{
        const  subMenuChoiceNo = Number(req.params.id);
        const result = await SubMenuChoiceUsecase.deleteSubMenuChoice(req.context.models,
            subMenuChoiceNo
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

export default deleteSubMenuChoice;