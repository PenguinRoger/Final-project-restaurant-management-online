import menuChoiceUsecase from '@/use_case/menuChoiceUsecase';

const updateMenuChoice = async (req, res) => {
    try {
        const menuChoiceNo = Number(req.params.id);
        const result = await menuChoiceUsecase.updateMenuChoice(req.context.models,{
            menuChoiceName: req.body.menuChoiceName
        },menuChoiceNo
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

export default updateMenuChoice