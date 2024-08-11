import Models from '@/models';

const GetMenuUseCase = async (
    models: Models, 
    menuId: number
    ) => {
        if (menuId == null) {
            throw Error("menuGetUseCase: menuId is required")
        }
        let condition = {};
        if (menuId !== null) {
            condition = Object.assign(condition, {
                menuId
            });
        }        

        const data = await models.Menu.findOne({
            where: condition,
            attributes: [
                'menuId',
                'menuName',
                'menuPrice',
            ],
        });
        
        if(data==null){
            throw Error("NOT_FOUND")
        }
        
        return data
}

export default GetMenuUseCase;