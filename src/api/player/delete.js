// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
const fs = require('fs');

export default async (req, res) => {
  let playerID = req.params.id
  let data
  try {
    data = await fs.promises.readFile('data.json', 'utf8')
  }
  catch (err) {
    res.status(400).json({ message: 'Something went wrong' })
  }
  let players = JSON.parse(data)
  let playerPresent = JSON.parse(players).filter((player) => {
    return player.id === playerID
  })
  if (!playerPresent) {
    res.status(400).json({
      message: 'Player not found'
    })
  }
  for (let i = 0; i < players.length; i++) {
    if (playerID === players.id) {
      players.splice(i, 1);
    }
  }
  res.status(200).json({
    message: 'deleted successfully'
  })
}
