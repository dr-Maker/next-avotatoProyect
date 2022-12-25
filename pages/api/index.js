import data  from '../../Database/data.json'
import { getAll } from '../../Database/db'


const allAvos = async(req, res)=>{

var all ={}
all  =  await getAll();

res.json({data:all});
}

export default allAvos

