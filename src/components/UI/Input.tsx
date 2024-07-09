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
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-text">Enter Text</label>
      <input
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
