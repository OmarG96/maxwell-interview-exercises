const getCommits = () => {
  return fetch("https://api.github.com/users/dhh/events/public", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Error getting commits");
    });
};

export { getCommits };
