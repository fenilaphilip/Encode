const Result: React.FC<{ result: string; userInput: string }> = ({
  result,
  userInput,
}) => {
  return (
    <>
      <h2 className="px-4">Encoded Text for {userInput}</h2>
      <div className="text-center font-bold text-xl overflow-x-scroll">
        <h2>{result}</h2>
      </div>
    </>
  );
};

export default Result;
