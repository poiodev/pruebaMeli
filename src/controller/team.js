let trainings = [];
console.log(trainings);

const setTraining = async (req, res) => {
  const training = req.body;
  trainings.push(training);
  console.log(trainings);
  return res.status(200).json({
    message: `Se registro el entrenamiento ${training.training} exitosamente`,
  });
};

const getStartingTeam = async (req, res) => {
  if (trainings.length < 3) {
    return res
      .status(400)
      .json({ message: "No hay suficiente información de entrenamientos" });
  }

  let results = [];

  for (let i = 0; i < trainings[0].players.length; i++) {
    const player = trainings[0].players[i];
    const shootingPower = (player.speed_km_h + player.shootingPower_km_h) * 0.2;
    const speed = player.speed_km_h * 0.3;
    const passes = player.passes * 0.5;
    const result = shootingPower + speed + passes;

    results.push({ player: player.name, result });
  }

  results.sort((a, b) => b.result - a.result);

  const finalTeam = results.slice(0, 5);

  res.status(200).json({ finalTeam });
};

export default { setTraining, getStartingTeam };
