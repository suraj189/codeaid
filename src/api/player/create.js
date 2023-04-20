// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------


import { v4 as uuidv4 } from 'uuid';
const fs = require('fs');


export default async (req, res) => {
  let data = req.body;
  let positions = ["defender", "midfielder", "forward"];
  let skills = ["defense", "attack", "speed", "strength", "stamina"];
  if (
    data.name.trim() === "" ||
    data.position.trim() === "" ||
    data.playerSkills.length === 0
  ) {
    //logic for testing if the field are empty
    res.status(400).json({
      message: `Please fill required details`,
    });
  }

  let validPosition = positions.filter((position) => {
    return position.toLowerCase() === data.position.toLowerCase();
  });
  if (validPosition.length === 0) {
    res.status(400).json({
      message: `Invalid value for position: ${data.position}`,
    });
  }
  for (let i = 0; i < data.playerSkills.length; i++) {
    if (!skills.includes(data.playerSkills[i].skill)) {
      res.status(400).json({
        message: `Invalid value for skills: ${data.playerSkills[i].skill}`,
      });
    }
    break
  }

  let player = {
    id: uuidv4(),
    name: data.name,
    position: data.position,
    playerSkills: data.playerSkills,
  };

  if (player) {
    res.status(201).json({
      id: uuidv4(),
      name: player.name,
      position: player.position,
      playerSkills: player.playerSkills
    })

    if (!fs.existsSync('data.json')) {
      //create new file
      let players = [player]
      fs.writeFile('data.json', JSON.stringify(players), () => {
        if (err) throw err
        console.log('complete')
      })
    } else {
      fs.readFile("data.json", "utf8", function (err, data) {
        let players = []
        if (err) {
          throw err
        } else {
          players.push(JSON.parse(data), player)
          fs.writeFile('data.json', JSON.stringify(players), () => {
            if (err) throw err
            console.log('complete')
          })
        };
      });
    }
  } else {
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
};
