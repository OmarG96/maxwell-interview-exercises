const scores = {
  IssuesEvent: 7,
  IssueCommentEvent: 6,
  PushEvent: 5,
  PullRequestReviewCommentEvent: 4,
  WatchEvent: 3,
  CreateEvent: 2,
  others: 1,
};

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
