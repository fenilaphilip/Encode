const History: React.FC<{
  store: string;
  input: string | undefined;
  showAgain: (text: string) => void;
}> = ({ store, input, showAgain }) => {
  const history: string[] = JSON.parse(localStorage.getItem(store) ?? "[]");
  if (input && history[history.length - 1] != input) {
    history.push(input);
  }

  localStorage.setItem(store, JSON.stringify(history));

  function handleClick(text: string) {
    console.log(text);
    showAgain(text);
  }

  return (
    <>
      <ul className="container overflow-y-auto max-h-96 p-2">
        {history.map((text, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(text)}
              className="hover:bg-black hover:text-white p-2 "
            >
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default History;
