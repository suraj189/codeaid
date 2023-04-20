// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
const fs = require('fs');


export default async (req, res) => {
  try {
    const data = await fs.promises.readFile('data.json', 'utf8')
    return res.status(200).json(JSON.parse(data))
  }
  catch(err) {
    res.status(400).json({message: 'Something went wrong'})
  }
  
}
