const { Word, GameSession } = require("../../models");
const serializeGameSession = require("../../serializers/gameSession");

async function Createsession(req, res) {
  const name = req.body.name;
  const word = await Word.findOne();
  const gameSession = await GameSession.create({
    Player_name: name,
    Played_letters: "",
    wordId: word.id,
    StartedAt: new Date(),
  });

  res.json(await serializeGameSession(gameSession));
}

function Playsession(req, res) {
  const gameID = req.params.id;
  const letter = req.body.letter;
  console.log(gameID);
  console.log(letter);
  //TODO: we'll do something with the letter
  res.json({
    id: "123",
    livesleft: 6,
    result: false,
    maskedWord: ["_", "_"],
  });
}

module.exports = {
  Createsession,
  Playsession,
};
