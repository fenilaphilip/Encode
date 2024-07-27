import { ReactNode, useState } from "react";
import Button from "./Button";

const History: React.FC<{
  store: string;
  input: string | undefined;
  showAgain: (text: string) => void;
}> = ({ store, input, showAgain }) => {
  const [emptyHistory, setEmptyHistory] = useState(true);

  const history: string[] = JSON.parse(localStorage.getItem(store) ?? "[]");
  if (input && history[history.length - 1] != input) {
    history.push(input);
  }

  localStorage.setItem(store, JSON.stringify(history));

  function handleClick(text: string) {
    showAgain(text);
  }

  function handleClearButtonClick() {
    setEmptyHistory(false);
    input = "";
    localStorage.removeItem(`${store}`);
  }

  let message: ReactNode;
  if (history.length !== 0) {
    message = (
      <div className="float-right">
        <Button type="button" onClick={handleClearButtonClick}>
          Clear History
        </Button>
      </div>
    );
  } else {
    message = (
      <p className="p-4 text-xl">Currently, there is no history to show!</p>
    );
  }

  return (
    <>
      {emptyHistory && (
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
      )}
      {message}
    </>
  );
};

export default History;
