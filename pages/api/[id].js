
import { getById } from '../../Database/db'


const AvoDetail = async(req, res)=>{

   
    var item ={}
    console.log(req.query.id)
    const id = req.query.id

    item  =  await getById(id);
    
    res.json({data:item});
    }

export default AvoDetail







