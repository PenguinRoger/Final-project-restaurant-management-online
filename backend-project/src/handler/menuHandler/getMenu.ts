import menuUsecase from '@/use_case/menuUsecase';

const getMenu = async (req,res) => {
    try{
        const menuNo = Number(req.params.id);
        const result = await menuUsecase.getMenuUsecase(req.context.models,
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

export default getMenu;