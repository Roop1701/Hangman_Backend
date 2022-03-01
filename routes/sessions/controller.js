function Createsession(req, res) {
  const name = req.body.name;

  // TODO: WE WILL DO SOMETHING WITH THIS NAME
  res.json({
    id: "123",
    livesleft: 6,
    result: false,
    maskedWord: ["_", "_"],
  });
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
