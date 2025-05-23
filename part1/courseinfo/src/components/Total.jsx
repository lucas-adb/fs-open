function Total({ exercises }) {
  const sumOfExercises = (exercises) => {
    let sum = 0;

    exercises.forEach((exercise) => {
      sum += exercise;
    });

    return sum;
  };

  return <p>Number of exercises {sumOfExercises(exercises)}</p>;
}

export default Total;
