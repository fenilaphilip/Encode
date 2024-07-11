const History: React.FC<{ history: string[] }> = ({ history }) => {
  return (
    <>
      <ul>
        {history.map((text) => {
          return <li>{text}</li>;
        })}
      </ul>
    </>
  );
};

export default History;
