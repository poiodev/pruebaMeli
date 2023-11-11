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

  for (let i = 0; i < trainings[0].players.length; i++) {
    const player = trainings[0].players[i];
    const shootingPower = (player.speed + player.shootingPower) * 0.2;
    // const speed = player.speed *
  }

  res.status(200).json({ message: "funciona 2" });
};

export default { setTraining, getStartingTeam };
