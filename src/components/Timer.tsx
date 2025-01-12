interface Props {
  timeLeft: number;
  currentRound: number;
  totalRounds: number;
}

const Timer = ({ timeLeft, currentRound, totalRounds }: Props) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h1>
        {minutes} : {seconds}
      </h1>
      <h2>
        Round {currentRound} of {totalRounds}
      </h2>
    </div>
  );
};

export default Timer;
