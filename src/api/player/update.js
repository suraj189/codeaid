// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
const fs = require('fs');

export default async (req, res) => {
  let data = req.body;
  let players
  let playerID = req.params.id

  try {
    players = await fs.promises.readFile('data.json', 'utf8')
  }
  catch (err) {
    res.status(400).json({ message: 'Something went wrong' })
  }
  let playerPresent = JSON.parse(players).filter((player) => {
    return player.id === playerID
  })
  if (!playerPresent) {
    res.status(400).json({
      message: 'Player not found'
    })
  } else {
    let updatePlayer = JSON.parse(players).map((player) => {
      if (player.id === playerID) {
        player.name = data.name,
          position = data.position,
          playerSkills = data.playerSkills
      }
    })
    fs.writeFile('data.json', JSON.stringify(updatePlayer), () => {
      if (err) throw err
      res.status(200).json({
        message: 'player data is updated'
      })

    })
  }
}
