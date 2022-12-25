import data from'./data.json';


var dataResult = Object.values(data);

export async function  getAll(){
  const  asArray = Object.values(data)
  return asArray
}


export async function getById(id) {
    const result = await dataResult.filter(data => data.id == id)
    return result
}




