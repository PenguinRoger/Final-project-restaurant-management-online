import menuUsecase from "@use_case/menuUsecase";

const deleteMenu = async (req,res) => {
    try{
        const menuNo = Number(req.params.id);
        const result = await menuUsecase.deleteMenuUsecase(req.context.models,
            menuNo
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

export default deleteMenu;