import React, { useEffect, useState } from "react";
import { getCommits } from "./utils/transports";
import { calculateScore } from "./utils/helpers";
import { HeaderTitle } from "../../common";

const Exercise1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(null);

  const prepareData = async () => {
    setIsLoading(true);
    try {
      const response = await getCommits();
      setScore(calculateScore(response));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    prepareData();
  }, []);

  return (
    <div className="exercise1-container">
      <HeaderTitle title="Exercise 1" backButton />
      {isLoading && <span>Loading...</span>}
      {!isLoading && score !== null && (
        <span>{`DHH's github score is ${score}`}</span>
      )}
    </div>
  );
};

export default Exercise1;
