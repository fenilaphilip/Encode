const History: React.FC<{ store: string; input: string | undefined }> = ({
  store,
  input,
}) => {
  const history: string[] = JSON.parse(localStorage.getItem(store) ?? "[]");
  if (input && history[history.length - 1] != input) {
    history.push(input);
  }

  localStorage.setItem(store, JSON.stringify(history));
  return (
    <>
      <ul>
        {history.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
};

export default History;
