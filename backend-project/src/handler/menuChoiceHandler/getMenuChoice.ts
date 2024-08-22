import menuChoiceUsecase from '@/use_case/menuChoiceUsecase';

const getMenuChoice = async (req, res) => {
    try{
        const menuChoiceNo = Number(req.params.id);
        const result = await menuChoiceUsecase.getMenuChoice(req.context.models,
            menuChoiceNo
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

export default getMenuChoice;
