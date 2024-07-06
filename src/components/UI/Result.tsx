const Result: React.FC<{ result: string }> = ({ result }) => {
  return <>{result && <h2>{result}</h2>}</>;
};

export default Result;
