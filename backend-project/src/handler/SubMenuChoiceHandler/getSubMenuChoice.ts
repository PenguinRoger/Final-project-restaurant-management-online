import SubMenuChoiceUsecase from '@/use_case/SubMenuChoiceUsecase';
const getSubMenuChoice = async (req, res) => {
    try{
        const subMenuChoiceNo = Number(req.params.id);
        const result = await SubMenuChoiceUsecase.getSubMenuChoice(req.context.models,
            subMenuChoiceNo
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

export default getSubMenuChoice;
