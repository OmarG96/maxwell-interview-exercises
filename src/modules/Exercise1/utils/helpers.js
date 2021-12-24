import scoresData from "../data/scores.json";

const { data: scores } = scoresData;

const calculateScore = (data = []) => {
  let totalScore = 0;

  data.forEach((element) => {
    const { type } = element;

    if (scores[type]) {
      totalScore += scores[type];
    } else {
      totalScore += scores.others;
    }
  });

  return totalScore;
};

export { calculateScore };
