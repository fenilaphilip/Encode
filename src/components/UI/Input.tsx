import Button from "./Button.tsx";
import { useState } from "react";

const Input: React.FC<{
  btnName: string;
  inputConsumer: (text: string) => void;
}> = ({ btnName, inputConsumer }) => {
  const [enteredText, setEnteredText] = useState("");

  function handleChange(text: string) {
    setEnteredText(text);
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    inputConsumer(enteredText);
    setEnteredText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2"
        placeholder="Enter Text"
        value={enteredText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />

      <Button type="submit">{btnName}</Button>
    </form>
  );
};
export default Input;
